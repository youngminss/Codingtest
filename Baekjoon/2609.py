import sys

def print_gcf_lcm(a, b) :
    gcf, lcm = 0, 0
    for i in range(1, min([a,b]) + 1) :
        if a % i == 0 and b % i == 0 :
            gcf = i
    lcm = gcf * (a // gcf) * (b // gcf)
    
    print(gcf)
    print(lcm)

if __name__ == '__main__' :
    a, b = map(int,sys.stdin.readline().rstrip('\n').split())
    print_gcf_lcm(a, b)

# 문제 : 최대공약수와 최소공배수
# 테마 : 수학, 정수론, 유클리드 호제법
# 출처 : https://www.acmicpc.net/problem/2609