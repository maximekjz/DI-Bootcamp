import psycopg2

DBNAME = "dvdrental"
USER = "postgres"
PASSWORD ="password"
HOST = "localhost"
PORT = "5432"

connection = psycopg2.connect(dbname=DBNAME, user=USER, password=PASSWORD, host=HOST, port=PORT)

cursor=connection.cursor()

query="SELECT * from actor;"

cursor.execute(query)

rows=cursor.fetchall()

for row in rows:
    print(rows)
