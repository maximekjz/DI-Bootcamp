family = {}
price = 0

family_number=int(input("How many are you ? "))

for i in range(family_number):
    name=input("Enter the name of a family member ")
    age=int(input("Enter the age of this family member "))
    family[name]={age}

for member in family:
    age = family[member]
    if age < 3:
        price += 0
    elif 3 <= age < 13:
        price += 10
    else:
        price += 15
print(price)