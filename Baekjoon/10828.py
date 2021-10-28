import sys
def stack_fomula(my_stack) :
    info = sys.stdin.readline().split()
    
    if info[0] == 'push' :
        my_stack.append(int(info[1]))
    if info[0] == 'pop' :
        if len(my_stack) != 0 : print(my_stack.pop())
        else : print(-1)
    if info[0] == 'top' :
        if len(my_stack) != 0 : print(my_stack[len(my_stack) - 1])
        else : print(-1)
    if info[0] == 'size' :
        print(len(my_stack))
    if info[0] == 'empty' :
        if len(my_stack) == 0 : print(1)
        else : print(0)
def run_stack(num) :
    my_stack = []
    for _ in range(num) : stack_fomula(my_stack)
    
if __name__ == '__main__' :
    num = int(input())
    run_stack(num)

# 시간제한이 1초 미만 -> input() 보단 sys.stdin.readline() 사용할 것
