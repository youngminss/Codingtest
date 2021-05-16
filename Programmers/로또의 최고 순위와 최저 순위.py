def solution(lottos, win_nums):
    answer = []
    
    score = { 6 : 1, 5 : 2, 4 : 3, 3 : 4, 2 : 5, 1 : 6, 0 : 6 }
    
    win_nums.sort()
    lottos.sort()
    answer_count = 0

    for num in lottos:
        if num in win_nums :
            answer_count += 1
    
    answer.insert(0,score[answer_count])
    for num in lottos:
        if num == 0:
            answer_count += 1
    answer.insert(0, score[answer_count])

    return answer


if __name__ == '__main__':
    result = solution([45, 4, 35, 20, 3, 9],[20, 9, 3, 45, 4, 35])
    print(result)


# [44, 1, 0, 0, 31, 25],[31, 10, 45, 1, 6, 19]	[3, 5]
# [0, 0, 0, 0, 0, 0],[38, 19, 20, 40, 15, 25]	[1, 6]
# [45, 4, 35, 20, 3, 9],[20, 9, 3, 45, 4, 35]	[1, 1]


# [문제] 로또의 최고 순위와 최저 순위 / 프로그래머스(2021 Dev-Matching : 웹 백엔드 개발)
# [문제링크] https://programmers.co.kr/learn/courses/30/lessons/77484
# [카테고리] 구현
# [실행시간] O(n^2)

# [해법]
# - 민우의 복권번호에서, 정답복권번호와 일치하는 수를 찾아, 리스트 삽입
# - 민우의 복권번호에서, 0의 갯수를 이전 정답복권번호 카운팅에 누적한 값을 리스트 삽입

# [Note]
# - list.count() 와 set() 을 이용하면, 훨~~씬 간단한 코드구현이 가능함
