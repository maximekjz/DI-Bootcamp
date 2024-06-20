import os

folder_path = r'/Users/Sarah/Desktop/DI-Bootcamp Maxime/Week3/D5'

class AnagramChecker:
    def __init__(self, folder_path) -> None:
        self.file_location = os.path.join(folder_path, "sowpods.txt")
        self.contents_list=[]
    
    def lecture(self):
        with open(self.file_location) as file:
            content = file.read()
            self.contents_list = content.split()
            return self.contents_list
    
    def is_valid_word(self, word):
        upper_word=word.upper()
        if upper_word in self.contents_list: 
            print('This is a valid word')
        else:
            print('This is not a valid word')
    
    def get_anagrams(self, word): 
        anagram_list=[]
        upper_word=word.upper()
        for words in self.contents_list : 
            if sorted(upper_word)==sorted(words):
                anagram_list.append(words)
                anagram_list_join=', '.join(anagram_list).lower()
        print(f'{anagram_list_join}')

def main():
    anagram_checker = AnagramChecker(folder_path)
    word_to_check="mate"
    anagram_checker.lecture()
    anagram_checker.is_valid_word(word_to_check)
    anagram_checker.get_anagrams(word_to_check)




if __name__ == "__main__":
    main()

