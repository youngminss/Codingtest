import sys

def print_up_stars(num) :
    for i in range(num) :
        for _ in range(0,i+1) : print('*', end="")
        for _ in range(num - i - 1) :  print('', end=" ")
        for _ in range(num - i - 1) :  print('', end=" ")
        for _ in range(0,i+1) : print('*', end="")
        print()
        
def print_down_stars(num) :
    for i in range(num-1) :
        for _ in range(0,num-i-1) : print('*', end="")
        for _ in range(i+1) :  print('', end=" ")
        for _ in range(i+1) :  print('', end=" ")
        for _ in range(0,num-i-1) : print('*', end="")
        print()


if __name__ == '__main__' :
    num = int(sys.stdin.readline())
    print_up_stars(num)
    print_down_stars(num)



