def solution(progresses, speeds):
    answer = []
    deployCount = 0
    
    while deployCount < len(progresses) :
        restProgress = 100 - progresses[deployCount]
        restDay = restProgress // speeds[deployCount]
        if restProgress % speeds[deployCount] != 0 :
            restDay += 1
        
        for i in range(deployCount,len(progresses)) :
            progresses[i] += speeds[i] * restDay
        
        count = 0
        for i in range(deployCount,len(progresses)) :
            if progresses[i] >= 100 :
                count += 1
                deployCount += 1
            else :
                break
        
        answer.append(count)
          
    return answer

# [문제] 기능개발
# [테마] 스택 / 큐
# [출처] https://programmers.co.kr/learn/courses/30/lessons/42586?language=python3

# [해법]
# - 매 차례, 맨 앞 작업이 끝나는 restDay 날짜 수를 구함
#   + 하루에 작업 할 수 있는 양으로 딱 끝나지 않고, 남는 작업량이 있을 수 있으니 체크 작업 필수
#   + (나머지(/) 연산을 하고, math.ceil() 을 써도 된다.)
# - 현재, 처리해야되는 작업부터, 남은 작업 끝까지 구한 restDay * 하루 작업가능량을 누적한다.
# - 마지막 단계에서 100%가 된 작업을 순서대로 조회하면서 카운팅한다.
# - 현재 100% 작업량, 다음이 100%가 아닌 작업이면 조회를 멈춘다.
# - 카운팅 된, 작업의 수를 정답 배열에 push 한다.

