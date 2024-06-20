import random

class Game: 

    def __init__(self) -> None:
        self.user_item=None
        self.computer_item=None


    def get_user_item(self):
        while True:
            self.user_item = input("Choose paper (p), rock (r) or scissors (s):")
            if self.user_item in ['p','r','s']:
                print(f'You chose {self.user_item}')
                return self.user_item
            else: 
                print('You have to select paper (p), rock (r) or scissors (s)')


    def get_computer_item(self):
        rsp={'r':'rock', 's':'scissors', 'p':'paper'}
        self.computer_item=random.choice(list(rsp.keys())) 
        print(f'Computer chose {self.computer_item}')


    def get_game_result(self):
        L='You lose'
        D="You drew"
        W='You win'


        if self.user_item=='r':
            if self.computer_item=='p':
                result=L
                result_list="loss"
            elif self.computer_item=='r':
                result=D
                result_list="draw"
            elif self.computer_item=='s':
                result=W
                result_list="win"
        
        elif self.user_item=='p':
            if self.computer_item=='p':
                result=D
                result_list="draw"
            elif self.computer_item=='r':
                result=W
                result_list="win"
            elif self.computer_item=='s':
                result=L
                result_list="loss"

        else:
            if self.computer_item=='p':
                result=W
                result_list="win"
            elif self.computer_item=='r':
                result=L
                result_list="loss"
            elif self.computer_item=='s':
                result=D
                result_list="draw"
        
        print(f'{result}')
        return result_list
    
        
def play():
    results=[]
    play = Game() 
    play.get_user_item()
    play.get_computer_item()
    result_list=play.get_game_result()
    results.append(result_list)
    print(f'The results are: {results}')


if __name__ == "__main__":
    play()