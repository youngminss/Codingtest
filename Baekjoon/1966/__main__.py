from collections import deque


def exist_better(queue, data):
    for q in queue:
        if data[1] < q[1]:
            return True
    return False


def printer(queue, N, M):
    count = 1
    queue = deque(queue)
    while queue:
        popData = queue.popleft()
        if exist_better(queue, popData):
            queue.append(popData)
        else:
            if popData[0] == M:
                return count
            else:
                count += 1


def solution(T):
    for _ in range(T):
        N, M = map(int, input().split())
        queue = list(map(int, input().split()))
        queue = list(enumerate(queue))
        result = printer(queue, N, M)
        print(result)


if __name__ == "__main__":
    T = int(input())
    solution(T)

# [문제] 프린터 큐
# [테마] 큐 / 덱(deque)
# [출처] https://www.acmicpc.net/problem/1966

# [해법]
# - 일단, 매 차례 입력받는 printer에 들어갈 우선순위 큐에 "인덱스 번호"를 붙여준다.
# - printer에 들어간 우선순위 큐에 맨 앞 요소의 pop 해서 매 차례 남은 우선순위 큐의 요소들 중에 pop 된 요소보다 우선순위가 큰 것이 있는 지 체크
# - 없는데 거기다 M에 해당하는 "인덱스 번호"를 가진 요소이면 몇 번째 순서인지 count 변수 출력
# - 아니면 pop 만 해주고 count 변수 증감

# [Note]
# - 빠른 리스트 첫 요소 pop을 위해 덱(deque) 사용
