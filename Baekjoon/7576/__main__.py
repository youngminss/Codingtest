from collections import deque

def Tomato(graph,n,m):
        
    queue = deque()
    temp = deque()
    for i in range(n):
        for j in range(m):
            if graph[i][j] == 1:
                queue.append((i,j))
    
    dx = [-1,1,0,0]
    dy = [0,0,-1,1]
    count = 0

    while True:
        while queue:
            (x,y) = queue.popleft()
            for i in range(4):
                nx = x + dx[i]
                ny = y + dy[i]
                if 0<= nx < n and 0<= ny < m and graph[nx][ny] == 0:
                    graph[nx][ny] = 1
                    temp.append((nx,ny))
        if len(temp) != 0:
            queue = temp.copy()
            temp.clear()
            count += 1
        else:
            break
    
    for line in graph:
        if 0 in line:
            return -1
    
    return count

if __name__ == "__main__":
    m,n = map(int,input().split())  # m = 열 길이, n = 행 길이
    graph = [list(map(int,input().split())) for _ in range(n)]

    print(Tomato(graph,n,m))

# 문제 : 7576 토마토
# 분류 : DFS/BFS 

# Note 
# - 매 차례, 큐에 담았던, 위치정보는 다 써봐야 한다는 것 !
# - 그러면서, 새로운 위치정보를 받아야 한다는 것 !

# [참고] 2차워 리스트 데이터에서, 특정 값이 들어 있는지 확인할 때
# - if 데이터 in 2차원리스트 << 이러면 안된다.
# - 반복문 통해서, 한 행마다, in 연산자 적용하는 것이 맞다.
# - (더 좋은 방법이 있다면, 보완해야겠다.)

# 링크 : https://www.acmicpc.net/problem/7576
