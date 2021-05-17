def solution(n):
    answer = []

    for i in range(n):
        answer.append([0]*(i+1))
    
    i,j = 0,0
    number = 2

    answer[0][0] = 1
    dx = [1,0,-1]
    dy = [0,1,-1]
    
    while number<=(n+1)*n//2 : # ★ 언제까지 할껀데
        while 0<= i+dx[0] < n and answer[i+dx[0]][j+dy[0]] == 0:
            i,j = i+dx[0], j+dy[0]
            answer[i][j] = number
            number += 1
        while 0<= j+dy[1] < n and answer[i+dx[1]][j+dy[1]] == 0:
            i,j = i+dx[1], j+dy[1]
            answer[i][j] = number
            number += 1
        while 0<= i+dx[2] < n and 0<= j+dy[2] < n and answer[i+dx[2]][j+dy[2]] == 0:
            i,j = i+dx[2], j+dy[2]
            answer[i][j] = number
            number += 1
       

    answer = sum(answer, [])    # ★ 2차원 리스트 펴기
    return answer


if __name__ == '__main__':
    result = solution(3)  
    print(result)


# 4	[1,2,9,3,10,8,4,5,6,7]
# 5	[1,2,12,3,13,11,4,14,15,10,5,6,7,8,9]
# 6	[1,2,15,3,16,14,4,17,21,13,5,18,19,20,12,6,7,8,9,10,11]


# [문제] 삼각 달팽이 / 프로그래머스 ( 월간 코드 챌린지 1 )
# [문제링크] https://programmers.co.kr/learn/courses/30/lessons/68645
# [카테고리] 구현

# [해법]
# - 그림은 피라미드로 보여줬지만, 실제로는 계단형 2차워 리스트라고 생각함
# - 그 계단형 2차원 리스트에 수를 채워 넣는데, 반시계 방향(아래, 오른쪽, 왼쪽위 대각선)으로 이동함
# - 이동하기전에, 다음 위치에 가도되는 인덱스위치이고, 아직 업데이트 안된(0) 곳이면, 그 방향으로 이동
# - 언제까지? = n에 대해서, (n+1) * n / 2 번까지 수가 채워질때 까지 !

# [Note]
# - 몇 번 반복할 껀지, 전체 while문 조건이 포인트임
# - numpy를 사용하지 않고, 2차원 리스트를 1차원 리스트로 펴는 방법 중, sum(2차원리스트, [])를 알게 되었다.
# - [관련링크] https://programmers.co.kr/learn/courses/4008/lessons/12738
