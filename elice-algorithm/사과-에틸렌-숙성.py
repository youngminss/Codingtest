from collections import deque
def solution(maps,visited, m, n):
    dx = [-1,1,0,0]
    dy = [0,0,-1,1]
    queue = deque()
    copy_queue = deque()
    for i in range(n):
        for j in range(m):
            if maps[i][j] == 1:
                queue.append((i,j))
    if len(queue) == m * n :
        return 0

    day = 0
    while True:
        while queue:
            x,y = queue.popleft()
            for i in range(4):
                nx = x + dx[i]
                ny = y + dy[i]
                if 0<= nx < n and 0<= ny < m and maps[nx][ny] == 0:
                    maps[nx][ny] = 1
                    copy_queue.append((nx,ny))
        
        if copy_queue:
            queue = copy_queue.copy()
            copy_queue.clear()
            day += 1
        else:
            break
        
    for visit in visited:
        if 0 in maps:
            return -1
    return day


if __name__ == "__main__":
    m, n = map(int,input().split())
    maps = [list(map(int,input().split())) for _ in range(n)]
    visited = [[0]*m for _ in range(n)]
    result = solution(maps,visited, m, n)
    print(result)