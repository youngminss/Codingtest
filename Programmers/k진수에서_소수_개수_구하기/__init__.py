def solution(n, k):
    s = conv(n, k)

    cnt = 0
    for num in s.split("0"):
        if num == "":
            continue
        if is_prime(int(num)):
            cnt += 1
    return cnt


def conv(n, k):
    s = ""

    while n:
        s += str(n % k)
        n //= k

    return s[::-1]


def is_prime(n):
    if (not n) or (n <= 1):
        return False

    if n == 2:
        return True

    for i in range(2, int(n ** (1 / 2)) + 1):
        if n % i == 0:
            return False

    return True


solution(437674, 3)  # 3
solution(110011, 10)  # 2
solution(3, 3)  # 0
solution(19, 2)  # 1
