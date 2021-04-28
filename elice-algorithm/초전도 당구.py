def solution(w,h,p,q,t):
    d = 0
    # 오른쪽위, 왼쪽위, 왼쪽아래, 오른쪽아래
    dp = [1,-1,-1,1]
    dq = [1,1,-1,-1]

    for i in range(t):
        np = p + dp[d]
        nq = q + dq[d]
        # 이동했을 때, 부딪히지 않는 경우
        if 0< np < w and 0< nq < h: 
            p = np
            q = nq
        # 이동했을 때, 모서리에 닿은 경우
        elif 0<= np <= w and 0<= nq <= h :
            p = np
            q = nq
        # 이동했을 때, 어딘가 부딪힌 경우
        else :
            # 이동했을 때, 좌 or 우측 면에 부딪힌 경우
            if (np < 0 or np > w) and (0<= nq <= h):
                if d == 0: d = 1
                elif d == 3 : d = 2
                elif d == 2 : d = 3
                elif d == 1 : d = 0
                p = p + dp[d]
                q = q + dq[d]
            # 이동했을 때, 위 or 아래 면에 부딪힌 경우
            elif (0<= np <= w) and (nq < 0 or nq > h):
                if d == 0: d = 3
                elif d == 1 : d = 2
                elif d == 3 : d = 0
                elif d == 2 : d = 1
                p = p + dp[d]
                q = q + dq[d]
            # 이동했을 때, 모서리를 벗어난 경우
            elif (np < 0 or np > w) and (nq < 0 or nq > h):
                if d == 0: d = 2
                elif d == 2 : d = 0
                elif d == 3 : d = 1
                elif d == 1 : d = 3
                p = p + dp[d]
                q = q + dq[d] 
    return [p,q]

if __name__ == "__main__":
    w,h = map(int,input().split())
    p,q = map(int,input().split())
    t = int(input())
    result = solution(w,h,p,q,t)
    print(result[0],result[1])


# [구현] 초전도 당구
# https://kdt.elice.io/courses/7447/lectures/81388/materials/116

# [문제출처] 엘리스 AI 트랙