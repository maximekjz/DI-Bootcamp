vowel=['a', 'e', 'i', 'o', 'u', 'y']

alphabet="abcdefghijklmnopqrstuvwxyz"

for letter in alphabet:
    if letter in vowel:
        print(f"{letter} is a vowel")
    else:
        print(f"{letter}")