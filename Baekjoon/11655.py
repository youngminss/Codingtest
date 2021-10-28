import sys

def print_ROT13(input_string) :
    result = ''
    for each in input_string :
        if 'A' <= each <= 'Z' :
            if ord(each) + 13 > ord('Z') :
                result += chr((ord('A') - 1) + ((ord(each) + 13) % ord('Z')))
            else :
                result += chr(ord(each) + 13)
        elif 'a' <= each <= 'z' :
            if ord(each) + 13 > ord('z') :
                result += chr((ord('a') - 1) + ((ord(each) + 13) % ord('z')))
            else :
                result += chr(ord(each) + 13)
        else :
            result += each
    print(result)
if __name__ == '__main__' :
    input_string = sys.stdin.readline()
    print_ROT13(input_string) 

# 문제 : ROT13
# 테마 : 문자열, 구현
# 출처 : https://www.acmicpc.net/problem/11655