import sys

def cut_trees(n, m, trees) :
    answer = 0
    trees.sort()

    if m == 0 :
        return trees[len(trees) - 1]

    min_height, max_height = 0, trees[len(trees) - 1]
    while int(min_height) != int(max_height) :
        sum_cutting_trees = 0
        cutting_height = int((min_height + max_height) / 2)
        
        for tree in trees :
            if tree - cutting_height >= 0 :
                sum_cutting_trees += tree - cutting_height
            if sum_cutting_trees >= m :
                break
        
        if sum_cutting_trees >= m and cutting_height > answer :
            min_height = cutting_height
            answer = cutting_height
        else :
            max_height = cutting_height
                
    print(answer)
    
if __name__ == '__main__' :
    n, m = map(int, sys.stdin.readline().rstrip('\n').split())
    trees = list(map(int, sys.stdin.readline().rstrip('\n').split()))
    cut_trees(n, m, trees)

# 목표는, 최대로 높은 기준에서 자를 수 있는 나무의 길이
# 대부분의 풀이가 발상은 비슷해보임, 이분탐색
# 최소, 최대 나무 높이를 가지고 매 차례 평균 나무 높이를 구해, 그 기준으로 자른 나무의 길이의 합으로 다음 턴을 설정
# 잘린 나무길이 합이 목표치 나무길이보다 크다면 -> 평균 컷팅 높이를 높이기 위해 최소 높이를 평균 높이로 설정
# 반대인 경우는, 최대 나무의 높이를 -> 평균 나무 높이로 설정

# 🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦

# 문제 : 나무 자르기
# 테마 : 이분탐색
# 출처 : https://www.acmicpc.net/problem/2805
