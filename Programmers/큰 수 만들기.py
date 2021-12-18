# n 이 커질수록, 실행시간 기하급수적으로 증가
# from itertools import combinations

# def solution(number, k):
#     number_list = list(number)
#     c_list = set(combinations(number_list, len(number_list) - k))
#     candidate_combination = [''.join(item) for item in c_list]
#     candidate_combination.sort()
#     # print(candidate_combination)
#     return candidate_combination[-1]

def solution(number, k) :
    collected = []

    for i, num, in enumerate(number) :
        # k개 만큼의 숫자를 빼냈을 때, i의 인덱스를 기억하기 위해서 i 사용
        while len(collected) > 0 and collected[-1] < num and k > 0 :
            # 맨 마지막 문자만 비교를 해도 된다. -> 지금까지 원칙을 지켜서 쌓아왔다면 지금까지 쌓인 숫자들은 내림차순을 지키고 있을 것이다.
            # collected의 마지막 원소는 한 문자로 이루어진 문자열이다. -> num 또한 한 글자짜리 문자열이다. -> 이걸 정수로 변환하지 않고 두개의 문자열에 대해서 대소관계를 이용해도 되는가 ?
            # 알파벳 순서도 아스키코드값에 따라 잘 대소구분이 된다.
            collected.pop()
            k -= 1
        if k == 0 :
            collected += list(number[i:])
            break
        collected.append(num)
    collected = collected[:-k] if k > 0 else collected
    # k가 0 이면 빈 리스트가 되기 때문에 if를 이용해서 조건을 걸어둔다.
    answer = ''.join(collected)
    return answer
    
print(solution("1924", 2))
print(solution("1231234", 3))
print(solution("4177252841", 4))
print(solution('111111', 2))
print(solution("12345678901234567890", 19))


# [Note]
# "가장 큰수" = 대표적인 Greedy(탐욕법) 문제
# 큰수 만들기 원칙
    # "앞 자리에 큰 수가 오는 것"이 전체를 크게 만든다.
    # 따라서, "큰 것을 우선해서 앞에서부터 골라 담고 싶다."
    # 앞에 작은 것들이 나오면 빼는데, 작은 것을 빼되, 앞에서 빼는게 이득이 된다.
# 큰수 만들기 방법
    # 앞 자리에서부터 하나씩 골라서 담되(push), 지금 담으려는 것보다 작은 것들은 도로 뺀다.(pop), 단 뺄 수 있을 경우만(!empty)
    # 항상 큰 수가 앞 자리에, 작은 수가 뒷 자리에 놓이도록 ( 제약조건 : 뺄 수 있는 수의 개수 )
# 주의할 점
    # k 개 만큼 아직, 버릴 수를 뽑지 못했는데, 과정이 끝났다 -> 남은 k개 만큼 뒤에서부터 잘라낸다.
# 설계
    # 주어진 숫자로 부터 하나씩 꺼내어 모으되
        # 이미 모아둔 것과 지금 등장한 것보다 작은 것들은 빼낸다.
        # 이것은 어디서 어떻게 살펴볼까 ? 
    # 이렇게 모은 숫자들을 자릿수 맞추어 반환한다.
        # 아직 뺄 개수 k를 다 채우지 못한 경우
        # 자리수는 어떻게 계산 하는가 ?
# 알고리즘 복잡도
    # 무지성으로, 가장 단순하게 모든 조합을 나열하고, 그 중 가장 큰 것 고르는 것 -> O(n^2)
    # 지금까지 작성한 알고리즘 -> O(n) = 자리수가 n일 때, 기껏해야 한 번 들어갔다 나왔다만 할 수 있어서, 최대 O(2*n) 가까울 수 있지만, 어찌 됬던, 선형시간
# 탐욕법이 성립되는 이유
    # 탐욕법이 통하는 문제이기 떄문이다.
    # 앞 단계에서의 선택(앞 자리에 큰수)이 -> 이후 선택단계에서의 동작에 의한 해(해결법)의 최적성에 영향을 주지 않기 때문

