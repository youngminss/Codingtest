import sys

def analysis_string() :
    for _ in range(100) :
        lower, upper, digit, space = 0, 0, 0, 0
        input_string = sys.stdin.readline().rstrip('\n')

        if not input_string : break

        for value in input_string :
            if value.islower() : lower += 1
            if value.isupper() : upper += 1
            if value.isdigit() : digit += 1
            if value.isspace() : space += 1

        print(lower, upper, digit, space)

if __name__ == '__main__' :
    analysis_string()

# 문자열 함수
# 문자.isspace() : 문자가 공백 인지 체크 (boolean)
# 문자.isdigit() : 문자가 '1' ~ '9' 인지 체크 (boolean)
# 문자.islower() : 문자가 'a' ~ 'z' 인지 체크 (boolean)
# 문자.isspace() : 문자가 'A' ~ 'Z' 인지 체크 (boolean)

# 🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦

# 문제 : 문자열 분석
# 테마 : 문자열, 구현
# 출처 : https://www.acmicpc.net/problem/10820