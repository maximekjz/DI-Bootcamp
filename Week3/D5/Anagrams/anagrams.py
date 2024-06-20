from Anagram_checker import AnagramChecker
import os
import re

def anagram_checker():
    folder_path = r'/Users/Sarah/Desktop/DI-Bootcamp Maxime/Week3/D5'
    file_path = os.path.join(folder_path, "sowpods.txt")
    anagram_check = AnagramChecker(folder_path)
    while True:
        continue_or_not=input('Input a word or exit by typing "exit": ')
        if continue_or_not=='exit':
            print('Bye')
            break
        else:
            word=continue_or_not
            if  isinstance(word, str) and len(word.split()) == 1:
                if  not re.search(r'\d', word):
                    anagram_check.lecture()
                    word_upper=word.upper()
                    print(f'Your word: "{word_upper}"')
                    anagram_check.is_valid_word(word)
                    print('Anagrams for your word: ')
                    anagram_check.get_anagrams(word)
                else:
                    print('You have to chose a single word without number')
            else:
                    print('You have to chose a single word without number')
anagram_checker()