def solution(s):
    result = s[1:]
    if s[0] == '+' : return int(result)
    elif s[0] == '-' : return -int(result)
    else :  return int(s)

# 문제 : 문자열을 정수로 바꾸기 (Level 1)
# 테마 : 구현
# 출처 : https://programmers.co.kr/learn/courses/30/lessons/12925