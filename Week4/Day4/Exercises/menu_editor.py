# show_user_menu() - this function should display the program menu (not the restaurant menu!), and ask the user to :
# View an Item (V)
# Add an Item (A)
# Delete an Item (D)
# Update an Item (U)
# Show the Menu (S)

import psycopg2
from menu_item import MenuItem, MenuManager

def show_user_menu():
    while True: 
        try:
            user_choice=input(''' Please select an option
            View an Item (V)
            Add an Item (A)
            Delete an Item (D)
            Update an Item (U)
            Show the Menu (S)
            Exit (E)
                    ''').upper()
            
            if user_choice == 'V':
                item_name = input('Which item do you want to see?')
                manager = MenuManager(item_name)
                print(manager.get_by_name())
            elif user_choice == 'A':
                add_item_to_menu()
            elif user_choice == 'D':
                remove_item_from_menu()
            elif user_choice == 'U':
                update_item_from_menu()
            elif user_choice == 'S':
                show_restaurant_menu()  
                break
            else:
                print('Error, choose again')
        except Exception as e:
            print(f"Error: {e}")

def add_item_to_menu():
    try:
        item_name = input("Item's name: ")
        item_price = input("Item's price: ")
        new_item=MenuItem(item_name, item_price)
        new_item.save()
        print("Item added successfully.")
    except Exception as e:
        print(f"Error adding item: {e}")

def remove_item_from_menu():
    try:
        item_delete = input("ID and name of the item you want to remove from the restaurant's menu (separated by space): ")
        item_id, item_name = item_delete.split(maxsplit=1)  
        item_remove = MenuItem(item_name, None, item_id)
        item_remove.delete()
        print("Item deleted successfully.")
    except Exception as e:
        print(f"Error deleting item: {e}")


def update_item_from_menu():
    try:
        item_up_name = input("Item's name you want to replace: ")
        item_up_name_new = input("New item's name you want: ")
        item_up_price = int(input("Item's price you want to replace: "))
        item_up_price_new = int(input("New item's price you want: "))
        update_item=MenuItem(item_up_name, item_up_price)
        update_item.update(item_up_name_new, item_up_price_new)
    except Exception as e:
        print(f"Error updating item: {e}")


def show_restaurant_menu():

    DBNAME = 'menu_item'
    USER = 'postgres'
    PASSWORD = 'password'
    HOST = "localhost"
    PORT = "5432"

    connection = psycopg2.connect(
    dbname=DBNAME, user=USER, password=PASSWORD, host=HOST, port=PORT)


    cursor = connection.cursor()

   
    query = f'''
        select * from menu_items
        '''
    cursor.execute(query)
    rows = (
        cursor.fetchall()
    )

    print(rows)

if __name__ == "__main__":
    show_user_menu()