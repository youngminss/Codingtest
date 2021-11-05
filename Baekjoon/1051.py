from sys import stdin

def solution(n, m, squares) :
    max_scale = 1

    for i in range(n) :
        for j in range(m) :
            distance = 1
            while i + distance < n and j + distance < m :
                lt, rt, rb, lb = map(int, [squares[i][j], squares[i][j + distance], squares[i + distance][j + distance], squares[i + distance][j]])
                if lt == rt == rb == lb : 
                    max_scale = max([max_scale, (distance + 1) * (distance + 1)])
                distance += 1    
    
    print(max_scale)


if __name__ == "__main__" :
    n, m = map(int, stdin.readline().rstrip('\n').split())
    squares = [stdin.readline().rstrip('\n') for _ in range(n)]
    solution(n, m, squares)

# [Approach]
# 2차원 판에서, 한 지점(i,j)를 기준으로 정사각형 단위로 범위가 증가될 것이다.
# n * m 만큼 반복을 돌리면서 [왼쪽위(lt), 오른쪽위(rt), 오른쪽아래(rb), 왼쪽아래(lb)] 대해 모두 같은 수를 가지고 있는지 확인한다.
# 왼쪽 위부터 범위를 증가시키면서 "오른쪽 아래" 방향으로 범위를 늘려가면서 "모든 경우의 수"를 체크할 것이기 때문에
# 매 차례 distance threshold 를 i,j 에 각각 더한 것이 범위안에 잘 들어오는지 확인하고 맞을 경우 체크를 한다.
# 범위 안에 들어오고, 심지어 [lt, rt, rb, lb] 모든 수가 동일할 경우, 그 시점의 distance 를 한 변으로하는 정사각형의 넓이와 최근 최대 정사각형의 넓이 중, 최대 값으로 업데이트한다.  

# 🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦
# 문제 : 숫자 정사각형
# 테마 : 구현, 브루투포스
# 출처 : https://www.acmicpc.net/problem/1051