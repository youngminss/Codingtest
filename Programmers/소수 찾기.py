from itertools import permutations

def chase():
    n= 999999
    a = [False,False] + [True]*(n-1)
    primes=[]

    for i in range(2,n+1):
        if a[i]:
            primes.append(i)
            for j in range(2*i, n+1, i):
                a[j] = False
    return primes

def solution(numbers):
    
    primes = chase()    # 에라토테네스의 채
    str_len = len(numbers)
    numbers = list(numbers)
    
    Int_Numbers = []
    for i in range(1,str_len+1):    # 순열 다 구함
        Int_Numbers += list(permutations(numbers,i))

    for i in range(len(temp)):      # 구한 각 자리수 리스트 -> 문자열리스트로 변환 -> 정수 리스트로 변환
        Int_Numbers[i] = int(''.join(Int_Numbers[i]))

    Int_Numbers = list(set(Int_Numbers))    # 중복 정수 제거하기 위해 집합자료형 -> 다시 리스트 자료형

    count = 0
    for number in Int_Numbers:
        if number in primes:
            count += 1
    
    return count

if __name__ == "__main__":
    number = input()
    print(solution(number))

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
    