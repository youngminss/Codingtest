import sys

def sort_by_age(peoples) :
    peoples.sort(key=lambda people : [people[1], people[0]])
    [print(people[1],people[2]) for people in peoples]

if __name__ == '__main__' :
    num = int(sys.stdin.readline().rstrip('\n'))
    peoples = []
    for i in range(num) : 
        age, name = sys.stdin.readline().rstrip('\n').split()
        peoples.append([i, int(age), name])
    sort_by_age(peoples) 

# 문제 : 나이순 정렬
# 테마 : 정렬
# 출처 : https://www.acmicpc.net/problem/10814