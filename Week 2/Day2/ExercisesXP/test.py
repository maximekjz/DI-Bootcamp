sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]

index=0

while index<len(sandwich_orders):
        if sandwich_orders[index]=="Pastrami sandwich":
            del sandwich_orders[index]
        else: 
              index+=1
              
finished_sandwiches=[]

for sandwich in sandwich_orders[:]:
    finished_sandwiches.append(sandwich)
    sandwich_orders.remove(sandwich)

print(f"l{finished_sandwiches}")
print(f"p{sandwich_orders}")