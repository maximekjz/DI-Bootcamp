# list[], set()  , turple
# numbers = [i for i in range (100)]
#numbers2 = [1, 2, 3, 4, 5]
#numbers3 = [number * 2 for number in numbers2]

# letters_lower=['a','b','c','d']
# letters_upper=[letter.capitalize() for letter in letters_lower]

# print(letters_upper)

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

fav_fruit=input("What's your favourite fruit ? ")
