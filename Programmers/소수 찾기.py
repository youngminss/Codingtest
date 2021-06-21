from itertools import permutations
from itertools import permutations
def get_chase() :
    prime = []
    n = 999999
    a = [False,False] + [True] * n
    
    for i in range(2,n+1) :
        if a[i] :
            prime.append([i,True])
            for j in range(2*i, n+1, i):
                a[j] = False
    return prime
    
def solution(numbers):
    answer = 0
    chase = get_chase()
    chase = dict(chase)
    numbers = [number for number in numbers]
    
    for i in range(len(numbers)) :
        p_numbers = list(permutations(numbers,i+1))
        p_numbers = [ int(''.join(p_number))  for p_number in p_numbers]
        
        for p_number in p_numbers :
            if (p_number in chase) and chase[p_number] == True :
                chase[p_number] = False
                answer += 1
    
    return answer

# 문제 : 소수찾기
# 분류 : 완전탐색(?)

# Note 
# - 포인트 : 문자열로 수어지는 numbers를 어떻게 해야, 가능한 모든 형태의 숫자들로 표현할 수 있을까 ?
# - 나의 해결책 
#   + 문자열 -> 각 자리수 리스트 -> 리스트로 만들 수 있는 순열(permutations)전부 구하기 
#     -> 순열 자리수 리스트를 문자열로 변환 -> 각 문자열 숫자를, 정수형 리스트로 변환
#     -> 중복제거(집합자료형) -> 최종 정수 리스트 변환
#   + 만들어진, 정수 리스트를, `에라토스테네스의 체`에 거르면서, 카운팅 후 결과 반환

# 링크 : https://programmers.co.kr/learn/courses/30/lessons/42839
    