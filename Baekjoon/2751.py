import sys

def sort_array(array) :
    array.sort()
    [print(array_data) for array_data in array]

if __name__ == '__main__' :
    num = int(sys.stdin.readline().rstrip('\n'))
    array = []
    for _ in range(num) : array.append(int(sys.stdin.readline().rstrip('\n')))
    sort_array(array)

# 문제 : 수 정렬하기 2
# 테마 : 정렬
# 출처 : https://www.acmicpc.net/problem/2751
