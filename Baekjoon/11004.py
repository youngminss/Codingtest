import sys

def find_k_in_array(array, k) :
    array.sort()
    print(array[k - 1])

if __name__ == '__main__' :
    num, k = list(map(int, sys.stdin.readline().rstrip('\n').split()))
    array = list(map(int, sys.stdin.readline().rstrip('\n').split()))
    find_k_in_array(array, k)

# 문제 : K번째 수
# 테마 : 정렬
# 출처 : https://www.acmicpc.net/problem/11004