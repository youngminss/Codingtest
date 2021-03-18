from collections import deque
import math

def solution(graph,start,n):
    
    distance = [math.inf] * n
    distance[start] = 0
    visited = [0] * n
    visited[start] = 1

    queue = deque([start])

    while queue:
        x = queue.popleft()
        for i in range(n):
            if graph[x][i] == 1 and visited[i] == 0 :
                visited[i] = 1
                queue.append(i)
                if distance[x] + 1 < distance[i]:
                    distance[i] = distance[x] + 1
    
    return sum(distance)

if __name__ == "__main__":
    n,m = map(int,input().split())
    graph = [[0]*n for _ in range(n)]

    for _ in range(m):
        i,j = map(int,input().split())
        graph[i-1][j-1] = 1
        graph[j-1][i-1] = 1
    
    Kevin_Bacon = []
    for i in range(n):
        Kevin_Bacon.append(solution(graph,i,n))
    
    print(Kevin_Bacon.index(min(Kevin_Bacon)) + 1)

# 문제 : 1389 케빈 베이컨의 6단계 법칙
# 분류 : MST(최소비용경로) 

# Note 
# - (1~n)번 기준, 각 distance 배열을 구하고, sum값을, Kevin_Bacon 배열에 넣기
# - visited 배열을 통해, 방문하지 않은, 친구만 조사
# - 현재 나의 거리 + 1 < 그 친구의 현재 거리 => 친구의 거리 업데이트
# - 결과적인, distance 배열 값들의 합 반환
# - 최소비용이 `중복` 이 될 수 있을 때는, 가장 번호가 작은 사람을 선별 => index, min 함수 사용

# 링크 : https://www.acmicpc.net/problem/1389