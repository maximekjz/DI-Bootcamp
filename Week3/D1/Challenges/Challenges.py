class Farm:

    def __init__(self, farm_name: str):
        self.name = farm_name
        self.animal={}
    def add_animal(self, new_animal :str, new_animal_number: int=1)->None:
        if new_animal in self.animal:
            self.animal[new_animal] += new_animal_number 
        else:
            self.animal[new_animal] = new_animal_number
    def get_info(self)->None:
        print(f"{self.name} Farm")
        for animal, count in self.animal.items():
            print(f"{animal.ljust((5))} : {str(count).rjust(0)}")
        print("\nE-I-E-I-O")

    def get_animal_types(self)->None:
        animal_list=[]
        for animal in self.animal:
            if animal not in animal_list:
                animal_list.append(animal)
        animal_list.sort()
        print(animal_list)

    def get_short_info(self)->None:
            animal_string = ", ".join([animal + 's' for animal in list(self.animal.keys())[:-1]])
            print(f"{self.name} farm has {animal_string} and {list(self.animal.keys())[-1]}s")





def main():
    macdonald=Farm("MacDonald")     
    macdonald.add_animal("cow",5)
    macdonald.add_animal('sheep')
    macdonald.add_animal('sheep')
    macdonald.add_animal('goat', 12) 
    macdonald.get_info()
    macdonald.get_animal_types()
    macdonald.get_short_info()
if __name__ == "__main__": 
    main()    




    
