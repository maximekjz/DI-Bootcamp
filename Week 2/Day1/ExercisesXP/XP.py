# Exercise 1

for i in range(4):
    print("Hello world")    

# Exercise 2

print((99**3)*8)

# Exercise 3 

#5<3 #False
#3 == 3  #True
#"3">3  #False
#"Hello" == "hello"  #False

# Exercise4

computer_brand = input("What's your computer brand ? ")
print(f"I have a {computer_brand} computer")

# Exercies 5

name="Maxime"
age=27
shoe_size=44
info = f"Hi, my name is {name}, I'm {age} and my shoe size is {shoe_size}"
print(info)

# Exercise 6

number=input("Chose a number ")
number = int(number)
if number%2==0:
    print(f"{number} is odd")
else:
    print(f"{number} is even")


#Exercice 8

my_name="Maxime"
user_name=input("What's yourname? " )
user_name=str(user_name)

if my_name==user_name:
    print("Congrats ! Youhave the best name!")
else : 
    print(f"{user_name}, don't trial your parents for your name")

# Exercice 9

height=input("What's your height (cm)? ")
height=int(height)

if height>145:
    print("You are tall enough to ride")
else: 
    print("You need to grow some more to ride")