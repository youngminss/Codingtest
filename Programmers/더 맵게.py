import heapq

def solution(scoville, K):
    answer = 0
    heapq.heapify(scoville)
    
    while len(scoville) > 1 and scoville[0] < K :
        no1_map = heapq.heappop(scoville)
        no2_map = heapq.heappop(scoville)
        new_map = (no1_map + no2_map * 2)
        heapq.heappush(scoville,new_map)
        answer += 1
    
    
    return answer if scoville[0] >= K else -1

# [문제] 더 맵게
# [테마] 힙
# [출처] https://programmers.co.kr/learn/courses/30/lessons/42626

# [해법]
# - 자료구조 "힙" 이 필요한 상황
# - "파이썬"을 사용한다면, 기본 라이브러리의 'heapq' 를 사용하면 매우 깔끔
# - 문제 자체는 스코빌 지수 안에 모든 지수가 K 보다 작을 때까지만 진행하면 된다는 것만 알면 된다.
# - 이를 판단하는 거는, 스코빌 리스트에 전체를 보기보단, 첫 번째 원소만 보고 판단하면, 뒤는 생각 안해도 된다.

# [Note]
# - 'heapq' 의 소중함을 알자.
# - 'heapq' 의 사용법을 한 번 정리하자.
