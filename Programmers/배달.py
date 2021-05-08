import math
from collections import deque

def solution(n, road, k):
    answer = 0
    inf = math.inf
    # 주어진 road 정보로, 가중치 인접행렬 만들기
    graph = [[inf]*n for _ in range(n)]
    for i in range(len(road)):
        start, end = road[i][0], road[i][1]
        if graph[start-1][end-1] > road[i][2] :
            graph[start-1][end-1] = road[i][2]
            graph[end-1][start-1] = road[i][2]
    d = [inf] * n
    d[0] = 0
    v = [0] * n
    v[0] = 1
    # 1번 노드 큐에 넣기
    queue = deque()
    queue.append(0)
    while queue :
        x = queue.popleft()
        for i in range(n):
            if d[x] + graph[x][i] < d[i]:
                d[i] = d[x] + graph[x][i]
                queue.append(i)
    
    for i in range(n):
        if d[i] <= k:
            answer += 1

    return answer


if __name__ == '__main__':
    result = solution(5,[[1,2,1],[2,3,3],[5,2,2],[1,4,2],[5,3,1],[5,4,2]],3)
    print(result)

# 5,[[1,2,1],[2,3,3],[5,2,2],[1,4,2],[5,3,1],[5,4,2]],3
# 6,[[1,2,1],[1,3,2],[2,3,2],[3,4,3],[3,5,2],[3,5,3],[5,6,1]],4


# [문제] 배달 / 프로그래머스 Summer/Winter Coding (2018)
# [문제링크] https://programmers.co.kr/learn/courses/30/lessons/12978
# [카테고리] 최단경로 (다익스트라)
# [실행시간] O(Elog(V))

# [해법]
# - 전형적인, 최단경로문제이고, 다익스트라 알고리즘으로 해결함
# - 단, 처음에, 간선정보 인접행렬 만들때, 중복된 정점들간의 정보가 들어왔을 때, 가중치가 더 작은 정보로 업데이트한다.
# - 어차피, 특정 정점(여기서는 1번 정점에서 출발한다고 함)에서, 비용 k 안에 갈수 있냐 없냐만 체크하는거지, 몇 가지 갈래길이 있냐를 묻는 것이 아니기 때문
