
# Exercice 1

def display_message():
    print("I'm learning web development")
# display_message()

call_function=display_message()
print(call_function)

# Exercice 2

def favorite_book(title):
    print("One of my favorite books is "+title)
favorite_book('Alice in Borderland')


# Exercice 3

def describe_city(city, country='Israel'):
    print(city+' is in '+country)
describe_city('Reykjavik')

# Exercice 4

import random

def equal_numbers(your_number):
    random_number = random.randint(1, 100)
    if your_number == random_number:
        print("Success")
    else:
        print("Fail, the random number was {}".format(random_number))

equal_numbers(89)

# Exercice 5

def make_shirt(size="L", text="I love Python"):
    print("The size of the shirt is "+size+" and the text is "+'"'+text+'"')
make_shirt(size="S",text="I love fruits") 

# Exercice 6

magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

def show_magicians():
    for magician in magician_names:
        print(magician)
# show_magicians()

def make_great():
    global magician_names
    magician_names=["The Great "+ magician for magician in magician_names]
# make_great()

show_magicians()
make_great()
show_magicians()

