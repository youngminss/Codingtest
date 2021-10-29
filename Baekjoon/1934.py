import sys

def calc_lcm(a, b) :
    gcf = 1
    for i in range(2 , min([a, b]) + 1) :
        if a % i == 0 and b % i == 0 :
            gcf = i

    return gcf * (a // gcf) * (b // gcf)

def print_lcm(num) :
    for _ in range(num) :
        a, b = map(int,sys.stdin.readline().rstrip('\n').split())
        print(calc_lcm(a, b))

if __name__ == '__main__' :
    num = int(sys.stdin.readline().rstrip('\n'))
    print_lcm(num)

# 문제 : 최소공배수
# 테마 : 수학, 정수론, 유클리드 호제법
# 출처 : https://www.acmicpc.net/problem/1934