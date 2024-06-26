import psycopg2


class MenuItem:

     def __init__(self, item_name, item_price, item_id=None) :
          self.item_id = item_id
          self.item_name = item_name
          self.item_price = item_price

          # Connection with the DB

          DBNAME = 'menu_item'
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

     def save(self) :
          try:
               query = f'''
               insert into menu_items ( item_name, item_price)
               VALUES
               (%s, %s)
               '''
               self.cursor.execute(query, (self.item_name, self.item_price)) # execute the query
               self.connection.commit()
               print('item saved successfully.')
          except psycopg2.Error as e:
               print(f"Error saving menu item: {e}")


     def delete(self) :
          try:
               query = f'''
               delete from menu_items where
               item_id=%s OR item_name=%s 
               '''
               self.cursor.execute(query, (self.item_id, self.item_name)) # execute the query
               self.connection.commit()
               print('item deleted successfully.')
          except psycopg2.Error as e:
               print(f"Error deleting menu item: {e}")

     def update(self, new_name=None, new_price=None) :
          try:
               query = f'''
               update menu_items 
               set item_name=%s, item_price=%s 
               where item_id=%s OR item_name=%s OR item_price=%s
               '''
               self.cursor.execute(query, (new_name, new_price, self.item_id, self.item_name, self.item_price)) # execute the query
               self.connection.commit()
               print('item updated successfully.')
          except psycopg2.Error as e:
               print(f"Error updating menu item: {e}")
          

#if __name__ == "__main__":
     # Create a new menu item object
     #new_item = MenuItem('Cola', 6)  # Example item
    
     # Save the menu item to the database
     #new_item.save()
     # Update 
     #new_item.update("Closet", 649)
     # Delete
     #new_item.delete()

    
class MenuManager:

     def __init__(self, name) :
          self.name = name

          DBNAME = 'menu_item'
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
               select item_name from menu_items where item_name=%s
               '''
               self.cursor.execute(query, (self.name,))
               self.connection.commit()
               result = self.cursor.fetchone() 
               if result:
                    return f'Found item with name: {result[0]}'
          except:
               return 'None'

if __name__ == "__main__":

     menu_it=MenuManager('Cola')
     print(menu_it.get_by_name())