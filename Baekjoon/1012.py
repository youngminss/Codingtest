from collections import deque

def bfs():
    
    m,n,k = map(int,input().split())
    queue = deque()
    Cabbage = [[0]*m for _ in range(n)]

    for _ in range(k):
        y,x = map(int,input().split())
        Cabbage[x][y] = 1
    
    print(Cabbage)
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
                    x = x + dx[k]
                    y = y + dy[k]
                    if 0 <= x < n and 0 <= y < m:
                        if Cabbage[x][y] == 1 and graph[x][y] == 0:
                            graph[x][y] = 1
                            queue.append((x,y))
    
    print(graph)
    print(count)
      




                


            


if __name__ == '__main__':
    t = int(input())
    for _ in range(t):
        print(bfs())
    