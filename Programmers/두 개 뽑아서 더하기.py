from itertools import combinations
def solution(numbers):
    answer = []

    c_list = list(combinations(numbers,2))

    for l in c_list:
        answer.append(sum(l))
    answer = list(set(answer))
    answer.sort()
    return answer


if __name__ == '__main__':
    result = solution([2,1,3,4,1])
    print(result)

# [2,1,3,4,1]	[2,3,4,5,6,7]
# [5,0,2,7]	[2,5,7,9,12]

# [문제] 두 개 뽑아서 더하기 / 프로그래머스( 월간 코드 챌린지 시즌1 )
# [문제링크] https://programmers.co.kr/learn/courses/30/lessons/68644
# [카테고리] 구현

# [해법]
# - numbers 배열에서, 2개를 뽑아 생성할 수 있는 조합(combination)을 전부 생성함
# - 생성한 세트의 합을 answer 리스트에 전부 담음
# - set -> list 형 변환을 통해서, 중복된 합의 정보를 제거함
# - 오름차순으로 정렬하고 정답 반환

