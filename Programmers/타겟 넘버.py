def solution(numbers, target):
    answer = 0
    def check_targetNumber(numbers, target, i, sum_num,answer) :
        if i == len(numbers)-1 :
            if sum_num == target :
                return answer + 1
        else :
            answer = check_targetNumber(numbers, target, i+1, sum_num + numbers[i+1],answer)
            answer = check_targetNumber(numbers, target, i+1, sum_num - numbers[i+1],answer)

        return answer

    answer = check_targetNumber(numbers,target, 0, numbers[0],answer)
    answer = check_targetNumber(numbers,target, 0, -numbers[0],answer)

    return answer

# [문제] 타겟 넘버
# [테마] DFS
# [출처] https://programmers.co.kr/learn/courses/30/lessons/43165

# [해법]
# - DFS 로 풀어야 편한 문제
# - 일단 이게 왜...그래프 탐색테마인지를 느끼는게 가장 중요
# - 주어진 자연수 리스트로 갈라질 수 있는 (-, +) 갈래길을 모두 체크해봐야하는 상황
# - 결국 경우의 수의 끝에 가서 결과 값이 target 이랑 같은지 판단하는 것이기 때문에 DFS가 적합하다.
# - 난, 재귀를 통한 DFS 방식으로 풀었다.

# [Note]
# - 정답 answer 에 정답 카운팅을 올려야 할 때마 지역변수로 사용한 answer의 카운팅 값을 지속하기 위해서 파라미터로 넘기는 방식을 썼다.
# - 더욱, 재귀스럽게 구현할 수 있도록 노력하자.
