# Exercice 1

class Cat:
    def __init__(self, cat_name: str, cat_age: int):
        self.name = cat_name
        self.age = cat_age


# Approach 1
# def get_oldest_cat(cat_list: list[Cat])->Cat:

#     oldest_cat = cat_list[0]

#     for cat in cat_list:
#         if cat.age > oldest_cat.age:
#             oldest_cat = cat
#     return oldest_cat

# Approach 2

def get_cat_age(cat: Cat)->int:
    return cat.age

def main():
    cat1=Cat("M", 10)
    cat2=Cat("L",2)
    cat3=Cat("P",4)

    cats=[cat1, cat2, cat3]
    # Approach 1
    #oldest_cat = get_oldest_cat(cats)

    # Approach2
    oldest_cat = max(cats, key=get_cat_age)  # regular function approach
    # oldest_cat = max(cats, key=lambda cat: cat.age)  # Lambda function approach
    print(f"The oldest cat is {oldest_cat.name}, and is {oldest_cat.age}")

if __name__=="__main__":
    main()


# Exercice 2

#Create a class called Dog.
class Dog:

#In this class, create an __init__ method that takes two parameters : name and height. This function instantiates two attributes, which values are the parameters.
    def __init__(self, name: str, height: int)->None:
        self.name = name
        self.height = height

#Create a method called bark that prints the following string “<dog_name> goes woof!”.
    def bark(self)->None:
        print(f"{self.name} goes whoof")

#Create a method called jump that prints the following string “<dog_name> jumps <x> cm high!”. x is the height*2.
    def jump(self)->None:
        x=self.height*2
        print(f"{self.name} jumps {x} cm high!")

    def dog_info(self):
        print(f"name : {self.name} and height : {self.height}")

    def get_biggest_dog(dogs:list[Dog]) -> Dog:
        biggest_dog=max(dogs, key=lambda dog: dog.height)
        return biggest_dog

def main():
        
    sarahs_dog=Dog("Teacup", 20)
    davids_dog=Dog("Rex",50)
    davids_dog.dog_info()
    sarahs_dog.dog_info()

    davids_dog.jump()
    davids_dog.bark()


    biggest_dog=get_biggest_dog([davids_dog, sarahs_dog])
    print(f"{biggest_dog.name} is the biggest dog in town!")

if __name__ == "__main__": 
    main()    


# Exercice 3 

#Define a class called Song, it will show the lyrics of a song.
class Song:

#Its __init__() method should have two arguments: self and lyrics (a list).
    def __init__(self, lyrics:list)-> None:
        self.lyrics=lyrics
    
#Inside your class create a method called sing_me_a_song that prints each element of lyrics on its own line.

    def sing_me_a_song(self)->None:

        for sentence in self.lyrics:
            print(sentence)

def main():
    stairway= Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])
    stairway.sing_me_a_song()

if __name__ == "__main__":
    main()



# Exercice 4
# Create a class called Zoo.
import random

class Zoo:

# In this class create a method __init__ that takes one parameter: zoo_name.
    def __init__(self, zoo_name:str)->None:
        self.name= zoo_name
        self.animals=[]

# Create a method called add_animal that takes one parameter new_animal. This method adds the new_animal to the animals list as long as it isn’t already in the list.
    def add_animal(self, new_animal:str)->None:
        if new_animal not in self.animals:
            self.animals.append(new_animal)
            print(f"{new_animal} has been added")

# Create a method called get_animals that prints all the animals of the zoo.
    def get_animals(self)->None:
        print("Animals in the zoo:")
        for animal in self.animals:
            print(animal)

# Create a method called sell_animal that takes one parameter animal_sold. This method removes the animal from the list and of course the animal needs to exist in the list.
    def sell_animal(self)->None:
        animal_sold=random.choice(self.animals)
        self.animals.remove(animal_sold)
        print(f"{animal_sold} has been removed")

# Create a method called sort_animals that sorts the animals alphabetically and groups them together based on their first letter.

    def sort_animals(self) -> None:
        sorted_animals = {}
        self.animals.sort()  
        index=1

        for animal in self.animals:
            initial_letter = animal[0].upper()
            if initial_letter in sorted_animals:
                sorted_animals[initial_letter].append(animal)
            else:
                sorted_animals[initial_letter] = [animal]
        for key, value in sorted_animals.items():
            if len(value) == 1:
                print(f"{index}: {value[0]}")
            else:
                print(f"{index}: {', '.join(value)}")  
                index+=1


# Create an object called ramat_gan_safari and call all the methods.

def ramat_gan_safari()->None:
    ramat_gan_zoo = Zoo("Ramat Gan Safari")
    ramat_gan_zoo.add_animal("Bear")
    ramat_gan_zoo.add_animal("Elephant")
    ramat_gan_zoo.add_animal("Cat")
    ramat_gan_zoo.add_animal("Cougar")
    ramat_gan_zoo.add_animal("Ape")
    ramat_gan_zoo.add_animal("Baboon")
    ramat_gan_zoo.add_animal("Emu")

    ramat_gan_zoo.get_animals()

    ramat_gan_zoo.sell_animal()
    

    ramat_gan_zoo.sort_animals()

if __name__ == "__main__":
    ramat_gan_safari()

