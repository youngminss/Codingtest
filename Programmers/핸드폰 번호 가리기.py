def solution(phone_number):
    return ('*' * (len(phone_number) - 4)) + phone_number[len(phone_number) - 4: ] 

# 문제 : 핸드폰 번호 가리기 (Level 1)
# 테마 : 문자열, 구현
# 출처 : https://programmers.co.kr/learn/courses/30/lessons/12948/solution_groups?language=python3