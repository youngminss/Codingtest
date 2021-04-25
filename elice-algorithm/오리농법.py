from collections import deque

def solution(graph,visited,m,n):

    dx = [-1,1,0,0]
    dy = [0,0,-1,1]

    queue = deque()
    count = 0
    for i in range(m):
        for j in range(n):
            if graph[i][j] == 1 and visited[i][j] == 0:
                visited[i][j] = 1
                count += 1
                queue.append((i,j))
                while queue :
                    x, y = queue.popleft()
                    for k in range(4):
                        nx = x + dx[k]
                        ny = y + dy[k]
                        if 0<= nx < m and 0<= ny < n and graph[nx][ny] == 1 and visited[nx][ny] == 0:
                            queue.append((nx,ny))
                            visited[nx][ny] = 1
    return count
            
if __name__ == '__main__' :
    m, n, k = map(int,input().split())
    graph = [[0] * n for _ in range(m)]
    visited = [[0] * n for _ in range(m)]
    for _ in range(k):
        i, j = map(int,input().split())
        graph[i][j] = 1
    
    result = solution(graph,visited,m,n)
    print(result)



# [BFS] 오리농법
# 실행시간 : O(N^2)

# 논의 크기와 벼를 심은 위치가 주어질 때 최소로 필요한 오리 수를 구하는 프로그램을 작성하세요.

# [입력]
# 첫째 줄에는 벼를 심은 논의 가로 길이인 정수 M과 세로 길이인 정수 N, 그리고 벼가 심겨 있는 위치의 개수인 정수 K를 입력합니다.
# (1 ≤ M, N ≤ 50)
# (1 ≤ K ≤ 2500)
# 그다음 K 줄에는 벼의 위치를 나타내는 두 정수 X, Y를 입력합니다.
# (0 ≤ X ≤ M-1)
# (0 ≤ Y ≤ N-1)

# [출력]
# 필요한 오리의 최솟값을 출력합니다.

# [입력 예시]
# 8 6 22
# 0 0
# 1 0
# 4 0
# 5 0
# 6 0
# 7 0
# 0 1
# 1 1
# 4 1
# 7 1
# 4 2
# 5 2
# 6 2
# 7 2
# 0 3
# 1 3
# 2 3
# 3 3
# 4 4
# 5 4
# 6 5
# 7 5
# [출력 예시]
# 5

# [문제출처] : 엘리스 AI 트랙