import requests
import json
import random
import psycopg2

url = "https://restcountries.com/v3.1/all"

response = requests.get(url)
countries = response.json()


random_countries=random.sample(countries,10)
countries_picked=[]


DBNAME = "Day4- DC"
USER = "postgres"  # postgres
PASSWORD = "password"  # <YOUR POSTGRES PASSWORD>
HOST = "localhost"
PORT = "5432"

connection = psycopg2.connect(
    dbname=DBNAME, user=USER, password=PASSWORD, host=HOST, port=PORT
)

cursor = connection.cursor()

try:
    table_query = "create table countries_table (id serial primary key, name varchar(50), capital varchar(50), flag, subregion varchar(50), population integer);"
except psycopg2.Error as e:
    print(f"Error saving menu item: {e}")
cursor.execute(table_query)
connection.commit()

try:
    for country in random_countries:
    name = country.get('name', '').get('common','')
    capital = country.get('capital', '')
    flag = country.get('flags', []).get('png','')
    subregion = country.get('subregion', '')
    population = country.get('population', '')


    countries_picked.append({
        'name': name,
        'capital': capital,
        'flag': flag,
        'subregion': subregion,
        'population': population
    })
        
    # print(countries_picked)
    query = f'''
        insert into countries_table ( name, capital, flag,  subregion, population)
        VALUES
        (%s, %s,%s, %s,%s)
        '''
    cursor.execute(query, (name, capital, flag, subregion, population))
    connection.commit()
    print('item inserted successfully.')
except psycopg2.Error as e:
    print(f"Error inserting countries: {e}")



