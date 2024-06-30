import psycopg2
from Organization import Organizator, MenuOrga
from Volunteer_table import Volunteer, MenuOrgavol
import datetime

def show_user_menu():
    while True:    
        v_or_org = input('''Please select your role
        Volunteer (V)
        Organization (O)
        Exit (E)
        ''').upper()
        if v_or_org == 'O':
            user_orga()
            break
        if v_or_org == 'V':
             user_volunteer()
             break
        if v_or_org == 'E':
             print('Thanks')
             break
        else :     
            print('Error, choose again')

def user_orga():

    while True:
        try:
            user_choice=input(''' Please select an option
            View my request (V)
            Add a request (A)
            Delete a request (D)
            Update a request (U)
            Show the requests (S)
            Exit (E)
                    ''').upper()
            
            if user_choice == 'V':
                request_name = input('Which request do you want to see ? Please enter your organization name ')
                resp_name= input('Please enter your name ')
                date=input('Please enter the date of your activity(format YYYY-MM-DD) ')
                tel=input('Please enter your phone number ')
                request = MenuOrga(request_name, resp_name, date, tel)
                organization = request.get_by_name()
                if organization is None:
                    print("Organization not found.")
                else:
                    print(f"Organization found: {organization.__dict__}")
                print(request.get_by_name())
            elif user_choice == 'A':
                add_request_to_list()
            elif user_choice == 'D':
                remove_request_from_list()
            elif user_choice == 'U':
                update_request_from_list()
            elif user_choice == 'S':
                show_requests_orga()  
                break
            elif user_choice == 'E':
                print('Thank you')
                break
            else:
                print('Error, choose again')
        except Exception as e:
            print(f"Error: {e}")

def add_request_to_list():
    try:
        organization_name = input("Organization's name: ")
        responsible_name = input("Responsible's name: ")
        while True:
            date_of_activity = input("Date of activity (YYYY-MM-DD): ")
            try:
                datetime.datetime.strptime(date_of_activity, '%Y-%m-%d')
                break
            except ValueError:
                print("Invalid date format. Please enter the date in YYYY-MM-DD format.")
        telephone = input("Telephone: ")
        mail = input("Mail: ")
        while True:
            location = input("Location (Central, South or North): ")
            if location in ['Central', 'South', 'North']:
                break
            else:
                print("Invalid location. Please enter Central, South or North.")
        while True:
            num_people_needed = input("Number of people needed: ")
            if num_people_needed.isdigit():
                break
            else :
                print("You need to enter a number")
        description = input("Description of the activity: ")
        while True:
            category = input("Category: Please enter For all or Physical work. ")
            if category in ['For all','Physical work']:
                break
            else:
                print('Invalid. Please enter For all or Physical work')
        while True:
            provide_transport = input("Do you provide transportation ? (Yes or No): ")
            if provide_transport in ['Yes', 'No']:
                break
            else:
                print("Invalid. Please enter Yes or No.")
        while True:
            insurance = input("Do you provide insurance ? (Yes or No): ")
            if insurance in ['Yes', 'No']:
                break
            else:
                print("Invalid. Please enter Yes or No.")   
        while True:
            majority = input("Do people need to be major ? (Yes or No): ")
            if majority in ['Yes', 'No']:
                break
            else:
                print("Invalid. Plese enter Yes or No.")                     
        new_request=Organizator(organization_name, responsible_name, date_of_activity, telephone, mail, location, num_people_needed, description, category, provide_transport, insurance, majority)
        new_request.save_orga()
        print("Request added successfully.")
    except Exception as e:
        print(f"Error adding request: {e}")

def remove_request_from_list():
    try:
        organization_name = input("Organization's name: ")
        responsible_name = input("Responsible's name: ")
        date_of_activity = input("Date of activity (YYYY-MM-DD): ")
        telephone = input("Telephone: ")
        item_remove = MenuOrga(organization_name, responsible_name, date_of_activity, telephone).get_by_name()
        item_remove.delete_orga()
        print("Request deleted successfully.")
    except Exception as e:
        print(f"Error deleting request: {e}")

