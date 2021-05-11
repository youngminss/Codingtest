def solution(a, b):
    answer = 0
    for i in range(len(a)):
        answer += (a[i] * b[i])
    return answer

if __name__ == '__main__':
    result = solution([-1,3,2,-4],[2,2,6,7])
    print(result)

# [문제] 내적
# [문제링크] https://programmers.co.kr/learn/courses/30/lessons/70128
# [카테고리] 수학
# [실행시간] O(n)

