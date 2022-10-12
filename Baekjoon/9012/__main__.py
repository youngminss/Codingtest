
def check_VPS() :
    parenthesis_string = input()
    stack = []

    for i in range(len(parenthesis_string)) :
        if parenthesis_string[i] == '(' :
            stack.append(parenthesis_string[i])
        if parenthesis_string[i] == ')' :
            if len(stack) != 0 :
                stack.pop()
            else : 
                return 'NO'
    if len(stack) != 0 :
        return 'NO'
    return 'YES'

if __name__ == '__main__' :
    num = int(input())
    for _ in range(num) : print(check_VPS())
    
# [문제] 괄호
# [테마] 스택 / 구현
# [출처] https://www.acmicpc.net/problem/9012

# [해법]
# - VPS(올바른 괄호쌍)이 성립하지 않는 조건만 처리해준다.
#   + 1. 여는 괄호('(')가 이전에 없는데 닫는괄호(')')가 등장한 경우
#   + 2. 주어진 괄호를 끝까지 탐색했는데, 아직 여는괄호가 남은 경우
# - 위에 두 조건을 끝내 통과하면 VPS가 맞음

# [Note]
# - 스택 자료구조를 쓰지 않고 여는 괄호의 이전까지의 누적 개수인 변수하나로 처리하면 메모리를 절약할 수 있다.
