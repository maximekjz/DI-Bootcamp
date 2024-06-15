# Exercice 1

keys=['Ten', 'Twenty', 'Thirty']
values=[10, 20, 30]

# keys=list(keys)
# values=list(values)

new=zip(keys, values)

print((new))

# Exercice 2

family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
price = 0
for member in family:
    age = family[member]
    if age < 3:
        price += 0
    elif 3 <= age < 13:
        price += 10
    else:
        price += 15
print(price)


# Exercice 2 - Bonus
family={}

while True:
    name= input("What is your name (enter 'done' when ended) ?: ")
    if name =='done':
        break
    age = int(input("What's {name}'s age ?: "))
    family[name]=age
print(family)


# Exercice 3 
brand = {
'name': 'Zara' ,
'creation_date''': 1975 ,
'creator_name': 'Amancio Ortega Gaona ',
'type_of_clothes': ['men', 'women', 'children', 'home'] ,
'international_competitors': ['Gap', 'H&M', 'Benetton'] ,
'number_stores': 7000 ,
'major_color': {
    'France': 'blue' ,
    'Spain': 'red',
    'US': ['pink', 'green']}
    
}

#3
brand["number_stores"]=2

#4 
clients = ", ".join([client for client in brand["type_of_clothes"] if client != "home"])
print(f"Zara's clients are {clients}.")

#5
brand["country_creation"]="Spain"

#6
for key, value in brand.items():
    if key=='international_competitors':
            if 'Desigual'not in value :
                value.append("Desigual")
        
#7
#del brand["international_competitors"]

#8
for key, value in brand.items():
    if key=='international_competitors':
        print(f"The last int. comp is {value[-1]}")
print(brand)

#9 
for key, value in brand.items():
    if key=='major_color':
        us_color=value["US"]
        print("The major clothes colors in the US are: ")
        for color in us_color:
                print(f"{color}")
                
#10
amount=0

for key in brand.items():
    for value in key:
        amount+=1
print(f"amount = {amount}")

#11
keys=[]
for key, value in brand.items():
    keys.append(key)
print(keys)

#or

print ("The keys of the dictionnary are: ")
for key in brand.keys():
    print(key)
#12
more_on_zara={
    'creation_date': 1975,
    'number_stores': 10000,
}

#13
brand.update(more_on_zara)

#14
print(brand["number_stores"])

print(brand)
