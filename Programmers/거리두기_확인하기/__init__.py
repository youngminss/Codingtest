from math import floor


def solution(places):
    result = []

    for place in places:
        if cycle(place):
            result.append(1)
        else:
            result.append(0)

    return result


def cycle(place):
    for i in range(0, len(place)):
        for j in range(0, len(place)):
            if place[i][j] != "P":
                continue
            if not is_safe(place, i, j):
                return False
    return True


def is_safe(place, x1, y1):
    # 검사해야할 범위 (바깥부터 시계방향으로)
    dx = [0, -1, -2, -1, 0, 1, 2, 1, 0, -1, 0, 1]
    dy = [-2, -1, 0, 1, 2, 1, 0, -1, -1, 0, 1, 0]

    for i in range(0, len(dx)):
        [x2, y2] = [x1 + dx[i], y1 + dy[i]]
        if x2 < 0 or x2 > 4 or y2 < 0 or y2 > 4 or place[x2][y2] != "P":
            continue

        if calculate_manhattan_distance(x1, y1, x2, y2) <= 1:
            return False
        else:
            if x1 == x2 or y1 == y2:
                [mid_x, mid_y] = [floor((x1 + x2) / 2), floor((y1 + y2) / 2)]
                if place[mid_x][mid_y] != "X":
                    return False
            else:
                if x1 > x2 and y1 > y2:
                    if not (place[x1 - 1][y1] == "X" and place[x1][y1 - 1] == "X"):
                        return False
                elif x1 > x2 and y1 < y2:
                    if not (place[x1 - 1][y1] == "X" and place[x1][y1 + 1] == "X"):
                        return False
                elif x1 < x2 and y1 < y2:
                    if not (place[x1 + 1][y1] == "X" and place[x1][y1 + 1] == "X"):
                        return False
                elif x1 < x2 and y1 > y2:
                    if not (place[x1 + 1][y1] == "X" and place[x1][y1 - 1] == "X"):
                        return False
    return True


def calculate_manhattan_distance(x1, y1, x2, y2):
    return abs(x1 - x2) + abs(y1 - y2)


solution(
    [
        ["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"],
        ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"],
        ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"],
        ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"],
        ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"],
    ]
)
# [1, 0, 1, 1, 1]
