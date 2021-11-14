def is_common_divisor(arr, i) :
    for num in arr :
        if i % num != 0 :
            return False
    return True

def solution(arr):
    i = 1
    while not is_common_divisor(arr, i) :
        i += 1
    print(i)

# [Approach]
# 혹시 될까 ? 하고 제출했는데 맞긴했다..
# 근데 이건, 배열의 크기와, 각 원소의 값이 커질수록 좋지 못한 알고리즘

# [Note]
# gcd(최대공약수)는 "유클리드 호제법"을 사용해서 수학적으로 더 빠르게 구하기
# lcm = 두 수의 곱 // gcd 

# 🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦 
# 문제 : N개의 최소 공배수 (Level 2)
# 테마 : 구현, 수학
# 출처 : https://programmers.co.kr/learn/courses/30/lessons/12953