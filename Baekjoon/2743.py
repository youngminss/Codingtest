import sys

if __name__ == '__main__' :
    input_string = sys.stdin.readline().rstrip('\n')
    print(len(input_string)) 

# 체크
# 파이썬 sys 로 입력 받을 경우, sys.stdin.readline() 까지만 할 경우 개행문자(\n)도 받음
# 따라서 8글자임에도 개행포함 9글자 나옴
# sys.stdin.readline().rstrip('\n') = 마지막 개행문자('\n') 을 생략한다.

# 🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦

# 문제 : 단어 길이 재기
# 테마 : 문자열, 구현
# 출처 : https://www.acmicpc.net/problem/2743