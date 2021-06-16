from collections import deque

def existBetter(waitItems, target) :
    for item in waitItems :
        if item[1] > target :
            return True
    return False

def solution(priorities, location):
    
    priority_printer = []
    for i in range(len(priorities)) :
        priority_printer.append([i,priorities[i]])
    
    wait_queue = deque(priority_printer)
    
    answer = 1
    while True :
        popData = wait_queue.popleft()
        if existBetter(wait_queue, popData[1]) :
            wait_queue.append(popData)
        else :
            if popData[0] == location :
                break
            answer += 1
        
    return answer


# [문제] 프린터
# [테마] 스택 / 큐
# [출처] https://programmers.co.kr/learn/courses/30/lessons/42587?language=python3

# [해법]
# - 방금 뽑은 우선순위보다, 리스트에 남은 우선순위들 중 높은게 남아있는지 체크할 함수가 하나 필요함
# - 체크해서 있다면, 방금 뽑은 우선순위 정보를 가장 마지막으로 다시 넣는다.
# - location 에 해당하는 우선순위정보가 아닌 것이 인쇄(리스트에서 pop)될 때만, 차례(answer)를 카운팅하다가
# - location 에 해당하는 우선순위인데, 인쇄될 차례이면, 루프를 탈출하고, answer를 반환

# [Note]
# 1. 파이썬에서 리스트정보에, 인덱스번호가 필요한 경우 = enumerate(리스트)
# - 형식 : index_list = [(i,p) for i,p in enumerate(list)]
# 2. 파이썬 리스트안에, 특정 원소보다 조건에 맞는것이 하나라도 만족하면 true = any(x in the iterable)
# - 형식 : answer = any( 조건 for item in list_items)
#   + cf ) all(x in the iterable) = 모두 만족하는 경우 true
