def print_triangle(num) :
    for i in range(num) :
        if i+1 == num :
            for _ in range(2 * i + 1) : print('*', end='')
        else :

            for _ in range(num - i - 1) : print('', end=' ')
            print('*', end='')
            for _ in range(2 * (i - 1) + 1) : print(' ', end='')
            if i != 0 : print('*')
            else : print()
if __name__ == '__main__' :
    num = int(input())
    print_triangle(num)