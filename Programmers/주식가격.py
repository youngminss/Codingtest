def solution(prices):
    answer = [0] * len(prices)

    for i in range(0,len(prices)-1) :
        for j in range(i+1, len(prices)) :
            answer[i] += 1
            if prices[i] > prices[j] :
                break
    
    return answer

# [문제] 주식가격
# [테마] 스택 / 큐
# [츌처] https://programmers.co.kr/learn/courses/30/lessons/42584?language=python3

# [해법]
# - 주어진 prices 배열에서, 내 뒤에 있는 주식가격과 비교하다가 본인보다 작은 주식이 나오면 그 다음 주식체크
# - 가장 단순한 방법인데 효율성이 떨어짐 = O(n^2)

