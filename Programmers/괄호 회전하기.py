def checkBracket(bracket):
    stack = []

    for i in range(len(bracket)):
        if bracket[i] == '(' or bracket[i] == '{' or bracket[i] == '[':
            stack.append(bracket[i])
        else:
            if len(stack) == 0:
                return False
            if bracket[i] == ')':
                if stack[-1] != '(' :
                    return False
            elif bracket[i] == '}':
                if stack[-1] != '{' :
                    return False
            else:
                if stack[-1] != '[' :
                    return False
            stack.pop()
  
    return True if len(stack) == 0 else False

def solution(s):
    answer = 0

    for i in range(len(s)):
        newBracket = s[i:] + s[:i]
        if checkBracket(newBracket):
            answer += 1

    return answer


if __name__ == '__main__':
    result = solution("[](){}")
    print(result)

# "[](){}"	3
# "}]()[{"	2
# "[)(]"	0
# "}}}"	0


# [문제] 괄호 회전하기 / 월간 코드 챌린지 시즌 2
# [문제링크] https://programmers.co.kr/learn/courses/30/lessons/76502
# [카테고리] 구현
# [실행시간] O(len(s)^2)

# [해법]
# - 괄호 문자열 s 의 길이만큼 반복함
# - 매 차례, i(0 ~ s의 길이)에 대해서, [i:] + [:i] 의 새로운 괄호문자열을 만들고, 맞는 괄호인지 체크 카운팅

