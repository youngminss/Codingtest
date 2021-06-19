def solution(numbers):
    numbers = [str(n) for n in numbers]
    numbers.sort(key=lambda x : x*3, reverse=True)
    return str(int(''.join(numbers)))

# [문제] 가장 큰수
# [테마] 정렬
# [출처] https://programmers.co.kr/learn/courses/30/lessons/42746?language=python3

# [해법]
# - 주어진, 숫자로 뭔가 조합을 만들려고하는 순간 망함
# - 주어진 리스트안에서 바로 정렬을 들어가는게 좋은 접근인데
# - 중요한 점은, "어떤 기준"으로 정렬할 것인가 ?
#   + 람다식의 x*3 의 의미가 중요
#   + 문제 조건에서, 최대 number는 1000 이하
#   + '3' 과 '300' 이있으면, '3003' 이큰가 ?, '3300' 이 큰가 ?
#   + 단순히 x 로 정렬하면, '300','3' 순으로 정렬이 되는데 이건 틀렸고
#   + 한 자리, 또는 두 자리의 경우 최대 세 자리로 만들어놓고, 문자열 비교를 하는 것
# - 좋은 문제..하지만 생각을 짧게하고 들어가는 순간 어려운 문제
