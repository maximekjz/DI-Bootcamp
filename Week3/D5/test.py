class Word: 

    def __init__(self, word1, word2) -> None:
        self.word1=word1
        self.word2=word2
    
    def is_anagram(self)->bool:
        return sorted(self.word1)==sorted(self.word2)


kl=Word('op', 'po')
print(kl.is_anagram())


