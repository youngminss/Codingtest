import heapq
import sys

def solution(N) :
    heap = []
    for _ in range(N) :
        x = int(sys.stdin.readline())
        if x == 0 :
            if heap :
                print(-heapq.heappop(heap))
            else :
                print(0)
        else :
            heapq.heappush(heap,-x)

if __name__ == '__main__' :
    N = int(sys.stdin.readline()) 
    solution(N)

# [문제] 최대 힙
# [테마] 힙(heap)
# [출처] https://www.acmicpc.net/problem/11279

# [해법]
# - 파이썬의 heapq 라이브러리를 사용했다.
# - 단, heapq 의 기본로직은 "최소 힙"을 보장하기 때문에 heap에 넣을 때 - 를 붙여 힙에 넣으면 더 큰 자연수일수록 root 노드에 위치하게 된다.
# - 힙에서 pop 할 때 다시 - 연산을 통해, 원래 자연수로 부호변환해서 출력한다.