# It would be better to find a way like giving the id and then update. Here I need to enter all the 
def update_request_from_list():
    try:
        organization_name = input("Organization's name: ")
        responsible_name = input("Responsible's name: ")
        date_of_activity = input("Date of activity (YYYY-MM-DD): ")
        telephone = input("Telephone: ")
        organization = MenuOrga(organization_name, responsible_name, date_of_activity, telephone).get_by_name()
        if not organization:
            print(f"Organization '{organization_name}' not found.")
            return
        update_fields = []
        new_values = []
        description = input("Description of the activity: ")
        while True:
            update_field = input('''Which field do you want to change?
                Responsible's name (R)
                Date of activity (D)
                Telephone (T)
                Email (E)
                Location (L)
                # People needed (P)                                  
                Description of the activity (DE)
                Category (C)
                Transportation (TR)
                Insurance (I) 
                Majority needed (M)
                Exit (EX)               
                ''').upper()                 
            if update_field == 'EX':
                break

            if update_field in ['R', 'D', 'T', 'E', 'L', 'P', 'DE', 'C', 'TR', 'I', 'M']:
                if update_field in ['L', 'P', 'TR', 'I', 'M']:
                    while True:
                        new_value = input(f"New value for {update_field}: ")
                        if update_field == 'L':
                            if new_value in ['Central', 'South', 'North']:
                                update_field='location'
                                break
                            else:
                                print("Invalid location. Please enter Central, South or North.")
                        elif update_field == 'P':
                            if new_value.isdigit():
                                update_field='num_people_added'
                                break
                            else:
                                print("You need to enter a number.")
                        elif update_field in ['TR', 'I', 'M']:
                            if new_value in ['Yes', 'No']:
                                if update_field=='TR':
                                    update_field='provide_transport'
                                elif update_field=='I':
                                    update_field='insurance'
                                else:
                                     update_field='majority'
                                break
                            else:
                                print("Invalid. Please enter Yes or No.")
                else:
                    if update_field=='R':
                        update_field='responsible_name'
                    elif update_field=='D':
                        update_field='date_of_activity'
                    elif update_field=='T':
                         update_field='telephone'
                    elif update_field=='E':
                        update_field='mail'
                    elif update_field=='C':
                        update_field='category'
                    elif update_field=='DE':
                        update_field='description'
                new_value = input(f"New value for {update_field}: ")
                update_fields.append(update_field)
                new_values.append(new_value)
            else:
                print('Please select an item from the menu.')
        update_item = MenuOrga(organization_name, responsible_name, date_of_activity, telephone).get_by_name()
        update_item.update_orga(update_fields, new_values)
        print("Updated successfully.")
    except Exception as e:
        print(f"Error updating item: {e}")

#---------------------------------------------------------------------------------------------------------------------------------------------------------
#---------------------------------------------------------------------------------------------------------------------------------------------------------
#----------------------------------------------------------------------------------------------VOLUNTEER--------------------------------------------------
#---------------------------------------------------------------------------------------------------------------------------------------------------------
#---------------------------------------------------------------------------------------------------------------------------------------------------------

def user_volunteer():

    while True:
        try:
            user_choice=input(''' Please select an option
            View my request (V)
            Find a volunteering (A)
            Delete a request (D)
            Update a request (U)
            Show my registration (S)
            Exit (E)
                    ''').upper()
            
            if user_choice == 'V':
                request_name = input('Which request do you want to see ? Please enter your first name ')
                last_name= input('Please enter your last name ')
                date=input('Please enter the date of your activity(format YYYY-MM-DD) ')
                tel=input('Please enter your phone number ')
                request = MenuOrgavol(request_name, last_name, date, tel)
                organization = request.get_by_name_vol()
                if organization is None:
                    print("Organization not found.")
                else:
                    print(f"Organization found: {organization.__dict__}")
            elif user_choice == 'A':
                show_requests()
            elif user_choice == 'D':
                remove_vol_from_list()
            elif user_choice == 'U':
                update_vol_from_list()
            elif user_choice == 'S':
                show_requests_vol()  
                break 
            elif user_choice == 'E':
                print('Thank you')
                break
            else:
                print('Error, choose again')
        except Exception as e:
            print(f"Error: {e}")

def add_vol_to_list():

    try:
        first_name = input("First name: ")
        last_name = input("Last name: ")
        while True:
            date_of_availability = input("Date of availability (YYYY-MM-DD): ")
            try:
                datetime.datetime.strptime(date_of_availability, '%Y-%m-%d')
                break
            except ValueError:
                print("Invalid date format. Please enter the date in YYYY-MM-DD format.")
        telephone = input("Telephone: ")
        mail = input("Mail: ")
        while True:
            location = input("Location (All, Central, South or North): ")
            if location in ['All', 'Central', 'South', 'North']:
                break
            else:
                print("Invalid location. Please enter Central, South or North.")
        while True:
            num_people_in_group = input("Number of people in your group: ")
            if num_people_in_group.isdigit():
                break
            else :
                print("You need to enter a number")
        while True:
            task = input("Category: Please enter All or No physical work. ")
            if task in ['All','No physical work']:
                break
            else:
                print('Invalid. Please enter All or No physical work')
        while True:
            provide_transport = input("Do you need transportation ? (Yes or No): ")
            if provide_transport in ['Yes', 'No']:
                break
            else:
                print("Invalid. Please enter Yes or No.")
        while True:
            insurance = input("Do you have an insurance ? (Yes or No): ")
            if insurance in ['Yes', 'No']:
                break
            else:
                print("Invalid. Please enter Yes or No.")                 
        new_request=Volunteer(first_name, last_name, date_of_availability, telephone, mail, location, num_people_in_group, task, provide_transport, insurance)
        new_request.save_vol()
        print("Request added successfully.")
    except Exception as e:
        print(f"Error adding request: {e}")

