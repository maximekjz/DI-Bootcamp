#Challenge 1
storage = {}
word=input("Enter a word: ")

for index, value in enumerate(word):
    if value not in storage:
        storage[value]=[index]
    else:
        storage[value].append(index)
print(storage)

#Challenge2

items_purchase = {
    "Water": "$1",
    "Bread": "$3",
    "TV": "$1,000",
    "Fertilizer": "$20",
    "Apple": "$4",
    "Honey": "$3",
    "Fan": "$14",
    "Bananas": "$4",
    "Pan": "$100",
    "Spoon": "$2"
}

order = []
spent = 0

def convert_price(price):
    return int(price.replace("$", "").replace(",", ""))

sorted_items = sorted(items_purchase.items(), key=lambda x: convert_price(x[1]))

wallet = int(input("Amount in your wallet: "))

if wallet < convert_price(sorted_items[0][1]):
    print("Nothing")
else:
    for item, price in sorted_items:
        price_list = convert_price(price)
        if wallet >= spent + price_list:
            order.append(item)
            spent += price_list
        else:
            break
    
    order.sort()
    print("Items purchased within your budget:")
    for index, item in enumerate(order):
 
        print(f"{index + 1}. {item}")
