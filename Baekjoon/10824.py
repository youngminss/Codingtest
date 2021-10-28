import sys

def attach_and_sum(a,b,c,d) :
    new_A = int(a + b)
    new_B = int(c + d)
    print(new_A + new_B)

if __name__ == '__main__' :
    a, b, c, d = sys.stdin.readline().split()
    attach_and_sum(a,b,c,d)

# 문제 : 네 수
# 테마 : 문자열, 구현
# 출처 : https://www.acmicpc.net/problem/10824