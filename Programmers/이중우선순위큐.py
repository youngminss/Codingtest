import heapq
from collections import deque

def solution(operations):
    
    answer = []
    operations = deque(operations)
    
    while operations :
        operation = operations.popleft()
        if operation.split()[0] == 'I' :
            heapq.heappush(answer, int(operation.split()[1]))
        else :
            if answer :
                if int(operation.split()[1]) < 0 :
                    heapq.heappop(answer)
                else :
                    answer.pop()
    
    answer.sort()
    if answer :
        return [answer[-1],answer[0]]
    else :
        return [0,0]

# [문제] 이중우선순위큐
# [테마] 힙
# [출처] https://programmers.co.kr/learn/courses/30/lessons/42628

# [해법]
# - pop 하는 과정에서, O(1) 실행시간을 위해 리스트 -> 덱 변환 필요
# - 매 차례 operation 을 확인해서 해당 연산을 진행하면 된다.
# - 중요한 점은, 마지막에 answer 리스트를 정렬하는 과정이 필요하다.
  
# [Note]
# - answer 최소힙 구조가 맞지만, 최소힙이 가장 최소값을 보장은 하지만, 루트값을 제외한 나머지 노드에 대해서는 순서를 보장하지 않기 때문이다.
