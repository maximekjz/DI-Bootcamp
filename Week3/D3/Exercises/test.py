

# def new_dic(self, users:list, x):
    
#     self.number_of_new=number_of_new
#     self.x=x
    
#     self.users=users
#     self.name=name
#     self.address=address
#     self.langage_code=langage_code
    
#     name=
#     address=fake.address()
#     langage_code = fake.language_code()

#     def new(self, users:list):
#         user={'name': fake.name(),'address': fake.address(),'langage_code': fake.language_code()}
#         for i in range(x):
#             for user in users:
#                 self.users.append(user)
#             i+=1
#     print(new_dic)
            
#     new()




from faker import Faker

class UsersList:
    def __init__(self):
        self.users = []

    def new_dic(self, name, address, language_code):
        user = {'name': name, 'address': address, 'language_code': language_code}
        return user

    def new(self, number_of_new):
        fake = Faker()
        for _ in range(number_of_new):
            name = fake.name()
            address = fake.address()
            language_code = fake.language_code()
            user = self.new_dic(name, address, language_code)
            self.users.append(user)

users_list = UsersList()
users_list.new(5)  
print(users_list.users)