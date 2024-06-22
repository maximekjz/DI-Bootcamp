class Text : 
    def __init__(self, string:str):
        self.string = string
        self.word_frequency = self.frequency()

    def attribute(self:str)-> str:
        string_list=[self.string]
        print(''.join(string_list))
        return self.string
    
    def frequency(self):
        words = self.string.split()
        frequency = {}
        for word in words:
            if word in frequency:
                frequency[word]+=1
            else: 
                frequency[word]=1
        return frequency
    
    def common(self):
        # highest_frequency = max(self.word_frequency, key=self.word_frequency.get)
        my_max_val = 0
        for word,value in self.word_frequency.items():
            if value > my_max_val:
                my_max_val=value
                my_max_key=word
        print(f'The most common word is {my_max_key}, it occures {my_max_val} times')


    def find_word(self, find_the_word:str):
        for word,value in self.word_frequency.items():
            if word == find_the_word:
                my_val=value
                if my_val==1:
                    print(f'{find_the_word} occures {my_val} time')
                elif my_val==0:
                    print('None')
                else :
                    print(f'{find_the_word} occures {my_val} times')

text=Text('A good book would sometimes cost as much as a good house.')
text.attribute()
print(text.frequency())
text.common()
text.find_word('sometimes')

        