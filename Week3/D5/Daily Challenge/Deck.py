import random

class Card:

    def __init__(self, suit, value) -> None:
        self.suit = suit
        self.value = value
    
    def __str__(self) -> str:
        return f'{self.value} of {self.suit}'
        

class Deck:

    def __init__(self):
        suit_list = ['Hearts', 'Diamonds', 'Clubs', 'Spades']
        value_list = ['A','2','3','4','5','6','7','8','9','10','J','Q','K']
        self.cards=[]

        for suit in suit_list: 
            for value in value_list:
                self.cards.append(Card(value, suit))

    def shuffle(self):
        if len(self.cards)==52:
            random.shuffle(self.cards)
        else:
            print('Error in the number of cards') # I don't understand why it doesn't appear if it's the case
    
    def __str__(self):
        return '\n'.join(str(card) for card in self.cards)
    
    def deal(self):
        rd_card=random.choice(self.cards)
        print(f'{rd_card} is the picked and removed card from the deck')
        self.cards.remove(rd_card)
        print(f'Now the deck contains {len(self.cards)} cards')

deck=Deck()
print(deck)
deck.shuffle()
print(deck)
deck.deal()
