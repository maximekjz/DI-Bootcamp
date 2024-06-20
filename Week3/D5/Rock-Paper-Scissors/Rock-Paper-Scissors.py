from Game import Game

def get_user_menu_choice():
    print('''Menu:
          (g) Play a new game
          (x) Show scores and exit
          (q) Quit
          ''')
    while True :
        answer=input(': ')
        if answer in ['g', 'x', 'q']:
            return answer
        else:
            print('select (g),(x) or (q) please')


def print_result(result_list):
    occurrence={}
    for item in result_list:
        if item in occurrence:
            occurrence[item]+=1
        else:
            occurrence[item]=1
    print(f'{item} : {occurrence}')


def main():
    results = []
    while True:
        answer = get_user_menu_choice()
        if answer == 'g':
            game = Game()
            game.get_user_item()
            game.get_computer_item()
            result_list=game.get_game_result()
            results.append(result_list)
        elif answer == 'x':
            print_result(results)
            print('Thank you for playing!')
            break
        elif answer == 'q':
            print('Thank you for playing!')
            break

if __name__ == "__main__":
    main()
