import sys
from collections import deque
def deque_formula(my_deque) :
    deque_info = sys.stdin.readline().rstrip().split()
    if deque_info[0] == 'push_front' :
        my_deque.appendleft(int(deque_info[1]))
    if deque_info[0] == 'push_back' :
        my_deque.append(int(deque_info[1]))
    if deque_info[0] == 'pop_front' :
        if len(my_deque) == 0 : print(-1)
        else : print(my_deque.popleft())
    if deque_info[0] == 'pop_back' :
        if len(my_deque) == 0 : print(-1)
        else : print(my_deque.pop())
    if deque_info[0] == 'front' :
        if len(my_deque) == 0 : print(-1)
        else : print(my_deque[0])
    if deque_info[0] == 'back' :
        if len(my_deque) == 0 : print(-1)
        else : print(my_deque[len(my_deque) - 1])
    if deque_info[0] == 'size' :
        print(len(my_deque))
    if deque_info[0] == 'empty' :
        if len(my_deque) == 0 : print(1)
        else : print(0)
    
def run_deque(num) :
    my_deque = deque()
    for _ in range(num) : deque_formula(my_deque)

if __name__ == '__main__' :
    num = int(sys.stdin.readline())
    run_deque(num)