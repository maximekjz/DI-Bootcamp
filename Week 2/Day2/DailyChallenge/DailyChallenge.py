# Challenge 1

# number=input("Chose a number: ")
# length=input("Chose a length: ")

number,length=input("chose a number and a length separate by a space ").split()


number=int(number)
length=int(length)
multiple=[]

for i in range(1,length+1) :
    product=i*number
    multiple.append(product)
print(multiple)


# Challenge 2 

word=input("Write a string with duplicate consecutive letters: ")
new_word=[]
wordlen=len(word)
for i in range(wordlen-1) :
        if word[i]!=word[i+1]:
            new_word.append(word[i])
new_word.append(word[-1])    
new_word_concatenate="".join(new_word)
print(new_word_concatenate)