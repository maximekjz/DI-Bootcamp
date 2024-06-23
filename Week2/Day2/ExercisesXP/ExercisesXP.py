# list[], set()  , turple
# numbers = [i for i in range (100)]
#numbers2 = [1, 2, 3, 4, 5]
#numbers3 = [number * 2 for number in numbers2]

# Exercice 1

import random

#1
my_fav_numbers= { 3, 4, 13, 17}
#2 
random_num_1=int(random.uniform(0,100))
random_num_2=int(random.uniform(0,100))

my_fav_numbers.update([random_num_1,random_num_2])
print(my_fav_numbers)

#3
del_elmt=random.choice(list(my_fav_numbers))
my_fav_numbers.remove(del_elmt)
print(my_fav_numbers)

#4
friend_number_1, friend_number_2,friend_number_3=input("Add your 3 fav numbers: ").split()
friend_number_1=int(friend_number_1)
friend_number_2=int(friend_number_2)
friend_number_3=int(friend_number_3)
friend_numbers={friend_number_1, friend_number_2, friend_number_3}
#5 
our_fav_numbers=my_fav_numbers.union(friend_numbers)
print(our_fav_numbers)


# Exercise 2
# We can't add an element as it can't be changed

# Exercise 3 

basket = ["Banana", "Apples", "Oranges", "Blueberries"]

basket.remove("Banana")
basket.remove("Blueberries")
basket.append('Kiwi')
basket.insert(0,'Apples')

print(basket)
count_apples=0
for  fruit in basket:
    if fruit=='Apples':
        count_apples+=1
print(count_apples)
basket.clear()
print(basket)

# Exercice 4

#1 A float is a decimal number, the difference with an integer is that the integer doesn't have decimals.

#2 
my_list=[]
add_el=1.5
while add_el != 5:
    my_list.append(add_el)
    add_el+=0.5
print(my_list)

#3 
my_list=[]
max=5
add_el=1.5
while True: 
    if add_el > max :
        print(my_list)
        break
    else: 
         my_list.append(add_el)
         add_el+=.5

# Exercice 5

#1 
for i in range(1,21):
    print(i)

#2 
for i in range(1,21):
    if i%2==0:
        print(i)

# Exercice 6

while True:
     your_name=input("Enter your name: ")
     if your_name == my_name:
        print("stop")
        break
     
# Exercice 7

fav_fruit=input("What's your favourite fruits ? Separate the fruits with a single space ")
list_fruits=fav_fruit.split()
chosen_fruit=input("Input a name of any fruit ")

fruit_found=False

for fruit in list_fruits:
    if chosen_fruit == fruit:
        print("You chose one of your favorite fruits! Enjoy!")
        fruit_found= True 
        break
if not fruit_found:
    print("You chose a new fruit. I hope you enjoy")

# Exercie 8

topping_list=[]
price=10
while True:
    toppings=input('Add your toppings, once ended write "quit"')
    if toppings=="quit":
        break
    else:
        topping_list.append(toppings)
        print(f"I'll add {toppings} on your pizza")
        price+=2.5
print(f"You add {topping_list}, the total price is {price}")

# Exercice 9

ages=input("What is the age of each person who wants a ticket ? (separate it by a space) ")
ages_value=ages.split()
price=0

for age in ages_value:
    age=int(age)
    if age < 3 :
        price+=0
    elif 3 < age < 13:
        price+=10
    elif 13<age<22:
        ask_age=input("What is your age ? ")
        ask_age=int(ask_age)
        if 15<ask_age<22:
            print("you can't see this movie")
        else: 
            price+=15
    else:
        price+=15
print(f"total cost is {price}")

# Exercice 10

sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]

index=0

while index<len(sandwich_orders):
        if sandwich_orders[index]=="Pastrami sandwich":
            del sandwich_orders[index]
        else: 
              index+=1
              
finished_sandwiches=[]

for sandwich in sandwich_orders[:]:
    finished_sandwiches.append(sandwich)
    sandwich_orders.remove(sandwich)

print(f"l{finished_sandwiches}")
print(f"p{sandwich_orders}")