def remove_vol_from_list():
    try:
        first_name = input("First name: ")
        last_name = input("Last name: ")
        date_of_availability = input("Date of availability (YYYY-MM-DD): ")
        telephone = input("Telephone: ")
        item_remove = MenuOrgavol(first_name, last_name, date_of_availability, telephone).get_by_name_vol()
        item_remove.delete_vol()
        print("Request deleted successfully.")
    except Exception as e:
        print(f"Error deleting request: {e}")

# It would be better to find a way like giving the id and then update. Here I need to enter all the 
def update_vol_from_list():
    try:
        first_name = input("First name: ")
        last_name = input("Last name: ")
        date_of_availability = input("Date of availability (YYYY-MM-DD): ")
        telephone = input("Telephone: ")
        volunteer = MenuOrgavol(first_name, last_name, date_of_availability, telephone).get_by_name_vol()
        if not volunteer:
            print(f"Volunteer '{first_name}' not found.")
            return
        update_fields = []
        new_values = []
        while True:
            update_field = input('''Which field do you want to change?
                First name (F)
                Last name (LN)
                Date of availability (D)
                Telephone (T)
                Email (E)
                Location (L)
                # People in group (P)                                  
                Task (TA)
                Transportation (TR)
                Insurance (I) 
                Exit (EX)               
                ''').upper()                 
            if update_field == 'EX':
                break

            if update_field in ['F', 'D', 'T', 'E', 'L', 'P', 'TR', 'I','LN', 'TA']:
                if update_field in ['L', 'P', 'TR', 'I', 'M']:
                    while True:
                        new_value = input(f"New value for {update_field}: ")
                        if update_field == 'L':
                            if new_value in ['All','Central', 'South', 'North']:
                                update_field='location'
                                break
                            else:
                                print("Invalid location. Please enter All, Central, South or North.")
                        if update_field == 'TA':
                            if new_value in ['All','No physical work']:
                                update_field='task'
                                break
                            else:
                                print("Invalid task. Please enter All or No physical work.")
                        elif update_field == 'P':
                            if new_value.isdigit():
                                update_field='num_people_in_group'
                                break
                            else:
                                print("You need to enter a number.")
                        elif update_field in ['TR', 'I']:
                            if new_value in ['Yes', 'No']:
                                if update_field=='TR':
                                    update_field='provide_transport'
                                elif update_field=='I':
                                    update_field='insurance'
                                break
                            else:
                                print("Invalid. Please enter Yes or No.")
                else:
                    if update_field=='F':
                        update_field='first_name'
                    elif update_field=='D':
                        update_field='date_of_availability'
                    elif update_field=='T':
                         update_field='telephone'
                    elif update_field=='E':
                        update_field='mail'
                    elif update_field=='LN':
                        update_field='last_name'
                new_value = input(f"New value for {update_field}: ")
                update_fields.append(update_field)
                new_values.append(new_value)
            else:
                print('Please select an item from the menu.')
        update_item = MenuOrgavol(first_name, last_name, date_of_availability, telephone).get_by_name_vol()
        update_item.update_vol(update_fields, new_values)
        print("Updated successfully.")
    except Exception as e:
        print(f"Error updating item: {e}")



def show_requests_orga():

    try:
        organization_name = input("Organization's name: ")
        responsible_name = input("Responsible's name: ")
        date_of_activity = input("Date of activity (YYYY-MM-DD): ")
        telephone = input("Telephone: ")
        item = MenuOrga(organization_name, responsible_name, date_of_activity, telephone).get_by_name()
        if not item:
            print(f"No organization found for {organization_name}, {responsible_name}, {date_of_activity}, {telephone}")
            return
        query = f'''
            SELECT *
            FROM organization
            where organization_name=%s AND
            responsible_name = %s AND
            date_of_activity = %s AND
            telephone = %s
            '''
        item.cursor.execute(query, (organization_name, responsible_name, date_of_activity, telephone,))
        result = item.cursor.fetchone() 
        if result:
            columns = [desc[0] for desc in item.cursor.description]
            result_dict = dict(zip(columns, result))
            print("Organization details:")
            for key, value in result_dict.items():
                print(f"{key}: {value}")
        else:
            print("No results found.")
    except psycopg2.Error as e:
        print(f"Error fetching request: {e}")
    except Exception as ex:
        print(f"An error occurred: {ex}")

