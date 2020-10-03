from math import inf as infinity
from random import choice
import platform
import time
from os import system
wi=[];
lose=[];
draws=[];
print("YOU ARE O 3*3 BOARD IS WITH YOU CHOSE ONE CELL TO PLACE THE O IN IT AND WE ARE O WE WILL PLAY TOGETHER.\n");
board = [
    [0 ,0  ,0], 
    [0 , 0 ,0],
    [ 0, 0 ,0],
]
def wins(board):
    x='x';
    p=1;
    if board[0][0]==x and board[0][1]==x and board[0][2]==x:
        return p;
    if board[0][0]==x and board[1][1]==x and board[2][2]==x:
        return p;
    if board[1][0]==x and board[1][1]==x and board[1][2]==x:
        return p;
    if board[2][0]==x and board[2][1]==x and board[2][2]==x:
        return p;
    if board[2][0]==x and board[1][1]==x and board[0][2]==x:
        return p;
    if board[0][0]==x and board[1][0]==x and board[2][0]==x:
        return p;
    if board[0][1]==x and board[1][1]==x and board[2][1]==x:
        return p;
    if board[0][2]==x and board[1][2]==x and board[2][2]==x:
        return p;
    x='o';
    p=0;
    if board[0][0]==x and board[0][1]==x and board[0][2]==x:
        return p;
    if board[0][0]==x and board[1][1]==x and board[2][2]==x:
        return p;
    if board[1][0]==x and board[1][1]==x and board[1][2]==x:
        return p;
    if board[2][0]==x and board[2][1]==x and board[2][2]==x:
        return p;
    if board[2][0]==x and board[1][1]==x and board[0][2]==x:
        return p;
    if board[0][0]==x and board[1][0]==x and board[2][0]==x:
        return p;
    if board[0][1]==x and board[1][1]==x and board[2][1]==x:
        return p;
    if board[0][2]==x and board[1][2]==x and board[2][2]==x:
        return p;
    return 2;
print(wins([
    ['x','x','x'],
    ['o','o','x'],[0,0,0],]));
def count_empty(board):
    for i in range(3):
        for j in range(3):
            if board[i][j]==0:
                return 1;
    return 0;
print(count_empty([
    ['x','x','x'],
    ['o','o','x'],[0,0,0],]));
def solve(board,player,move):
    #print(player,move);
    x=0;
    o=0;
    draw=0;
    if wins(board)<2:
        return wins(board);
    if count_empty(board)==0:
        return 2;
    if player==1:
        for i in range(3):
            for j in range(3):
                if board[i][j]==0:
                    board[i][j]='x'
                    win=solve(board,0,move+1)
                    if win==1:
                        x+=1
                        if move==1:
                            wi.append((i,j));
                    elif win==0:
                        o+=1
                        if move==1:
                            lose.append((i,j))
                    else:
                        draw+=1
                        if move==1:
                            #print(board[0]);print(board[1]);print(board[2]);print("bc");
                            draws.append((i,j));
                    board[i][j]=0;
        if x>=1:
            return 1
        elif draw>=1:
            return 2
        else:
            return 0
    else:
         for i in range(3):
            for j in range(3):
                if board[i][j]==0:
                    board[i][j]='o'
                    win=solve(board,1,move+1);
                    if win==0:
                        o+=1;
                    elif win==1:
                        x+=1;
                    else:
                        draw+=1;
                    board[i][j]=0;
        
         if o>=1:
            return 0;
         elif draw>=1:
            return 2;
         else:
            return 1;
    return 2;
i=0;
while i<9:
    print(board[0])
    print(board[1])
    print(board[2])
    if i%2==0:
        x,y=input().strip().split();
        x=int(x);
        y=int(y);
        x-=1;
        y-=1;
        if board[x][y]==0:
            board[x][y]='o';
        else:
            ###cmputer turn
            print("Bad move\n");
    else :
        wi=[];
        draws=[];
        lose=[];
        solve(board,1,1)
        print(wi);
        print(draws);
        print(lose);
        print(board);
        if len(wi)>=1:       
            x,y=wi[0];
            board[x][y]='x';
        elif len(draws)>=1:
            x,y=draws[0];
            board[x][y]='x';                    

        elif len(lose)>=1:
            x,y=lose[0];
            board[x][y]='x';
        
    i+=1;
win=wins(board);
if win==0:
    print("you won\n");
else :
    print("computer won\n");