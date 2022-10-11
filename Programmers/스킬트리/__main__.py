def solution(skill, skill_trees):
    answer = 0

    skill_dict = {}
    for i in range(len(skill)):
        skill_dict[skill[i]] = (i+1)
    
    for i in range(len(skill_trees)):
        flag = True
        maxValue = 0
        for j in range(len(skill_trees[i])):
            if skill_trees[i][j] in skill_dict:
                if maxValue+1 == skill_dict[skill_trees[i][j]] :
                    maxValue = skill_dict[skill_trees[i][j]]
                else :
                    flag = False
                    break
        if flag :
            answer += 1

    return answer


if __name__ == '__main__':
    result = solution("CBD",["BACDE", "CBADF", "AECB", "BDA"])
    print(result)
    

# [문제] 스킬트리 / 프로그래머스 Summer/Winter Coding (2018)
# [문제링크] https://programmers.co.kr/learn/courses/30/lessons/49993
# [카테고리] 구현
# [실행시간] O(n^2)

# [해법]
# - 문자열로 들어온, skill순서 문자열을, 순서대로 1~len(skill) 만큼의 value를 가지는 딕셔너리로 만듬
# - 주어진 스킬트리, 리스트 종목 하나씩 순회하면서, 각 스킬트리 순서 중, 딕셔너리에 있는 스킬의 경우만 테스트한다.
# - maxValue 라는 변수를 통해, 한 스킬트리에 대해, 시작부터 끝까지, 이전 선행스킬이 어디까지 였는지 체크를 한다.
# - maxValue의 초기값은 0 이다. (skill 순서 딕셔너리의 맨 처음 값은 1 로 시작한다.)
# - 그래서, maxValue 와 찾은, 스킬의, 스킬트리 딕셔너리에 있는 value 값이 1 차이가 나면, maxValue 업데이트하고, 이상없음을 체크한다.
# - 여기서 maxValue + 1 과 같아야 하는 이유는, 보기에 마지막 케이스와 같은, 맨 처음, 발견된 스킬이, 스킬트리 딕셔너리의 처음 스킬이 아닐수도 있기 때문이다.
# - 예로, skill = "CBD" 인데, 체크하는 스킬트리 문자열이 "BDA"로 'B' 부터 시작이면
# - 처음 선행스킬인, 'C'가 없이, 바로 'B' 가 와서, 틀린 스킬트리로 처리해야 함
