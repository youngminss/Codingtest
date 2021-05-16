def solution(rows, columns, queries):
    answer = []

    # rows * columns 순차배열 생성
    arr = []
    for i in range(rows):
        arr.append([(j+1) for j in range((i*columns),(i+1)*columns)])

    for querie in queries:
        # queries 정보, (x1,y1) (x2,y2) 순
        sx,sy, fx,fy = querie[0], querie[1], querie[2], querie[3]
        
        temp = arr[sx-1][sy-1]  # 매 차례 (x1,y1) 정보 임시저장 => 마지막에 덧붙임
        traverse_arr = [temp]   # 반시계 방향으로 돌면서 정보 저장할 배열

        # 반시계 반향으로 순회
        # 왼쪽 벽면
        for i in range(sx,fx):
            traverse_arr.append(arr[i][sy-1])
            arr[i-1][sy-1] = arr[i][sy-1]
        # 아래 벽면
        for i in range(sy,fy):
            traverse_arr.append(arr[fx-1][i])
            arr[fx-1][i-1] = arr[fx-1][i]
        # 오른쪽 벽면
        for i in range(fx-2,sx-2,-1):
            traverse_arr.append(arr[i][fy-1])
            arr[i+1][fy-1] = arr[i][fy-1]
        # 윗 벽면
        for i in range(fy-2,sy-2,-1):
            traverse_arr.append(arr[sx-1][i])
            arr[sx-1][i+1] = arr[sx-1][i]
        
        arr[sx-1][sy] = temp    # 윗변 기준, 첫 (x1,y1)은 임시저장 값으로 덧붙어야 함
        answer.append(min(traverse_arr))    # 순회하면서 만난 정보들 중 최소값, 정답 리스트에 삽입
        traverse_arr.clear()    # 순회정보리스트 초기화

    return answer



if __name__ == '__main__':
    result = solution(100,97,[[1,1,100,97]])
    print(result)


# 6,6,[[2,2,5,4],[3,3,6,6],[5,1,6,3]]	            [8, 10, 25]
# 3,3,[[1,1,2,2],[1,2,2,3],[2,1,3,2],[2,2,3,3]]	    [1, 1, 5, 3]
# 100,97,[[1,1,100,97]]	                            [1]


# [문제] 행렬 테두리 회전하기 / 프로그래머스 (2021 Dev-Matching 웹 백엔드)
# [문제링크] https://programmers.co.kr/learn/courses/30/lessons/77485
# [카테고리] 구현

# [해법]
# - 매 차례, query에 있는 사각형 정보를 받음
# - 시게반향대로 문제에서는 순회한다고 했지만, 반대로 반시계 반향으로 순회함 (생각해보니깐 시계방향으로 해도 됐을 듯)
# - 매 차례, 사각형 테두리의 정보를 담은, 리스트가 존재하고, 순회완료하면, 거기서 최소값, 정답리스트에 추가

# [Note]
# - 문제에서 좌표정보랑, 실제 좌표 인덱스를 매칭하는게 번거로웠다.
