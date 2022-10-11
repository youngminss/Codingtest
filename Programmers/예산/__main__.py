def solution(d, budget):
    answer = 0
    length = len(d)
    sum_budget = 0

    d.sort()
    for i in range(length):
        if sum_budget + d[i] <= budget:
            sum_budget += d[i]
            answer += 1
        else:
            break

    return answer

if __name__ == '__main__':
    result = solution([2,2,3,3],10)
    print(result)

# [1,3,2,5,4],9	3
# [2,2,3,3],10	4

# [문제] 예산 / 프로그래머스 Summer/Winter Coding (2018)
# [문제링크] https://programmers.co.kr/learn/courses/30/lessons/12982
# [카테고리] 그리디 or 구현
# [실행시간] O(len(d))

# [해법]
# - 나눌수 없는 배낭문제인가 했는데, 그 정도문제도 아니었음
# - 주어진 예산(budget)에 대해, 주어진 신청리스트(d)를 먼저 예산에따른 오름차순 정렬함
# - 최저가 기준으로 하나씩, sum_budget 이라는 곳에 누적하면서 기준 budget보다 같거나 작을때 까지만 누적해주는게 최선의 많이 담을 수 있는 것이라 생각했음
# - 그 이후가 되면, 그냥 반복문 탈출

