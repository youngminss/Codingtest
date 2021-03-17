from collections import deque

def bfs(maps,graph,n):

    queue = deque()
    
    dx = [-1,1,0,0]
    dy = [0,0,-1,1]

    number = 0      # 단지 수 카운터
    house_count = 0    # 단지 내, 집 수 카운터
    house_list = []     # 단지 마다, 집 카운트, 리스트
    for i in range(n):
        for j in range(n):
            if maps[i][j] == '1' and graph[i][j] == 0 :
                number += 1
                house_count = 1
                graph[i][j] = number
                queue.append((i,j))

            while queue :
                (x,y) = queue.popleft()
                for k in range(4):
                    nx = x + dx[k]
                    ny = y + dy[k] 

                    if 0<= nx < n and 0<= ny < n:
                        if maps[nx][ny] == '1' and graph[nx][ny] == 0:
                            graph[nx][ny] = number
                            house_count += 1
                            queue.append((nx,ny))
            
            # 하나, 단지 찾아서, bfs 실행하고나서, house_count 초기화 필요
            if house_count != 0:
                house_list.append(house_count)
                house_count = 0

    return [number, sorted(house_list)]

  
if __name__ == '__main__':

    n = int(input())
    graph = [[0]*n for _ in range(n)]
    maps = [input() for _ in range(n)]
    
    result = bfs(maps,graph,n)
    
    print(result[0])
    for house in result[1]:
        print(house)


# 문제 : 2667 단지번호 붙이기
# 분류 : DFS/BFS 

# Note 
# - 뽑아내야하는 것 : 1. 전체 아파트 단지 수, 2. 아파트 단지마다, 집(가구 수)

# 링크 : https://www.acmicpc.net/problem/2667
    

    
    
