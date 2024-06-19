# Exercice 1

class Currency:

    def __init__(self, currency:str, amount:int):
        self.currency = currency
        self.amount = amount

    def __str__(self):
        return f'{self.amount} {self.currency}s'
    
    def __int__(self):
        return self.amount
    
    def __repr__(self):
        return f'{self.amount} {self.currency}s'
    
    def __add__(self, other):
        if isinstance(other, Currency):
            if self.currency != other.currency:
                raise TypeError(f"Cannot add between Currency type {self.currency} and {other.currency}")
            else:
                return Currency(self.currency, self.amount + other.amount)
        elif isinstance(other, (int | float)):
            return Currency(self.currency, self.amount + other)
        else:
            raise TypeError("Unsupported type for addition")
    
    def __iadd__(self, other):
        if isinstance(other, Currency):
            if self.currency != other.currency:
                raise TypeError(f"Cannot add between Currency type {self.currency} and {other.currency}")
            else:
                self.amount += other.amount
        elif isinstance(other, (int | float)):
            self.amount += other
        else:
            raise TypeError("Unsupported type for addition")
        return self

    
    
c1 = Currency('dollar', 5)
c2 = Currency('dollar', 10)
c3 = Currency('shekel', 1)
# c4 = Currency('shekel', 10)

print(str(c1))  
print(int(c1))  
print(repr(c1)) 

print(c1 + 5)  
print(c1 + c3) 
print(c1)  

c1 += 5
print(c1)  

c1 += c2
print(c1)

# Exercice 2

# Exercice 3

import string
import random

def my_string(length=5):
    letters = string.ascii_letters
    my_string = ''.join(random.choice(letters) for _ in range(length))
    return my_string

random_string = my_string()
print(random_string)

# Exercice 4

import datetime

def current_date():
    now = datetime.datetime.now()
    current_date_format=now.strftime("%Y-%m-%d")
    print(f'Current date is {current_date_format}')
current_date()

# Exercise 5 : 

def time_until_jan_1():
    start = datetime.datetime.now()
    end=datetime.datetime( 2025, 1, 1, 0, 0, 0)

    diff = end - start 

    days = diff.days
    seconds_remaining = diff.seconds

    hours = seconds_remaining // 3600
    minutes = (seconds_remaining % 3600) // 60
    seconds = (seconds_remaining%3600)%60

    print(f'Time before Jan 1st is {diff.days} days, {hours} hours, {minutes} minutes and {seconds} seconds')
time_until_jan_1()


# Exercice 6

def time_lived(year, month, day, hour=0, minute=0, second=0):
    start = datetime.datetime(year, month, day, hour, minute, second) 
    end = datetime.datetime.now()

    diff = end - start 

    days = diff.days
    seconds_remaining = diff.seconds

    hours = seconds_remaining // 3600
    minutes = (seconds_remaining % 3600) // 60
    seconds = (seconds_remaining%3600)%60

    print(f'You are alive for {diff.days} days, {hours} hours, {minutes} minutes and {seconds} seconds')
time_lived(1996, 7, 17, 14, 32)


# Exercice 7 

from faker import Faker

class UsersList:
    def __init__(self):
        self.users = []

    def new_dic(self, name, address, language_code):
        user = {'name': name, 'address': address, 'language_code': language_code}
        return user

    def new(self, number_of_new):
        fake = Faker()
        for _ in range(number_of_new):
            name = fake.name()
            address = fake.address()
            language_code = fake.language_code()
            user = self.new_dic(name, address, language_code)
            self.users.append(user)

users_list = UsersList()
users_list.new(5)  
print(users_list.users)