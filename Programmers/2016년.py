def solution(a, b):
    days_converter = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", 'THU']
    month_to_day = [0, 31, 29, 31, 30, 31,30, 31, 31, 30, 31, 30]

    total_day = 0
    for i in range(a) : total_day += month_to_day[i]
    total_day += b - 1

    return days_converter[total_day % 7]
    
solution(5,24)

# [Approach]
# 시작이 "금요일(FRI)" 부터 시작, 즉 0번째 인덱스부터 1주일을 담은 배열을 생성
# 핵심은 a월 b일 주어졌을 때, 이를 1월 1일 기준으로 "몇일"이 경과 되었냐를 구한다. ("윤년" 인 것과, 1월 1일의 "1일은 뺴주는 것" 유의)
# 구해진 총 일수 % 7 을 한 값을 인덱스로 가지는 요일을 출력한다.

# 🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦
# 문제 : 2016년 (Level 1)
# 테마 : 구현
# 출처 : https://programmers.co.kr/learn/courses/30/lessons/12901