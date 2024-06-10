# Exercice 1

list_1=[1,2,3,4]
list_2=[5,6,7]

list_conc=[list_1, list_2]
print(list_conc)


# Exercice 2

list=[]

for number in range(1499,2501):
    if number%5==0:
        list.append(number)
    if number%7==0:
        list.append(number)

print(list)

# Exercice 3

names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']

name_user=input("Write your name ")

for name in names:
    if name_user == name:
        print(name)
    
# Exercice 4

a, b, c =input("Write 3 numbers separate by a space ").split()
a=int(a)
b=int(b)
c=int(c)

if a>b:
    if a>c:
        print(a)
    elif c>b:
        print(c)
elif b>c:
    print(b)

else :
    print(c)

# Exercice 5 

vowel=['a', 'e', 'i', 'o', 'u', 'y']

alphabet="abcdefghijklmnopqrstuvwxyz"

for letter in alphabet:
    if letter in vowel:
        print(f"{letter} is a vowel")
    else:
        print(f"{letter}")

# Exercice 6 

