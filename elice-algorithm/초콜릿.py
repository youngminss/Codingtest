def solution(words):
    length = len(words)
    result = []
    for i in range(length-1):
        for j in range(0, length - i):
            result.append(words[j:(j+i+1)])
    result = list(set(result))
    return len(result)

if __name__ == '__main__':
    words = input()
    result = solution(words)
    print(result)


# [문자열] 초콜릿
# [실행시간] O(n^2)

# 직사각형 모양 초콜릿의 각 칸에 문자가 한 개씩 쓰여있습니다.
# 이때 초콜릿을 쪼개 조각을 만들 수 있습니다.
# 그리고 각 조각에 적혀있는 문자를 읽어 단어를 만들 수 있습니다.
# 예를 들어 초콜릿 쪼개 조각으로 만들면 
# ‘a’, ‘b’, ‘c’, ‘d’, ‘ab’, ‘bc’, ‘cd’, ‘abc’, ‘bcd’의 단어가 적힌 
# 서로 다른 9조각으로 만들 수 있습니다. 
# 여기서 만드는 단어는 중복을 허용하지 않습니다.

# 쪼개기 전 초콜릿에 적힌 문자로 만든 단어를 줬을 때 
# 초콜릿을 조각으로 쪼개고 읽은 서로 다른 단어의 개수를 출력하는 프로그램을 작성하세요.

# [입력]
# 첫 번째 줄에 쪼개기 전 초콜릿에 적힌 문자로 만든 단어를 입력합니다.
# 입력은 알파벳 소문자로만 입력하며 입력의 길이는 3 이상 100 이하의 자연수입니다.

# [출력]
# 초콜릿을 조각으로 쪼개고 읽은 서로 다른 단어의 개수를 출력합니다.

# [입력 예시]
# abcd
# [출력 예시]
# 9


# [문제출처] : 엘리스 AI 트랙