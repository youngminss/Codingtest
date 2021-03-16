from collections import deque

def bfs():
    
    m,n,k = map(int,input().split())
    queue = deque()
    Cabbage = [[0]*m for _ in range(n)]

    for _ in range(k):
        y,x = map(int,input().split())
        Cabbage[x][y] = 1
    
    graph = [[0]*m for _ in range(n)]

    dx = [-1,1,0,0]
    dy = [0,0,-1,1]

    count = 0
    for i in range(n):
        for j in range(m):
            if Cabbage[i][j] == 1 and graph[i][j] == 0:
                graph[i][j] = 1
                queue.append((i,j))
                count += 1

            while queue:
                (x,y) = queue.popleft()
                for k in range(4):
                    nx = x + dx[k]
                    ny = y + dy[k]
                    if 0 <= nx < n and 0 <= ny < m:
                        if Cabbage[nx][ny] == 1 and graph[nx][ny] == 0:
                            graph[nx][ny] = 1
                            queue.append((nx,ny))
    
    return count
      
if __name__ == '__main__':
    t = int(input())
    for _ in range(t):
        print(bfs())

# 문제 : 1012 유기농 배추
# 분류 : DFS/BFS 

# Note 
# - 입력이 (m,n,k) 순인데, 이걸, (열,행,정보수) 순서 인걸 조심하자. (행,열,정보순)이라서, 삽질 좀 했다..
# - (0,0) ~ (n,m)까지 순회하면서 매 차례, 배추밭이고, 아직 방문안했으면, 큐에 넣고, 큐 작업 수행(bfs)

# 링크 : https://www.acmicpc.net/problem/1012
    