def solution(text) :
    answer = ""
    alpha_mapping = [chr(i) for i in range(65, 91)]
    for i in range(len(text)) :
        answer += alpha_mapping[ord(text[i]) - ord('A') - 3]
    return answer
        
if __name__ == '__main__' :
    text = input()
    result = solution(text)
    print(result)

# [문제] 카이사르 암호
# [테마] 구현
# [출처] https://www.acmicpc.net/problem/5598

# [Note]
# - print(-3 % 26)  # 23 (-3 => X)

