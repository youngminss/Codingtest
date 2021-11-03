import sys
def max_lanline_length(n, lanlines) :
    lanlines.sort()
    
    min_lanline, max_lanline = 1, lanlines[len(lanlines) - 1]
    while min_lanline <= max_lanline :
        cutted_lanline = 0
        mid_lanline = (min_lanline + max_lanline) // 2

        for lanline in lanlines :
            cutted_lanline += lanline // mid_lanline
        
        if cutted_lanline >= n :
            min_lanline = mid_lanline + 1
        else :
            max_lanline = mid_lanline - 1
    
    print(max_lanline)
    

if __name__ == '__main__' :
    k, n = map(int, sys.stdin.readline().rstrip('\n').split())
    lanlines = []
    for _ in range(k) : 
        lanlines.append(int(sys.stdin.readline().rstrip('\n')))
    
    max_lanline_length(n, lanlines)

# 전형적인 이분탐색 알고리즘을 한번 정리하고 가면 좋을 것 같다.
# 종료하는 시점이 포인트라는 것 확인
# 이분탐색을 구현하는 것보단 문제를 읽고 이분탐색에 냄새를 맡는 시야를 키우는 게 중요

# 🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦

# 문제 : 랜선 자르기
# 테마 : 이분탐색
# 출처 : https://www.acmicpc.net/problem/1654