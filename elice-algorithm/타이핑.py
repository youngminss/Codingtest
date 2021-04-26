import sys
def solution(words):
    alpha = [0] * 26
    result = []

    for word in words:
        if 'a' <= word <= 'z':
            alpha[ord(word) - ord('a')] += 1

    maxIdx = alpha.index(max(alpha))
    result.append(chr(ord('a') + maxIdx))

    for i in range(len(alpha)):
        if i != maxIdx and alpha[maxIdx] == alpha[i]:
            result.append(chr(ord('a') + i))
    
    result = sorted(result)
    return result

if __name__ == '__main__':
    words = sys.stdin.read()
    result = solution(words)
    print(''.join(result))

# [문자열] 타이핑
# [실행시간] O(len(words))

# 엘리스 토끼는 타이핑 과제를 하고 있습니다.
# 엘리스 토끼는 문득 궁금증이 생겼습니다. 
# 궁금증은 타이핑 과제를 하면서 가장 많이 눌리는 알파벳 자판이 무엇일까 하는 것입니다.
# 엘리스 토끼가 타이핑하는 과제를 줬을 때 가장 많이 눌리는 알파벳 자판을 출력하는 프로그램을 작성하세요.

# [입력]
# 첫 번째 줄에 엘리스 토끼의 과제를 입력합니다.
# 과제는 공백, 알파벳 소문자, 줄 바꿈으로 이루어져 있으며 400자를 넘지 않습니다.
# ※과제에는 1개 이상의 소문자 알파벳이 포함됩니다.

# [출력]
# 첫 번째 줄에 가장 많이 눌리는 알파벳 자판을 출력합니다.
# ※가장 많이 눌리는 알파벳의 개수가 여러 개인 경우 사전 순으로 공백없이 출력합니다.

# [입력 예시]
# ellice
# [출력 예시]
# el