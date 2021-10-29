import sys

def print_gcf(a, b) :
    if a < b :
        a, b = b, a
    
    while b != 0 :
        a = a % b
        a, b = b, a 
    
    print('1' * a)

if __name__ == '__main__' :
    a, b = map(int, sys.stdin.readline().rstrip('\n').split())
    print_gcf(a, b)

# 유클리드 호제법
# a, b 가 있을 때 a와 b의 최대공약수 = a % b 와 b의 최대공약수다.
# 큰 수를 작은 수로 나누어 구한 나머지로 큰 수를 대체한다.
# 언제까지 ? 작은 수가 0(나누어 떨어질 때까지)
# 결과적으로, 나누는 수가 최대공약수
# 🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦

# 문제 : 최대공약수
# 테마 : 수학, 정수론, 유클리드 호제법
# 출처 : https://www.acmicpc.net/problem/1850