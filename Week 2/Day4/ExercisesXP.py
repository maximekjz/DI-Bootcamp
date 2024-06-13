# -*- coding: utf-8 -*-
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

# Exercice 7
import random

def select_season():
    month = int(input("Select the month (by a number): "))
    season = ""
    if 6 <= month <= 9:
        season = "summer"
    elif 10 <= month <= 12:
        season = "fall"
    elif 1 <= month <= 2 or month == 12:
        season = "winter"
    elif 3 <= month <= 5:
        season = "spring"
    return season

def get_random_temp(season):
    if season == "winter":
        random_temp = round(random.uniform(-10.0, 0.0), 1)
    elif season == "spring":
        random_temp = round(random.uniform(0.0, 20.0), 1)
    elif season == "summer":
        random_temp = round(random.uniform(15.0, 40.0), 1)
    elif season == "fall":
        random_temp = round(random.uniform(2.0, 18.0), 1)
    return random_temp

def main():
    season = select_season()
    main_temp = get_random_temp(season)
    print("The temperature is right now " + str(main_temp) + " degree Celsius")
    if main_temp < 0:
        print("Brrr, that’s freezing! Wear some extra layers today")
    elif 0 <= main_temp < 16:
        print("Quite chilly! Don’t forget your coat")
    elif 16 <= main_temp <= 23:
        print("Perfect temperature today")
    elif 23 < main_temp < 32:
        print("It's hot today")
    else:
        print("You should stay at home")

main()


# Exercice 8

data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]


def star_wars_quizz():
    wrong_answers = []
    correct_count = 0
    incorrect_count = 0

    for question_data in data:
        question = question_data["question"]
        correct_answer = question_data["answer"]
        answer = str(input(question + "\nYour answer: "))

        if answer.lower() == correct_answer.lower():
            print("Good answer")
            correct_count += 1
        else:
            print("Wrong answer")
            incorrect_count += 1
            wrong_answers.append({
                "question": question,
                "your_answer": answer,
                "correct_answer": correct_answer
            })

    print("\nResults:")
    print("Correct answers: {}".format(correct_count))
    print("Incorrect answers: {}".format(incorrect_count))

    if wrong_answers:
        print("\nCorrection:")
        for wrong_answer in wrong_answers:
            print("Question: {}".format(wrong_answer["question"]))
            print("Your answer: {}".format(wrong_answer["your_answer"]))
            print("Correct answer: {}".format(wrong_answer["correct_answer"]))

    if incorrect_count > 3:
        print("Play again")

star_wars_quizz()
