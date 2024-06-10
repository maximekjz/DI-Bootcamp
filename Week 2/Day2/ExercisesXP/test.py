fav_fruit=input("What's your favourite fruits ? Separate the fruits with a single space ")
list_fruits=[fav_fruit]
chosen_fruit=input("Input a name of any fruit ")
for fruit in list_fruits:
    if fruit == fav_fruit :
        print("You chose one of your favorite fruits! Enjoy!")
    else: 
        print("You chose a new fruit. I hope you enjoy")