def match_making(self):
    try:
        DBNAME = "Volunteering"
        USER = "postgres"
        PASSWORD ="password"
        HOST = "localhost"
        PORT = "5432"
        
        connection = psycopg2.connect(dbname=DBNAME, user=USER, password=PASSWORD, host=HOST, port=PORT)
        cursor = connection.cursor()
        
        query = '''
            SELECT
                v.date_of_availability,
                v.location,
                v.task,
                v.provide_transport,
                v.insurance,
                v.num_people_in_group,
                m.id,
                m.organization_name,
                m.date_of_activity,
                m.location,
                m.category,
                m.provide_transport,
                m.insurance,
                m.remaining_places,
                m.people_registered,
                m.num_people_needed
            FROM volunteer AS v
            INNER JOIN match AS m
            ON v.date_of_availability = m.date_of_activity
            AND (v.location = 'All' OR v.location::text = m.location::text)
            AND (v.insurance::text = m.insurance::text OR m.insurance = 'Yes' OR v.insurance = 'Yes')
            AND (v.provide_transport = 'No' OR m.provide_transport = 'Yes')
            AND (v.task = 'All' OR m.category = 'For all')
            AND m.id = %s
        '''
        
        cursor.execute(query, (self.id_select,))
        result = cursor.fetchall()

        if result:
            for row in result:
                match_id = int(row[6])
                num_people_in_group = int(row[5]) if row[5] is not None else 0
                num_people_needed = int(row[15]) if row[15] is not None else 0
                people_registered = int(row[14]) if row[14] is not None else 0
                
                update_query = '''
                    UPDATE match
                    SET people_registered = %s,
                        remaining_places = %s
                    WHERE id = %s;
                '''
                
                new_people_registered = people_registered + num_people_in_group
                new_remaining_places = num_people_needed - num_people_in_group
                
                cursor.execute(update_query, (new_people_registered, new_remaining_places, match_id))
                connection.commit()

                print(f"You are registered successfully to {row[7]} on {row[8]} for {num_people_in_group} people.")
        
        else:
            raise psycopg2.Error("No matching records found.")

    except psycopg2.Error as e:
        print(f"Error in match making process: {e}")
    
    finally:
        if cursor:
            cursor.close()
        if connection:
            connection.close()