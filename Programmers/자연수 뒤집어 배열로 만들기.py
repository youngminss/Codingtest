def solution(n):
    return list(map(int, reversed(str(n))))

# [Note]
# reversed() = iterator object 를 반환한다. (Return a reverse iterator over the values of the given sequence.)
# 문자열을 각 자리 하나씩 분리한 리스트로 만들고 싶다면
    # string.split() = X
    # list(string) = O

# 🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦
# 문제 : 자연수 뒤집어 배열로 만들기 (Level 1)
# 테마 : 구현
# 출처 : https://programmers.co.kr/learn/courses/30/lessons/12932