def solution(queue1, queue2):
    queue = queue1 + queue2
    sumTarget = sum(queue) // 2

    [i, j] = [0, len(queue1) - 1]
    sumQueue1 = sum(queue1)
    result = 0

    while i < len(queue) and j < len(queue):
        if sumQueue1 == sumTarget:
            return result

        if sumQueue1 < sumTarget and j < len(queue) - 1:
            j = j + 1
            sumQueue1 = sumQueue1 + queue[j]
        else:
            sumQueue1 = sumQueue1 - queue[i]
            i = i + 1

        result = result + 1

    return -1
