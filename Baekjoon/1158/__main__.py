def solution(n,k) :
    circle = list(range(1,n+1))
    i = 0

    print('<',end='')
    
    while circle :
        i += k-1
        if i >= len(circle) :
            i %= len(circle)

        popData = circle.pop(i)
        if len(circle) == 0 :
            print(popData,end='')
        else :
            print(popData,end=', ')

    print('>')

if __name__ == '__main__' :
    n,k = map(int,input().split())
    solution(n,k)

# [문제] 요세푸스 문제 (1158)
# [테마] 구현
# [출처] https://www.acmicpc.net/problem/1158

# [해법]
# - "원순열" 을 구현하는 느낌이었다.
# - list.pop()을 하면, pop 원소 뒤에 부분이 앞으로 댕겨온다는 것을 인지하자.


