import heapq

def solution(jobs):
    '''
    - start = 이전시간
    - now = 현재시간
    - 최소힙의 기준은 "작업의 소요 시간"이다. 
    '''
    answer,now,i = 0,0,0
    start = -1
    heap = []
    
    while i < len(jobs) :
        for job in jobs :
            if start < job[0] <= now :
                heapq.heappush(heap,[job[1],job[0]])
        if heap :
            current = heapq.heappop(heap)
            start = now
            now += current[0]
            answer += (now - current[1])
            i += 1
        else :
            now += 1
    
    return answer // len(jobs)

# [문제] 디스크 컨트롤러
# [테마] 힙
# [출처] https://programmers.co.kr/learn/courses/30/lessons/42627

# [해법]
# - 문제를 보면 SJF 스케쥴링에 대한 문제라는 것부터 파악이 되야한다.
#   + 참고로, 첫 번째 나오는 안좋은 예시가 FCFS 방식일 경우이다.
# - SJF(Shortest Job First) 방식은, 해당 시점에서 작업가능한 작업들 중
#   + Burst Time이 가장 작은 작업부터 처리해 나가는 방식임을 알아야 한다.