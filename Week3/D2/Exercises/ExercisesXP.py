class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Siamese(Cat):
    def sing(self, sounds):
        return f'{sounds}'


bengal_cat=Bengal("Bengal",2)
chartreux_cat=Chartreux("Chartreux", 3)
siamese_cat=Siamese("Siamese", 2)

all_cats=[bengal_cat, chartreux_cat, siamese_cat]

sara_pets = Pets(all_cats)
sara_pets.walk()

#Create another cat breed named Siamese which inherits from the Cat class.
#Create a list called all_cats, which holds three cat instances : one Bengal, one Chartreux and one Siamese.
#Those three cats are Sara’s pets. Create a variable called sara_pets which value is an instance of the Pet class, and pass the variable all_cats to the new instance.
#Take all the cats for a walk, use the walk method.

# Exercice 2

class Dog:
    def __init__(self,name, age, weight) -> None:
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        print(f"{self.name} is barking")
    
    def run_speed(self):
        return self.weight/self.age*10
    
    def fight(self, other_dog):
        rxs = self.run_speed() * self.weight
        rxs_other = other_dog.run_speed() * other_dog.weight
        if rxs> rxs_other:
            print(f'The winner is {self.name}')
        elif rxs_other > rxs:
            print(f'The winner is {other_dog.name}')
        else: 
            print(f'This is a draw between {self.name} and {other_dog.name}')

dog1 = Dog('Oli',4,22)
dog2 = Dog('Medor',1,20)
dog3= Dog('Rex',3, 10)
        
print(dog1.fight(dog3))

# #Create a class called Dog with the following attributes name, age, weight.
# #Implement the following methods in the Dog class:
# #bark: returns a string which states: “<dog_name> is barking”.
# #run_speed: returns the dogs running speed (weight/age*10).
# #fight : takes a parameter which value is another Dog instance, called other_dog. This method returns a string stating which dog won the fight. The winner should be the dog with the higher run_speed x weight.

# #Create 3 dogs and run them through your class.

# Exercice 4

class Family:
    def __init__(self, members:list, last_name:str):
        self.members = members
        self.last_name = last_name

    def born(self, children:list):
        children_names = 'and '.join(child['name'] for child in children)
        for child in children:
            self.members.append(child)
        if len(children) > 1:
            print(f'Congrats to the family {self.last_name} for the births of {children_names}!')
        elif len(children) == 1:
            print(f'Congrats to the family {self.last_name} for the birth of {children_names}!')
        print(f'Current family members: {self.members}')

    def is_18(self, member_name):
        selected_member = next((member for member in self.members if member['name'] == member_name), None)
        if selected_member and selected_member['age'] > 18:
            return True
        else:
            return False
    
    def family_presentation(self):
        print(f'Family name: {self.last_name}')
        for member in self.members:
            print(f"Name: {member['name']}, Age: {member['age']}, Gender: {member['gender']}, Child: {member['is_child']}")
    
martin = Family( [
        {'name':'Michael','age':35,'gender':'Male','is_child':False},
        {'name':'Sarah','age':32,'gender':'Female','is_child':False}
    ], "martin")

martin.born([
        {'name':'Tom','age':5,'gender':'Male','is_child':False},
        {'name':'Dan','age':3,'gender':'Female','is_child':False}
    ])
print(martin.is_18('Michael'))
martin.family_presentation()

# Exercice 5 

class TheIncredibles(Family):
    def __init__(self, members:list, last_name:str, attributes):
        super().__init__(members, last_name)
        self.attributes = attributes
        

    def use_power(self, incredible_member):
        member = next((member for member in self.attributes if member['name'] == incredible_member))
        if member and member['age'] > 18:
            try:
                print(f'{member['power']}')
            except:
                print('Not over 18 yo')
    
    def incredible_presentation(self):
        print(f'Here is our powerful family {self.last_name}: ')
        self.family_presentation()
        

Incredible = TheIncredibles([
         {'name':'Michael','age':35,'gender':'Male','is_child':False,'power': 'fly','incredible_name':'MikeFly'},
         {'name':'Sarah','age':32,'gender':'Female','is_child':False,'power': 'read minds','incredible_name':'SuperWoman'}
], "Incredible",[{'name':'Michael','power':'fly'}, {'name':'Sarah','power':'read minds'}])


Incredible.incredible_presentation()
Incredible.born([
        {'name':'Baby Jack','age':0,'gender':'Male','is_child':True,'power': 'Unknown'}
    ])
Incredible.incredible_presentation()


 

