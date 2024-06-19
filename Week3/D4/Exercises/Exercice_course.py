# Exercice 1
    
import random 

class Sentence:
    def __init__(self, length: int):
        self.length = length
        self.file_location = "Exercises/Exercise_list.txt"


    # def get_words_from_file():
    #     with open(file_location) as file:
    #         content = file.readlines()  
    #         print(content)
    # get_words_from_file()

    def get_random_sentence(self):
        with open(self.file_location) as file:
            content = file.read() 
            contents_list = content.split()  
            random_sentence=[]
            for _ in range(self.length) :
                random_sentence.append(random.choice(contents_list))
            sentence = " ".join(random_sentence).lower()
            print(sentence)
    


def main():
        print("The program generates sentence with words from a list. You have to chose the length of the sentence.")
        while True:
            try:
                length=int(input("How long you want the sentence to be ? Acceptable values are: an integer between 2 and 20: "))
                if 2 <= length <= 20 :
                    user= Sentence(length)
                    user.get_random_sentence()
                    break
                else:
                    print("The integer must be between 2 and 20")
            except ValueError:
                print("You didn't chose an integer")
            
if __name__ == "__main__":
    main()

