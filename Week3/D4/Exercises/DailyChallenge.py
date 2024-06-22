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
        print(f'The most common word is "{my_max_key}", it occures {my_max_val} times')


    def find_word(self, find_the_word:str):
        for word,value in self.word_frequency.items():
            if word == find_the_word:
                my_val=value
                if my_val==1:
                    print(f'{find_the_word} occures {my_val} time')
                else :
                    print(f'{find_the_word} occures {my_val} times')
        if word not in find_the_word:
            print(f"{find_the_word} doesn't occure")
    
    def single_word(self):
        single_list=[]
        for word, value in self.word_frequency.items():
            if value==1:
                single_list.append(word)
        print(single_list)

    @classmethod
    def return_text(cls, file_location:str):
        with open(file_location) as file:
            content = file.read()
        return cls(content)


text=Text('A good book would sometimes cost as much as a good house.')
text.attribute()
print(text.frequency())
text.common()
text.find_word('lmlmùl')
text.single_word()

file_text_instance = Text.return_text("Exercises/the_stranger.txt")
file_text_instance.common()
file_text_instance.single_word()