def solution(maps,n):
    count = 1
    for _ in range(n):
        x,y,w,h = map(int,input().split())
        for i in range(w):
            for j in range(h):
                maps[x+i][y+j] = count
        count += 1
    
    count = 1
    for _ in range(n):
        result = 0
        for i in range(101):
            for j in range(101):
                if maps[i][j] == count:
                    result += 1
        count += 1
        print(result)


if __name__ == '__main__':
    n = int(input())
    maps = [[0]*101 for _ in range(101)]
    solution(maps,n)


# [구현] 데이터 덮어쓰기
# 실행시간 : O(n^2)

# [입력]
# 첫 번째 줄에는 저장 장치에 저장할 데이터의 개수를 나타내는 자연수 N을 입력합니다.
# (1 ≤ N ≤ 30)
# 다음 N개의 줄에는 N개의 데이터에 대한 데이터의 정보를 차례대로 입력합니다. 
# 한 개의 데이터 정보는 데이터의 가장 왼쪽 아래의 좌표를 나타내는 X 좌표, Y 좌표와 데이터의 가로 길이, 세로 길이를 한 줄에 입력합니다.
# 데이터가 저장되는 장치는 가로 최대 101칸, 세로 최대 101칸으로 구성된 격자 모양입니다. 
# 격자의 각 칸은 가로, 세로 길이가 1인 면적이 1인 정사각형입니다.
# 데이터가 장치 밖으로 나가게 되는 입력의 경우는 없습니다.
# [출력]
# 입력에서 주어진 순서에 따라 N개의 데이터가 저장 장치에 저장될 때, 장치에 저장된 각 데이터의 면적이 한 줄에 하나씩 하나의 정수로 출력합니다.
# 만약 데이터가 모두 손실된 경우는 정수 0을 출력합니다.

# [입력 예시]
# 2
# 0 0 10 10
# 2 2 6 6
# [출력 예시]
# 64
# 36