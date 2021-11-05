import math

def solution(n):
    return (int(math.sqrt(n)) + 1) ** 2 if math.sqrt(n) == int(math.sqrt(n)) else -1     

# 문제 : 정수 제곱근 판별 (Level 1)
# 테마 : 구현, 수학
# 출처 : https://programmers.co.kr/learn/courses/30/lessons/12934