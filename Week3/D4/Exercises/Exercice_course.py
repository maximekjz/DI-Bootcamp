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

# Exercice 2

import json
sampleJson = """{ 
   "company":{ 
      "employee":{ 
         "name":"emma",
         "payable":{ 
            "salary":7000,
            "bonus":800
         }
      }
   }
}"""

# Change sampleJson into a dic python
content_str=json.loads(sampleJson)

salary=content_str['company']['employee']['payable']['salary']
print("Salary:", salary)


content_str['company']['employee']['birthday'] = "17.06.96"
print(content_str['company']['employee'])


new_json_file_location = "/Users/Sarah/Desktop/DI-Bootcamp\ Maxime/Week3/D4/Exercises/test.py"

with open(new_json_file_location, "w") as file:
    json.dump(content_str, file, indent=4) 
   
# I can't save the file 


