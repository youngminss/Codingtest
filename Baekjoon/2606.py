import sys
from collections import deque

def virus_computer(graph) :
    answer = 0
    vertex = [0] * len(graph)
    vertex[0] = 1
    queue = deque([0])
    while queue :
        popV = queue.popleft()
        for i in range(len(graph[popV])) :
            if graph[popV][i] == 1 and vertex[i] == 0 :
                vertex[i] = 1
                queue.append(i)
                answer += 1
    
    print(answer)
        
if __name__ == '__main__' :
    N = int(sys.stdin.readline())
    T = int(sys.stdin.readline())
    graph = [[0]*N for _ in range(N)]
    for _ in range(T) :
        i, j = map(int,sys.stdin.readline().split())
        graph[i-1][j-1] = 1
        graph[j-1][i-1] = 1
    virus_computer(graph)
        
# [문제] 바이러스
# [테마] DFS / BFS
# [출처] https://www.acmicpc.net/problem/2606

# [해법]
# - BFS 방식으로 해결했다.
# - 1번 바이러스로부터 시작해서 어디까지 바이러스가 전염이 되는지만 체크
# - 즉, 0번째 정점(vertex)에서 시작한 BFS만 진행해서 vertex 리스트에 새로 방문이 될 때마다 정답 카운팅

