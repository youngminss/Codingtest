import sys

def sort_student(students) :
    students.sort(key=lambda student : [-student[1], student[2], -student[3], student[0]])
    [print(student[0]) for student in students]

if __name__ == '__main__' :
    num = int(sys.stdin.readline().rstrip('\n'))
    
    students = []
    for _ in range(num) :
        name, kor, eng, math = list(sys.stdin.readline().rstrip('\n').split())
        students.append([name, int(kor), int(eng), int(math)])
    sort_student(students)

# 파이썬 sort OR sorted 시 정렬기준 설정 시 여러 개를 나열해서 기준을 설정해도 된다.
# 어떤 것은 오름차순, 어떤 것은 내림차순을 기준으로 각각 다른 기준을 세울 경우, 나름의 융통성을 발휘할 것

# 🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦

# 문제 : 국영수
# 테마 : 정렬
# 출처 : https://www.acmicpc.net/problem/10825