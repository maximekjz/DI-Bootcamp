# Challenge 1

new_words_input=input("Add your words separated by a coma: ")

words=[word.strip() for word in new_words_input.split(',')]
words_sorted=sorted(words)
result=','.join(words_sorted)

print(result)

#Challenge 2

len_max=""
sentence=input("Write your sentence: ")
words=[word.strip() for word in sentence.split()]
for word in words:
    if len(word)>len(len_max):
        len_max=word
print(len_max)