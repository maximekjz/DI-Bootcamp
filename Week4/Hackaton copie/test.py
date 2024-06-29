import psycopg2
def show():
    DBNAME = 'Volunteering'
    USER = 'postgres'
    PASSWORD = 'password'
    HOST = "localhost"
    PORT = "5432"

    connection = psycopg2.connect(
    dbname=DBNAME, user=USER, password=PASSWORD, host=HOST, port=PORT
    )

        # 2. Create a cursor (tool to run queries)
    cursor = connection.cursor()
    try:    
        query= f'select * from organization'

        cursor.execute(query)
        records = cursor.fetchall()
        if not records:
            print("No records found")
            return
            
        columns = [desc[0] for desc in cursor.description]
        print("\nTable:")
        print(", ".join(columns))

            
        for row in records:
            print(", ".join(str(col) for col in row))

    except psycopg2.Error as e:
        print(f"Error fetching: {e}")

show()