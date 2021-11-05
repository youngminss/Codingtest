def solution(a, b) :
    [print('*' * a) for _ in range(b)]

if __name__ == '__main__' :
    a, b = map(int, input().strip().split(' '))
    solution(a, b)

# 문제 : 직사각형 별찍기 (Level 1)
# 테마 : 구현
# 출처 : https://programmers.co.kr/learn/courses/30/lessons/12969/solution_groups?language=python3