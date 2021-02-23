from collections import deque
import sys

def Router(N):

    queue = deque()

    while True:
        data = int(sys.stdin.readline().rstrip())
        if data == 0:
            queue.popleft()
        elif data == -1:
            break
        elif data > 0 and len(queue) < N:
            queue.append(data)

    if len(queue) == 0:
        print("empty")
    else :
        for queue_data in queue:
            print(queue_data, end=' ')


if __name__ == '__main__':
    N = int(sys.stdin.readline().rstrip())
    Router(N)

# 문제 : 15828 Router
# 분류 : 큐

# Note : 백준사이트는 input함수 대신에, sys.stdin.readline() [.rstrip()] 을 사용해서, 입력시간을 줄이자.
# (input() 사용시 시간초과 50점)

# 링크 : https://www.acmicpc.net/problem/15828