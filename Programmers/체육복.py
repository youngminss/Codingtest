def solution(n, lost, reserve):
    lost.sort()
    reserve.sort(reverse=True)

    while len(lost) > 0 and len(reserve) > 0 :
        r = reserve.pop()
        if r in lost :
            lost.remove(r)
        else :
            for i in range(len(lost)) :
                if (not lost[i] in reserve) and lost[i] == r - 1 :
                    lost.remove(r - 1)
                    break
                elif (not lost[i] in reserve) and lost[i] == r + 1 :
                    lost.remove(r + 1)
                    break

    return n - len(lost)

# [문제] 체육복
# [테마] 그리디
# [출처] https://programmers.co.kr/learn/courses/30/lessons/42862

# [해법]
# - 여벌 체육복을 가진 친구가 체육복이 없는 친구에서 줄 수 있는 조건은 본인이 가지고 있는 체육복사이즈에 +1 이거나 -1 일 경우임
# - 그전에 체크할 것은, 나도 도난당한 사람 중에 속하는지와 ★ 내가 여분 체육복을 가지고 있는지 확인 할 것
# - 이유는 내가 여분 가지고 있으면 내 것을 써야, 뒤에 본인의 여분 체육복이 없는 사람이 다른 사람의 여분 체육복을 받을 자격이 있는지 제대로 체크할 수 있다.

# [추가 테스트]
# 5, [2,3,4], [1,2,3] => 4