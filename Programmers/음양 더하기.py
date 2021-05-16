def solution(absolutes, signs):
    answer = 0

    for i in range(len(absolutes)):
        if signs[i] :
            answer += absolutes[i]
        else :
            answer -= absolutes[i]

    return answer


if __name__ == '__main__':
    result = solution([4,7,12],[True,False,True])
    print(result)

# [4,7,12],[true,false,true]
# [1,2,3],[false,false,true]

# [문제] 음양 더하기 / 프로그래머스 월간 코드 챌린지 시즌 2
# [문제링크] https://programmers.co.kr/learn/courses/30/lessons/76501
# [카테고리] 구현
# [실행시간] O(n)
