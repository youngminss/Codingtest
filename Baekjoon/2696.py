import sys
import heapq
from collections import deque

def solution(T) :
    for _ in range(T) :
        M = int(sys.stdin.readline())
        data = []
        for _ in range(M // 10) :
            data += list(map(int,sys.stdin.readline().split()))
        if M % 10 != 0 :
            data += list(map(int,sys.stdin.readline().split()))
   
        print(M // 2 + 1)
        max_heap = []
        min_heap = []
        count = 0
        for i in range(len(data)) :
            num = data[i]
            if len(max_heap) == len(min_heap) :
                if len(min_heap) == 0 :
                    heapq.heappush(max_heap,-data[i])
                else :
                    if min_heap[0] <= num :
                        min_top = heapq.heappop(min_heap)
                        heapq.heappush(min_heap,num)
                        num = min_top
                    heapq.heappush(max_heap, -num)
            else :
                if -max_heap[0] > num :
                    max_top = -heapq.heappop(max_heap)
                    heapq.heappush(max_heap,-num)
                    num = max_top
                heapq.heappush(min_heap,num)
       
            if i % 2 == 0 :
                print(-max_heap[0], end=' ')
                count += 1
                if count % 10 == 0 :
                    print()
        print()
                  
if __name__ == '__main__' :
    T = int(sys.stdin.readline())
    solution(T)

# [문제] 중앙값 구하기
# [테마] 힙(heap)
# [출처] https://www.acmicpc.net/problem/2696

# [해법]
# - 최대힙인 max_heap 과 최소힙인 min_heap 을 생성한다.
# - 매 차례, 최대힙과 최소힙의 길이를 비교하면서 두 힙의 길이가 같으면 최소힙의 루트값을 뽑아서 최대힙에 넣고 새로 들어온 원소값을 최소힙에 넣는다.
# - 최대힙과 최소힙의 길이는 같은데 최소힙이 비어있으면 바로 최대힙에 원소를 넣는다.
# - 두 힙의 길이가 같지 않다면 최대힙의 루트 값과 방금 들어온 원소값을 비교해서 최대힙의 루트값이 더 크면 최대힙의 루트값을 뽑아 최소힙에 넣고 방금 들어온 원소를 최대힙에 넣는다.
# - 이런 방식으로 하면 실행시간은 O(mlog(n)) 시간 내에 매 차례 중앙값을 찾아낼 수 있다.

# [Note]
# - 처음 풀었을 때는, 난 "시간초과" 로 틀렸다.
# - 이유는 입력받은 리스트를 매 차례 "정렬"을 통해 풀이를 했기 때문이다.
# - 위에 방식처럼 "정렬을 하지않아도" 최대힙과 최소힙만 있어도 이 문제를 풀 수 있는 이유를 생각해보자.
#   + 최대힙, 최소힙이 내부적으로 오름차순 or 내림차순으로 순서가 보장되어 있지 않다해도
#   + 이 문제에서 초점은 그 순간 "중앙값" 이기 때문에, 이 중앙값이 유지되는 "최대힙의 루트값"만 조회하면 된다.

