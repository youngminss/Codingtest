def solution(words):
    ja = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z']
    mo = ['a','e','i','o','u']
    flag = False
    for word in words:
        if word in mo:
            flag = True
            break
    if not flag :
        # print("모음 없음")
        return flag
    
    if len(words) >= 3:
        for i in range(len(words)-2):
            if (words[i] in mo) and (words[i+1] in mo) and (words[i+2] in mo) :
                flag = False
                break
            elif (words[i] in ja) and (words[i+1] in ja) and (words[i+2] in ja) :
                flag = False
                break
    if not flag:
        # print("3연속 자 or 모음 발생")
        return flag
    
    if len(words) >= 2:
        for i in range(len(words)-1):
            if words[i] == words[i+1] :
                if words[i] != 'e' and words[i] != 'o':
                    flag = False
                    break
    if not flag:
        # print("e 나 o가 아닌 연속문자 발생")
        return flag
    
    return flag

if __name__ == '__main__':
    words = input()
    result = solution(words)
    if result :
        print("<{0}> 는 좋습니다.".format(words))
    else:
        print("<{0}> 는 안 좋습니다.".format(words))



# [구현] 내 비밀번호는 비밀이 아니야
# [실행시간] - O(len(S))

# 도도새는 비밀번호를 자주 까먹습니다.
# 그래서 도도새는 발음이 가능한 패스워드를 만들어서 외우고 다닙니다.
# 엘리스 토끼는 도도새의 비밀번호를 다음과 같은 기준을 만족할 때 좋은 비밀번호라고 생각하고,
# 이를 기준으로 도도새의 비밀번호를 평가하려고 합니다.

# 모음(a, e, i, o, u) 하나를 반드시 포함하여야 한다.
# 모음이 3개 혹은 자음이 3개 연속으로 오면 안 된다.
# 같은 글자가 연속적으로 두 번 오면 안 되나, ee 와 oo는 허용한다.
# 도도새의 비밀번호가 좋은지, 좋지 않은지 평가하는 프로그램을 작성하세요.

# [입력]
# 테스트할 패스워드 S를 입력합니다.
# 패스워드는 한 글자 이상 20글자 이하의 소문자로만 문자열입니다.
# [출력]
# 엘리스 토끼의 기준에 맞는 비밀번호라면 “< S > 는 좋습니다.”를 출력을 합니다.
# 기준에 맞지 않다면 “< S > 는 안 좋습니다.”를 출력합니다.

# [입력 예시1]
# eep
# [출력 예시1]
# <eep> 는 좋습니다.
# [입력 예시2]
# bontres
# [출력 예시2]
# <bontres> 는 안 좋습니다.


# [문제출처] 엘리스 AI 트랙