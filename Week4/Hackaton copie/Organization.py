import psycopg2

class Organizator:
    def __init__(self, organization_name, responsible_name, date_of_activity, telephone, mail, location, num_people_needed, description, category, provide_transport, insurance, majority, item_id=None):
        self.item_id = item_id
        self.organization_name = organization_name
        self.responsible_name = responsible_name
        self.date_of_activity = date_of_activity
        self.telephone = telephone
        self.mail = mail
        self.location = location
        self.num_people_needed = num_people_needed
        self.description = description
        self.category = category
        self.provide_transport = provide_transport
        self.insurance = insurance
        self.majority = majority
          
        # Connection with the DB
        DBNAME = 'Volunteering'
        USER = 'postgres'
        PASSWORD = 'password'
        HOST = "localhost"
        PORT = "5432"

        self.connection = psycopg2.connect(
            dbname=DBNAME, user=USER, password=PASSWORD, host=HOST, port=PORT
        )

        # Create a cursor (tool to run queries)
        self.cursor = self.connection.cursor()

    def save_orga(self):
        try:
            query_orga = '''
            INSERT INTO organization (
                organization_name, responsible_name, date_of_activity, telephone, mail,
                location, num_people_needed, description, category, provide_transport, insurance, majority
            ) VALUES (
                %s, %s, %s, %s, %s,
                %s, %s, %s, %s, %s, %s, %s
            ) returning id
            '''
            self.cursor.execute(query_orga, (self.organization_name, self.responsible_name, self.date_of_activity, self.telephone, self.mail, self.location, self.num_people_needed, self.description, self.category, self.provide_transport, self.insurance, self.majority)) 

            self.item_id = self.cursor.fetchone()[0]

            query_match = '''
            INSERT INTO match (
                organization_name, date_of_activity, location, num_people_needed, description,
                category, provide_transport, insurance, majority, organization_id
            ) VALUES (
                %s, %s, %s, %s, %s, %s, %s, %s, %s, %s
            )
            '''
            match_values = (
                self.organization_name, self.date_of_activity, self.location, self.num_people_needed,
                self.description, self.category, self.provide_transport, self.insurance, self.majority,
                self.item_id
            )
            self.cursor.execute(query_match, match_values)

            self.connection.commit()
            print('Your request has been saved successfully.')
        except psycopg2.Error as e:
            print(f"Error saving request: {e}")

    def delete_orga(self) :
        try:
            query_orga = '''
            DELETE FROM organization WHERE
            organization_name = %s AND
            responsible_name = %s AND
            date_of_activity = %s AND
            telephone = %s
            '''
            self.cursor.execute(query_orga, (self.organization_name, self.responsible_name, self.date_of_activity, self.telephone))

            query_match = '''
            DELETE FROM match WHERE
            organization_name = %s AND
            date_of_activity = %s AND
            location = %s AND
            num_people_needed = %s AND
            description = %s AND
            category = %s AND
            provide_transport = %s AND
            insurance = %s AND
            majority = %s
            '''
            match_values = (
                self.organization_name, self.date_of_activity, self.location, self.num_people_needed,
                self.description, self.category, self.provide_transport, self.insurance, self.majority
            )
            self.cursor.execute(query_match, match_values)

            self.connection.commit()
            print('You have deleted your request successfully.')
        except psycopg2.Error as e:
            print(f"Error deleting request: {e}.")

    def update_orga(self, update_fields, new_values) :
        try:
            if not update_fields or len(update_fields) != len(new_values):
                raise ValueError("No fields provided for update.")
            set_clause = ", ".join(f"{field} = %s" for field in update_fields)
            query_orga = f'''
            UPDATE organization SET {set_clause} WHERE organization_name = %s
            AND date_of_activity = %s
            AND description = %s
            '''
            values = new_values + [self.organization_name,self.date_of_activity, self.description]

            self.cursor.execute(query_orga, values)

            query_match = f'''
            UPDATE match SET {set_clause} WHERE organization_name = %s
            '''
            match_values = new_values + [self.organization_name, self.date_of_activity, self.description]
            self.cursor.execute(query_match, match_values)

            self.connection.commit()
            print('Request updated successfully.')
        except ValueError as ve:
            print(f"Error: {ve}")
        except psycopg2.Error as e:
            print(f"Error updating your request: {e}.")
          

#if __name__ == "__main__":
     #Create a new menu item object
    #new_item = Organizator('Kibboutz L','New K','2023-12-13', '+123456789', 'newemail@example.com', 'Central', 4, 'bla bla bla', 'For all', 'Yes', 'No', 'Yes')  # Example item
    
     # Save the menu item to the database
    #new_item.save_orga()
     # Update 
    #update_fields = ['responsible_name', 'telephone', 'mail']
    #new_values = ['A', 'AA', 'AAA']
    #new_item.update_orga(update_fields, new_values)
     # Delete
     #new_item.delete()

    
class MenuOrga:
    def __init__(self, name, resp_name, date, tel) :
        self.name = name
        self.resp = resp_name
        self.date = date
        self.tel = tel

        DBNAME = 'Volunteering'
        USER = 'postgres'
        PASSWORD = 'password'
        HOST = "localhost"
        PORT = "5432"

        self.connection = psycopg2.connect(
        dbname=DBNAME, user=USER, password=PASSWORD, host=HOST, port=PORT
        )

        # 2. Create a cursor (tool to run queries)
        self.cursor = self.connection.cursor()

    def get_by_name(self):
        try:
            query = f'''
            SELECT organization_name, responsible_name, date_of_activity, telephone, mail, location, num_people_needed, description, category, provide_transport, insurance, majority
            FROM organization
            where organization_name=%s AND
            responsible_name = %s AND
            date_of_activity = %s AND
            telephone = %s
            '''
            self.cursor.execute(query, (self.name,self.resp, self.date, self.tel,))
            result = self.cursor.fetchone() 
            if result:
                organization_name, responsible_name, date_of_activity, telephone, mail, location, num_people_needed, description, category, provide_transport, insurance, majority = result
                return Organizator(organization_name, responsible_name, date_of_activity, telephone, mail, location, num_people_needed, description, category, provide_transport, insurance, majority)
        except:
            return 'None'

if __name__ == "__main__":

    get_acti = MenuOrga('Kibboutz Z', 'New Responsible', '2023-12-13', '+123456789')
    organization = get_acti.get_by_name()
    if organization is None:
        print("Organization not found.")
    else:
        print(f"Organization found: {organization.__dict__}")
