from itertools import permutations

# 오름차순 단어인지
def checkSequence(words,l):
    for i in range(l-1):
        if words[i] > words[i+1]:
            return False
    return True

# 서로 다른 L개의 알파벳 소문자로 이뤄졌는지
def eachOtherWord(words,l):
    checkedList = []
    for i in range(len(words)):
        if ('a' <= words[i] <= 'z') and (words[i] not in checkedList):
            checkedList.append(words[i])
    if len(checkedList) == l:
        return True
    return False

# 최소한 한 개의 모음, 두 개의 자음으로 구성되었는지
def consonantVowel(words):
    consonantCount, vowelCount = 0,0
    consonant = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z']
    vowel = ['a','e','i','o','u']
    
    for i in range(len(words)):
        if words[i] in consonant:
            consonantCount += 1
        if words[i] in vowel :
            vowelCount += 1
    if vowelCount >= 1 and consonantCount >= 2:
        return True
    return False

def solution(l,c,cules):
    result = []
    datas = list(permutations(cules,l))
    
    for data in datas:
        words = ''.join(data)
        if eachOtherWord(words,l) and checkSequence(words,l) and consonantVowel(words):
            result.append(words)
    return result

if __name__ == '__main__':
    l,c = map(int,input().split())
    cules = list(map(str,input().split()))
    cules.sort()
    results = solution(l,c,cules)
    [print(result) for result in results]


# [백트래킹] 오래된 게임 ID

# 혁진이는 어렸을 적에 즐기던 게임인 “물풍선 아케이드”가 생각나서 로그인해 보려고 합니다.
# 하지만 혁진이는 ID는 기억이 나는데 비밀번호가 기억이 나지 않았습니다.
# 곰곰이 생각해본 결과 비밀번호에 대한 단서는 다음과 같았습니다.
# 1. 서로 다른 L개의 알파벳 소문자로 이루어져 있습니다.
# 2. 최소한 한 개의 모음과 두 개의 자음으로 구성되어 있습니다.
# 3. 비밀번호를 이루는 알파벳들이 증가하는 순서로 배열되어 있습니다.

# 예시) abc => O, bac => X
# 어렸을 때 사용했던 수첩에서 비밀번호에 사용했던 C개의 알파벳을 알아냈다고 할 때,
# 비밀번호가 될 수 있는 경우를 모두 구하는 프로그램을 작성하세요.

# [입력]
# 첫째 줄에 두 정수 L, C를 입력합니다.
# (3 ≤ L ≤ C ≤ 10)
# 두 번째 줄에는 C개의 문자를 공백으로 구분하여 입력합니다. 주어지는 문자들은 알파벳 소문자이며, 중복되는 것은 없습니다.
# [출력]
# 각 줄에 하나씩, 사전수으로 가능성 있는 암호를 모두 출력합니다.

# [입력 예시]
# 4 6
# a t c i s w
# [출력 예시]
# acis
# acit
# aciw
# acst
# acsw
# actw
# aist
# aisw
# aitw
# astw
# cist
# cisw
# citw
# istw

# [문제출처] 엘리스 AI 트랙