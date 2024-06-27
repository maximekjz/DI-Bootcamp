import psycopg2

DBNAME = "Hollywod"
USER = "postgres"
PASSWORD ="password"
HOST = "localhost"
PORT = "5432"

connection = psycopg2.connect(dbname=DBNAME, user=USER, password=PASSWORD, host=HOST, port=PORT)

cursor=connection.cursor()

query="SELECT * from actors;"

cursor.execute(query)

rows=cursor.fetchall

print(rows)