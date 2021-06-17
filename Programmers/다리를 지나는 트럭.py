def sumCrossingWeight(crossing) :
    sum = 0
    for i in range(len(crossing)) :
        sum += crossing[i][1]
    return sum

def crossingTruckGo(crossing) :
    for truck in crossing :
        truck[0] += 1
    return crossing

def solution(bridge_length, weight, truck_weights):
    answer = 0
    
    truck_weights_length = len(truck_weights)
    crossing = []

    truck_weights = [[0,t] for t in truck_weights]
    
    i = 0
    while i < truck_weights_length :
        answer += 1
        if crossing and (crossing[0][0] >= bridge_length) :
            crossing.pop(0)
            i += 1
                            
        if truck_weights and (sumCrossingWeight(crossing) + truck_weights[0][1] <= weight) :
            popTruck = truck_weights.pop(0)
            crossing.append(popTruck)
        
        if crossing :
            crossing = crossingTruckGo(crossing)
    
    return answer


# [문제] 다리를 지나는 트럭
# [테마] 스택 / 큐
# [출처] https://programmers.co.kr/learn/courses/30/lessons/42583?language=python3

# [해법]
# - 다리를 건너고 있는 트럭에 정보인, crossing 리스트를 생성함
# - 모든 트럭이, 다리를 건넜을 때 (i < truck_weights_length) 반복은 종료
# - 매 반복의 과정은
#   1. 시간을 카운팅하고
#   2. 다리 위에 트럭이 있으면, 가장 선두 트럭이, 다리 끝에 왔는지 확인하고, 맞다면, 내보낸다.
#      + 그 경우, i 카운트 증감
#   3. 아직 다리위에 로드되지 못한 트럭이 있으면, 현재 다리위에 트럭들의 무게와, 로드되지 않은 선두 트럭 무게의 합이, 다리가 견딜 수 있는 하중이 충족되면, 로드시킨다.
#   4. 작업 마지막에는, 다리 위에 트럭들을, 모두 "한 칸" 씩 진보시킨다.

# [Note]
# + 로직의 정의는 의도가 확실하고 정답인데, 문제는 실행시간에 개선이 필요하긴 하다.
# + (방법 1) "한 칸씩" 전진이 아니라, 다리위에 트럭이 있으면, bridge_length 만큼, 다리위에 트럭을 전부 점프시키는 방식을 구현할려 했는데, 말렸다.
# + (방법 2) collections 의 deque를 사용하면, 일반 pop() 하는 과정을 단축시켜서, 개선이 있을 것이다.solution

