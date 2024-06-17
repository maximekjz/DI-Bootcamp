# Exercice 3

from test import Dog
import random

class PetDog(Dog):
    
    def __init__(self, name, age, weight, trained:bool=False) :
        Dog.__init__(self, name, age, weight)
        self.trained = trained


    def train(self):
        self.bark()
        self.trained = True
    
    def play(self, *other_dogs_names):
        dog_names=", ".join(name for name in other_dogs_names)
        print(f'{dog_names} and {self.name} all play together')
        
    def do_a_trick(self):
        if self.trained :
            tricks=[f'{self.name} does a barrel roll', f'{self.name} stands on his back legs', f'{self.name} shakes your hand', f'{self.name} plays dead']
            selected = random.choice(tricks)
            print(f'{selected}')
        else:
            return f'{self.name} needs training to do tricks'

dog4=PetDog('Momo',3,19, False)
dog4.train()
dog4.play('Frank')
dog4.do_a_trick()
