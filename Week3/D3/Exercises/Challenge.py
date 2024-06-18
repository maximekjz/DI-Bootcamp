# The goal is to create a class that represents a simple circle.
# A Circle can be defined by either specifying the radius or the diameter.
# The user can query the circle for either its radius or diameter.

# Other abilities of a Circle instance:

# Compute the circle’s area
# Print the attributes of the circle - use a dunder method
# Be able to add two circles together, and return a new circle with the new radius - use a dunder method
# Be able to compare two circles to see which is bigger, and return a Boolean - use a dunder method
# Be able to compare two circles and see if there are equal, and return a Boolean- use a dunder method
# Be able to put them in a list and sort them
# Bonus (not mandatory) : Install the Turtle module, and draw the sorted circles

import math

class Circle:
    def __init__(self, radius: int | float = 0, diameter: int | float =0):
        if radius == 0 and diameter != 0:
            self.diameter = diameter
            self.radius = self.diameter/2
        elif radius != 0 and diameter== 0:
            self.radius = radius
            self.diameter = self.radius*2
        elif radius != 0 and diameter !=0 and radius*2 == diameter:
            self.radius = radius
            self.diameter = diameter
        else : 
            raise ValueError('The radius needs to be diameter/2')            



    def area(self):
        return round(math.pi*self.radius**2,2) 

    def __call__(self):
        area=self.area()
        print(f'The radius of the cercle is {self.radius}, its diameter is {self.diameter} and is area is {area}') # area is not working
    
    def __add__(self, other: int | float =0):
        if isinstance(other, Circle):
            if other.radius == other.diameter/2 :
                new_radius = self.radius + other.radius
                new_diameter = self.diameter + other.diameter
                new_circle=Circle(new_radius)
                new_area= new_circle.area()
                return(f'The new circle has a radius of {new_radius}, a diameter of {new_diameter} and its area is {new_area}')
            else: 
                raise ValueError('The radius needs to be diameter/2')
        else :
            raise TypeError('You have to add another Circle object')
        
    
    def __lt__(self, other)->bool: 
        if isinstance(other, Circle):
            return self.radius<other.radius
        else:
            raise TypeError('You have to add another Circle object')
    
    def __gt__(self, other)->bool: 
        if isinstance(other, Circle):
            return self.radius>other.radius
        else:
            raise TypeError('You have to add another Circle object')
        
    def __eq__(self, other)->bool: 
        if isinstance(other, Circle):
            return self.radius==other.radius
        else:
            raise TypeError('You have to add another Circle object')

    def list_circles(*circles): 
        if all(isinstance(c, Circle) for c in circles):
            sorted_list=sorted(circles, key=lambda c:c.radius)
            print("The list below is sorted increasingly by radius")
            for circle in sorted_list:
                print(f'Circle(radius= {circle.radius}, diameter = {circle.diameter}, area = {circle.area()})')
        else:
            raise TypeError('You have to add another Circle object')

        

circle1 = Circle(2,4)
circle1.area()
circle1()
circle2 = Circle(1,2)
circle4=Circle(6,12)

circle3 = circle1 + circle2
print(circle3)
print(circle1<circle2)
print(circle1>circle2)
print(circle1==circle2)
Circle.list_circles(circle1, circle2, circle4)