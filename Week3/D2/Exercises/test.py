class Family:
    def __init__(self, members:list, last_name:str):
        self.members = members
        self.last_name = last_name

    def born(self, children:list):
        children_names = 'and '.join(child['name'] for child in children)
        for child in children:
            self.members.append(child)
        if len(children) > 1:
            print(f'Congrats to the family {self.last_name} for the births of {children_names}!')
        elif len(children) == 1:
            print(f'Congrats to the family {self.last_name} for the birth of {children_names}!')
        print(f'Current family members: {self.members}')

    def is_18(self, member_name):
        selected_member = next((member for member in self.members if member['name'] == member_name), None)
        if selected_member and selected_member['age'] > 18:
            return True
        else:
            return False
    
    def family_presentation(self):
        print(f'Family name: {self.last_name}')
        for member in self.members:
            print(f"Name: {member['name']}, Age: {member['age']}, Gender: {member['gender']}, Child: {member['is_child']}")


