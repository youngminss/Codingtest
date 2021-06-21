def solution(brown, yellow):
    for i in range(1,yellow + 1) :
        if yellow % i == 0 :
            if ((yellow // i) * 2) + (i * 2) + 4 == brown :
                return [yellow // i + 2, i + 2]

# [문제] 카펫
# [테마] 완전탐색
# [출처] https://programmers.co.kr/learn/courses/30/lessons/42842

# [해법]
# - 안쪽 노란 카펫의 조건이 가로길이가 세로길이가 길다는 전제조건하에
# - 안쪽 노란 카펫의 가로길이 * 2 + 세로길이 * 2 + 4 == 갈색카펫의 수가 일치하는 노란카펫의 [가로,세로] 정보를 찾아
# - 그 정보에 [가로길이 + 2, 세로길이 + 2] 를 하면 정답
# - +2 씩하는 것은, 우리는 안쪽 노란카펫의 가로,세로 정보를 얻는 것이므로 전체 직사각형의 가로세로 길이는 양쪽으로 두께가 2씩 커야한다.

