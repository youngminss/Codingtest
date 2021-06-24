from collections import deque

def solution(n, computers):
    answer = 0
    vertex = [0] * len(computers)
    queue = deque()
    
    i = 0
    while i < len(computers) :
        if vertex[i] == 0 :
            answer += 1
            vertex[i] = 1
            queue.append(i)
        
        if queue :
            while queue :
                popV = queue.popleft()
                for j in range(len(computers[popV])) :
                    if computers[popV][j] == 1 and vertex[j] == 0 :
                        vertex[j] = 1
                        queue.append(j)
        else :
            i += 1
    
    return answer


# [문제] 네트워크
# [테마] DFS / BFS
# [출처] https://programmers.co.kr/learn/courses/30/lessons/43162

# [해법]
# - DFS, BFS 방식 둘 다 해결 가능하다.
# - 나는 BFS 방식으로 풀이했다.
# - 정점(vertex)의 방문 여부를 관리하는 리스트를 생성한다.
# - 해당 시점에서 연결된 주변 정점 정보를 담는 리스트 queue를 생성한다.
# - computers 배열 길이만큼 반복할껀데, 매 차례 i 번째 vertex가 아직 방문하지 않았다면 answer 카운트를 늘리고 queue 에 넣는다.
# - 그 다음, queue가 비워질 때까지 정점 번호를 하나씩 뽑아 그 정점의 주변 노드 정보를 확인하면서 아직 방문안한 정점이면 queue에 추가로 넣는다.
# - queue가 이전에 미리 비워져 있으면, 탐색할 queue에 정보가 없으니, i 인덱스를 카운팅한다.
