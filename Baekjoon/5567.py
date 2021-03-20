from collections import deque
import math
def solution(graph,m):

    vistited = [0] * m
    vistited[0] = 1
    distance = [math.inf] * m
    distance[0] = 0
    
    queue = deque()
    queue.append(0)

    while queue:
        x = queue.popleft()
        for i in range(m):
            if graph[x][i] == 1 and vistited[i] == 0:
                if distance[i] > distance[x] + 1:
                    distance[i] = distance[x] + 1
                    vistited[i] = 1
                    queue.append(i)

    count = 0
    for i in range(1,m):
        if distance[i] <= 2:
            count += 1
    
    return count


if __name__ == '__main__':
    n = int(input())
    m = int(input())

    members = [i for i in range(m)]

    graph = [[0]*m for _ in range(m)]
    for _ in range(m):
        i,j = map(int,input().split())
        graph[i-1][j-1] = 1
        graph[j-1][i-1] = 1
    
    print(solution(graph,m))


# 문제 : 5567 결혼식
# 분류 : DFS/BFS 

# Note
# - Test 1 : 인접행렬 => 메모리초과 

# 링크 : https://www.acmicpc.net/problem/5567