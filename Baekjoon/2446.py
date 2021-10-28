import sys

def print_up_triangle(num) :
    for i in range(num) :
        for _ in range(i) : print('', end=" ")
        for _ in range(2 * (num - i) - 1) : print('*', end="")
        print()
def print_down_triangle(num) :
    for i in range(num-1) :
        for _ in range(num - i - 2) : print('', end=" ")
        for _ in range(2 * (i + 1) + 1) : print('*', end="")
        print()

if __name__ == '__main__' :
    num = int(sys.stdin.readline())
    print_up_triangle(num)
    print_down_triangle(num)
    