from sys import stdin

def calculate_converter(E, S, M) :
    result = 1
    cur_E, cur_S, cur_M = 1, 1, 1
    while E != cur_E or S != cur_S or M != cur_M :
        cur_E = cur_E % 15 + 1
        cur_S = cur_S % 28 + 1
        cur_M = cur_M % 19 + 1
        result += 1

    print(result)

if __name__ == '__main__' :
    E, S, M = map(int, stdin.readline().split())
    calculate_converter(E, S, M)

# 문제 : 날짜 계산
# 테마 : 완전탐색(브루트포스)
# 출처 : https://www.acmicpc.net/problem/1476