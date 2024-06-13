matrix=[
    ['7','i','i'],
    ['T', 's', 'x'],
    ['h', '%', '?'],
    ['i','','#'],
    ['s','M',''],
    ['$','a',''],
    ['#','t','%'],
    ['^','r','!']
]

sentence=[]
space=False
for column in range(len(matrix[0])):
    for row in matrix:
        if row[column].isalpha():
            sentence.append(row[column])
            space=False
        elif not space:
            sentence.append(' ')
            space=True
if sentence[0]==' ':
    sentence.pop(0)
if sentence[-1]==' ':
    sentence.pop()

sentence=''.join(sentence)
print(sentence)
print(len(matrix[0]))