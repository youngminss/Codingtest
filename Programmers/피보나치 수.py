def solution(n):
    fibo = [0, 1, 2] + ([0] * (n - 2))
    
    for i in range(3, n + 1) :
        fibo[i] = (fibo[i-1] + fibo[i-2]) % 1234567 
    
    return fibo[n-1]

# [Approach]
# 피보나치 수는 워낙 유명하기도 하고, 대표적으로 푸는 방법도 몇 개 있다.
# 현재 풀이는 피보나치의 성질을 활용한 DP로 구현한 방식(재귀로 구하는 것보다 성능이 좋다.)

# 🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦
# 문제 : 피보나치 수
# 테마 : 구현, 수학, DP, 재귀
# 출처 : https://programmers.co.kr/learn/courses/30/lessons/12945