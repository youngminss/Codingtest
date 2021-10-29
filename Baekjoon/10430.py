import sys

def print_same_mod_result(a, b, c) :
    print((a + b) % c)
    print(((a % c) + (b % c)) % c)
    print((a * b) % c)
    print(((a % c) * (b % c)) % c)

if __name__ == '__main__' :
    a, b, c = list(map(int,sys.stdin.readline().rstrip('\n').split()))
    print_same_mod_result(a, b, c)

# 문제 : 나머지
# 테마 : 수학, 구현, 사칙연산