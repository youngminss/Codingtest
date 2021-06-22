def solution(n) :
    for _ in range(n) :
        words = input()
        words_list = words.split(' ')
        for word in words_list :
            print(word[::-1],end=' ')
        print()

if __name__ == '__main__' :
    n = int(input())
    solution(n)


# [문제] 단어 뒤집기
# [테마] 문자열
# [출처] https://www.acmicpc.net/problem/9093

# [Note]
# - 문자열 역으로 출력 방법
#   + string[::-1]
#   + ''.join(reversed(string))