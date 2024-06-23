import random

user_input=input("Write a string ")
count_user = len(user_input)
if count_user<10:
    print("string no long enough")
elif count_user>10: 
    print("string too long")
else:
    print("perfect string")
    a=str(user_input)
    first=a[0]
    last=a[-1]
    print(f"the first character is {first} and the last one is {last}\n")
    c=""
    a_list=list(a)
    random.shuffle(a_list)
    for j in range(10):
        b=a_list[j]
        print(f"{c}{b}\n")
        c=c+b

