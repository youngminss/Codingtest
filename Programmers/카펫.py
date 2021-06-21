def solution(brown, yellow):
    for i in range(1,yellow + 1) :
        if yellow % i == 0 :
            if ((yellow // i) * 2) + (i * 2) + 4 == brown :
                return [yellow // i + 2, i + 2]

# [문제] 카펫
# [테마] 완전탐색
# [출처] https://programmers.co.kr/learn/courses/30/lessons/42842

# [해법]
# - 공식 같이 사용할 수 있는 게 존재함
#   + 직사각형의 가로가 세로보다 길거나 같다는 전제하에
#   안쪽 직사각형의 [가로,세로] 정보가 있다면
# - 가로 * 2 + 세로 * 2 + 4 == 가장 바깥족 테두리의 격자 개수가 된다.
# - 최종적인 전체 직사각형의 가로,세로 길이는 구한 [가로+2, 세로+2] 이다.
#   + 이건 생각해보면 당연한 것
