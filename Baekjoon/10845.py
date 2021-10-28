import sys
def queue_fomula(my_queue) :
    queue_info = sys.stdin.readline().rstrip().split()
    if queue_info[0] == 'push' :
        my_queue.append(int(queue_info[1]))
    if queue_info[0] == 'pop' :
        if len(my_queue) == 0 : print(-1)
        else : print(my_queue.pop(0))
    if queue_info[0] == 'front' :
        if len(my_queue) == 0 : print(-1)
        else : print(my_queue[0])
    if queue_info[0] == 'back' :
        if len(my_queue) == 0 : print(-1)
        else : print(my_queue[len(my_queue) - 1])
    if queue_info[0] == 'size' :
        print(len(my_queue))
    if queue_info[0] == 'empty' :
        if len(my_queue) == 0 : print(1)
        else : print(0)
    
def run_queue(num) :
    my_queue = []
    for _ in range(num) : queue_fomula(my_queue)
        
if __name__ == '__main__' :
    num = int(input())
    run_queue(num)