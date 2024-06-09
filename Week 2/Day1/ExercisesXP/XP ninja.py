# Exercice 3

#False
#True
#False
#False
#True
#False
#x is true ; y is false; 5; 10 


# Exercice 4
my_text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
print(my_text.count(""))


# Exercice 5
maxlen=0
while True:
    user_text=input('Write the longest sentence without the character "A" ')
    if "A" in user_text:
        print("It contains a 'A'")
    elif len(user_text)>maxlen:
            maxlen=len(user_text)
            print(f"Congrats! New longest sentence record with {maxlen} characters")