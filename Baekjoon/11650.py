import sys

def sort_coordinates_2d(coordinates_2d) :
    sorted_coordinates_2d = sorted(coordinates_2d, key=lambda coordinate : [coordinate[0], coordinate[1]])
    [print(coordinates[0], coordinates[1]) for coordinates in sorted_coordinates_2d]

if __name__ == '__main__' :
    num = int(sys.stdin.readline().rstrip('\n'))
    coordinates_2d = [list(map(int,sys.stdin.readline().split())) for _ in range(num)]
    sort_coordinates_2d(coordinates_2d)

# 🎯 파이썬 sort 또는 sorted 정렬 대상 2개 이상 적용할 경우
# ex) sorted(리스트, key=lambda 속성객체 : [속성1, 속성2 ,...], reverse=True 또는 False)
# 즉, key 에 정렬이 될 기준을 넣는다. key는 lambda 함수를 넣어서 간단하게 기준을 정해도 좋다.

# 🎯 from operator import itemgetter, attrgetter
# 파이썬 패키지 중에 operator = 편리하고 쉽고 빠르게 key-function 역할을 해주는 itemgetter, attrgetter 모듈이 존재
# itemgetter 는 인덱스로, attrgetter 는 키로 접근하고, 기능은 같다.
# https://docs.python.org/3/howto/sorting.html

# 🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦
 
# 문제 : 좌표 정렬하기
# 테마 : 정렬
# 출처 : https://www.acmicpc.net/problem/11650