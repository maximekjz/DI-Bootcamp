import psycopg2


class Volunteer:

     def __init__(self, first_name, last_name, date_of_availability, telephone, mail, location, num_people_in_group, task, provide_transport, insurance, item_id=None) :
        self.item_id = item_id
        self.first_name = first_name
        self.last_name = last_name
        self.date_of_availability = date_of_availability
        self.telephone = telephone
        self.mail = mail
        self.location = location
        self.num_people_in_group = num_people_in_group
        self.task = task
        self.provide_transport = provide_transport
        self.insurance = insurance
          # Connection with the DB

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

     # for save(), update() and cancel() I 'play' with id name and price on purpose

     def save_vol(self) :
        try:
            query = f'''
            INSERT INTO volunteer (
            first_name, last_name, date_of_availability, telephone, mail, location, 
            num_people_in_group, task, provide_transport, insurance
            ) VALUES (
            %s, %s, %s, %s, %s,
            %s, %s, %s, %s, %s
            )
            '''
            self.cursor.execute(query, (self.first_name, self.last_name, self.date_of_availability, self.telephone, self.mail, self.location, self.num_people_in_group, self.task, self.provide_transport, self.insurance)) 
            self.connection.commit()
            print('Your request has been saved successfully.')
        except psycopg2.Error as e:
            print(f"Error saving request : {e}.")


     def delete_vol(self) :
        try:
            query = f'''
            DELETE FROM volunteer WHERE
            first_name = %s AND
            last_name = %s AND
            date_of_availability = %s AND
            telephone = %s
            '''
            self.cursor.execute(query, (self.first_name, self.last_name, self.date_of_availability, self.telephone))
            self.connection.commit()
            print('You have deleted your request successfully.')
        except psycopg2.Error as e:
            print(f"Error deleting request: {e}.")

     def update_vol(self, update_fields, new_values) :
        try:
            if not update_fields or len(update_fields) != len(new_values):
                raise ValueError("No fields provided for update.")
            set_clause = ", ".join(f"{field} = %s" for field in update_fields)
            query = f'''
            UPDATE volunteer SET {set_clause} WHERE telephone = %s
            AND date_of_availability = %s
            '''
            values = new_values + [self.telephone, self.date_of_availability]
            self.cursor.execute(query, values)
            self.connection.commit()
            print('Request updated successfully.')
        except ValueError as ve:
            print(f"Error: {ve}")
        except psycopg2.Error as e:
            print(f"Error updating your request: {e}.")
          

#if __name__ == "__main__":
     #Create a new menu item object
    # new_item = Volunteer('Tom','Kpm','2023-12-13', '+972557709962', 'maxim@gmail.com', 'Central', 4, 'All', 'No', 'Yes')  # Example item
    
     # Save the menu item to the database
     #new_item.save()
     # Update 
     #update_fields = ['last_name', 'telephone', 'mail']
     #new_values = ['Levi', '+123456789', 'newemail@example.com']
     #new_item.update(update_fields, new_values)
     # Delete
    #new_item.delete()

    
class MenuOrgavol:

     def __init__(self, first_name, last_name, date, tel) :
        self.first_name = first_name
        self.last_name = last_name
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

     def get_by_name_vol(self):
        try:
            query = f'''
            SELECT first_name, last_name, date_of_availability, telephone, mail, location, 
            num_people_in_group, task, provide_transport, insurance
            FROM volunteer
            where first_name=%s AND
            last_name = %s AND
            date_of_availability = %s AND
            telephone = %s
            '''
            self.cursor.execute(query, (self.first_name,self.last_name, self.date, self.tel,))
            result = self.cursor.fetchone() 
            if result:
                first_name, last_name, date_of_availability, telephone, mail, location, num_people_in_group, task, provide_transport, insurance = result
                return Volunteer(first_name, last_name, date_of_availability, telephone, mail, location, num_people_in_group, task, provide_transport, insurance)
        except:
            return 'None'

if __name__ == "__main__":

    get_acti = MenuOrgavol('Tom', 'Levi', '2023-12-13', '+123456789')
    organization = get_acti.get_by_name_vol()
    if organization is None:
        print("Organization not found.")
    else:
        print(f"Organization found: {organization.__dict__}")