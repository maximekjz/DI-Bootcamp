# user_name=input("Please provide your username: ")

# message = f"Hello {user_name} nice to meet you"

# print(message)

user_number = input("Provide a number btw 1 and 1000 ")

# Type casting - turning on value type into another value type (str -> int)

user_number = int(user_number)
Fizz = user_number%3
Buzz =user_number%5

if user_number>1 and user_number<1000:
    if Fizz == 0:
        print("Fizz")
    if Buzz == 0:
        print("Buzz")
    if Fizz == 0 and Buzz == 0:
        print("FizzBuzz")