def show_requests_vol():

    try:
        first_name = input("First name: ")
        last_name = input("Last name: ")
        date_of_availability = input("Date of availability (YYYY-MM-DD): ")
        telephone = input("Telephone: ")
        item = MenuOrgavol(first_name, last_name, date_of_availability, telephone).get_by_name_vol()
        if not item:
            print(f"No volunteer found for {first_name}, {last_name}, {date_of_availability}, {telephone}")
            return
        query = f'''
            SELECT *
            FROM volunteer
            where first_name=%s AND
            last_name = %s AND
            date_of_availability = %s AND
            telephone = %s
            '''
        item.cursor.execute(query, (first_name, last_name, date_of_availability, telephone,))
        result = item.cursor.fetchone() 
        if result:
            columns = [desc[0] for desc in item.cursor.description]
            result_dict = dict(zip(columns, result))
            print("Volunteer details:")
            for key, value in result_dict.items():
                print(f"{key}: {value}")
        else:
            print("No results found.")
    except psycopg2.Error as e:
        print(f"Error fetching request: {e}")
    except Exception as ex:
        print(f"An error occurred: {ex}")

def show_requests():
    try:
        DBNAME = "Volunteering"
        USER = "postgres"
        PASSWORD ="password"
        HOST = "localhost"
        PORT = "5432"
        connection = psycopg2.connect(dbname=DBNAME, user=USER, password=PASSWORD, host=HOST, port=PORT)
        cursor=connection.cursor()
        query = f'''
            SELECT *
            FROM match
            '''
        cursor.execute(query)
        rows=cursor.fetchall()
        col_names = [desc[0] for desc in cursor.description]
        col_widths = []
        for i in range(len(col_names)):
            max_col_width = max(len(col_names[i]), max(len(str(row[i])) for row in rows))
            col_widths.append(max_col_width)
        

        col_titles = " | ".join([f"{col_names[i]:<{col_widths[i]}}" for i in range(len(col_names))])
        print(col_titles)
        print("-" * len(col_titles))
        

        for row in rows:
            formatted_row = " | ".join([f"{str(row[i]):<{col_widths[i]}}" for i in range(len(row))])
            print(formatted_row)
    except psycopg2.Error as e:
        print(f"Error fetching request: {e}")

    while True:
        choice_volunteer = input('Do you want to register? (Yes or No) ')
        if choice_volunteer in ['Yes', 'No']:
            break
        else:
            print("Invalid. Please enter Yes or No: ")
    if choice_volunteer == 'Yes':
        id_select=input("To which ID number do you want to register? ")
        add_vol_to_list()
        match=Match(id_select)
        match.match_making()
    else:
        user_volunteer()

class Match:

    def __init__(self, id_select:int):
        self.id_select = id_select

    def match_making(self):
        try:
            DBNAME = "Volunteering"
            USER = "postgres"
            PASSWORD ="password"
            HOST = "localhost"
            PORT = "5432"
            connection = psycopg2.connect(dbname=DBNAME, user=USER, password=PASSWORD, host=HOST, port=PORT)
            cursor=connection.cursor()
            query=f'''
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
                --AND m.remaining_places >= v.num_people_in_group
                AND (v.task = 'All' OR m.category = 'For all')
                AND m.id = %s
                '''
            cursor.execute(query, (self.id_select,))
            result=cursor.fetchall()

            if result:
                for row in result:
                    match_id = int(row[6])
                    num_people_in_group = int(row[5]) if row[5] is not None else 0
                    num_people_needed = int(row[15]) if row[15] is not None else 0
                    people_registered = int(row[14]) if row[14] is not None else 0
                    update_query = '''
                    UPDATE match
                    SET people_registered =  %s,
                        remaining_places =  %s
                    WHERE id = %s;
                    '''
                    new_people_registered = people_registered + num_people_in_group
                    new_remaining_places = num_people_needed - num_people_in_group
                    cursor.execute(update_query, (new_people_registered, new_remaining_places, match_id))
            
                    connection.commit()
    
                print(f"You are registered successfully to {row[7]} on {row[8]} for {num_people_in_group} people.")

            else:
                print(f"No matching records found.")
                # if row[2] != 'All' and row[2] != row[11] :
                #     print(f"No matching records found cause there is only physical volunteering.")
                # elif row[0] != row[8] :
                #     print(f"No matching records found cause there is no volunteering at this date.")
                # elif (row[4] != 'Yes' and row[3] != 'Yes' and row[4] != row[13]) :
                #     print(f"No matching records found cause your are not insured.")
                # elif (row[5] != 'No' and row[12] != 'Yes') : 
                #     print(f"No matching records found cause there is no transportation plan.")
                # elif row[14] >= row[5] :
                #     print(f"No matching records found cause there is no enough remaining place.")
        except psycopg2.Error as e:
            print(f"Error updating match status: {e}")
            



if __name__ == "__main__":
    show_user_menu()


# ajouter description comme critère
# Choix V des menus à checker