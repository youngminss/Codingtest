def solution() :
    n = set(range(1,10001))
    dn = set()

    for i in range(1,10001) :
        for j in str(i) :
            i += int(j)
        dn.add(i)
    
    self_numbers = sorted(n - dn)
    for number in self_numbers :
        print(number)
    
if __name__ == '__main__' :
    solution()

# [문제] 셀프 넘버
# [테마] 구현
# [출처] https://www.acmicpc.net/problem/4673

# [해법]
# - 1~10000 까지 수 에서
# - 생성자에 의해 만들어지는 수의 집합을 구한다.
# - 전체 1~10000 집합에서 - 생성자에 의해 만들어지는 수 집합을 구한다.
