def module5() :
    return ['a']

def module7(answer) :
    while len(answer) < 3 :
        answer.append(answer[-1])
    return answer
    
def solution(new_id):
    answer = ''
    # 1단계
    new_id = new_id.lower()
    new_id = list(new_id)
    # 2단계
    for text in new_id :
        if 'a'<= text <= 'z' or '0' <= text <= '9' or text == '-' or text == '_' or text == '.' :
            answer += text
    
    # 3단계
    if len(answer) == 0 :
        answer = module5()
        answer = module7(answer)
        return ''.join(answer)
    else :
        answer = list(answer)
        if len(answer) > 1 :
            i = 0
            while i < len(answer)-1 :
                if answer[i] == '.' and answer[i+1] == '.' : answer.pop(i)
                else : i += 1

    # 4단계
    if len(answer) > 0 and answer[0] == '.' : answer.pop(0) 
    if len(answer) > 0 and answer[-1] == '.' : answer.pop(-1)
    
    # 5단계
    if len(answer) == 0 : answer = module5()
    
    # 6단계
    if len(answer) >= 16 :
        answer = answer[:15]
        if answer[-1] == '.' :
            answer.pop()
    
    # 7단계
    if len(answer) <= 2 :
        answer = module7(answer)   
    
    return ''.join(answer)

# [문제] 신규 아이디 추천
# [테마] 구현(문자열)
# [출처] https://programmers.co.kr/learn/courses/30/lessons/72410

# [해법]
# - 문제에 주어진 step에 따라 id 검사를 하면 된다.
# - 단 2 단계 이후, id 문자열이 제거되는 구간 이후에는 id 문자열이 아직 살아있는지 체크하는 과정이 필요
# - id 문자열의 길이가 0 일 경우, step에 순서에 상관없이 바로 5,7 단계 이후 반환할 것

# [Note]
# - 문제를 풀고 느낀 것은 이 문제는 "정규표현식" 을 적용하면 훨씬 간편할 것 같긴 했다.
# - 파이썬에는 import re 가 있으니, 참고하자.
