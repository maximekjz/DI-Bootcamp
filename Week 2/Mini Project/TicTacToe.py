def tictactoe():
    case1="  "
    case2="  "
    case3="  "
    case4="  "
    case5="  "
    case6="  "
    case7="  "
    case8="  "
    case9="  "
    welcome="Welcome to TIC TAC TOE !"

    board=f'''
    {welcome}
    TIC TAC TOE
    * * * * * * * * * *  *   
    *  {case1}  |  {case2}  |  {case3}  *
    * -----|------|----- *
    *  {case4}  |  {case5}  |  {case6}  *
    * -----|------|----- *
    *  {case7}  |  {case8}  |  {case9}  *
    * * * * * * * * * *  *   
    '''

    print(board)

    turn=0
    win=False
    player_X=True
    case=[[""] * 3 for _ in range(3)]

    while turn !=9 and not win:

        def player_turn():
            nonlocal turn, welcome, player_X
            if player_X:
                print("Player X's turn")
            else:
                print("Player O's turn")

            i=int(input("Enter a row: "))-1
            j=int(input("Enter a column: "))-1

            if case[j][i]!="":
                print("This case is already taken, please chose another one")
                i=int(input("Enter a row: "))-1
                j=int(input("Enter a column: "))-1

            if turn%2==0:
                case[j][i]="X"
                player_X=True
            else:
                case[j][i]="O"
                player_X=False   
            
            turn+=1
            player_X = not player_X
            welcome=""

        player_turn()

        case1 = "X" if case[0][0] == "X" else "O" if case[0][0] == "O" else " "
        case2 = "X" if case[1][0] == "X" else "O" if case[1][0] == "O" else " "
        case3 = "X" if case[2][0] == "X" else "O" if case[2][0] == "O" else " "
        case4 = "X" if case[0][1] == "X" else "O" if case[0][1] == "O" else " "
        case5 = "X" if case[1][1] == "X" else "O" if case[1][1] == "O" else " "
        case6 = "X" if case[2][1] == "X" else "O" if case[2][1] == "O" else " "
        case7 = "X" if case[0][2] == "X" else "O" if case[0][2] == "O" else " "
        case8 = "X" if case[1][2] == "X" else "O" if case[1][2] == "O" else " "
        case9 = "X" if case[2][2] == "X" else "O" if case[2][2] == "O" else " "

        board=f'''
        TIC TAC TOE
        * * * * * * * * * * * *  *   
        *   {case1}    |   {case2}   |   {case3}   * 
        * -------|-------|-------*
        *   {case4}    |   {case5}   |   {case6}   *
        * -------|-------|-------*
        *   {case7}    |   {case8}   |   {case9}   *
        * * * * * * * * * * * *  *   
        '''
        print(board)

        def play_stop():
            nonlocal win
            if turn>4:
                for i in range (2):
                    if case[i][0] == case[i][1] == case[i][2] or case[0][i] == case[1][i] == case[2][i] or case[i][i]==case[i+1][i+1]==case[i+2][i+2] or case[2][0]==case[1][1]==case[0][2]:
                        print(f"Player {'O' if player_X else 'X'} is the winner !")
                        win=True
            if turn==9 and not win:
                print("It's a draw !")
        play_stop()

    answer=input("Do you want to play again? Yes or No: ")
    if answer=="Yes":
        tictactoe()
    else:
        print("Hope you had a goodtime !")
tictactoe()
