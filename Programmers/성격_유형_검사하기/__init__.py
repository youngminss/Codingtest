def solution(survey, choices):
    MBTI = {}
    types = ["RT", "CF", "JM", "AN"]

    for type in types:
        for char in list(type):
            MBTI[char] = 0

    for i, choice in enumerate(choices):
        [disagree, agree] = survey[i]

        MBTI[agree if choice > 4 else disagree] += abs(choice - 4)
    
    return "".join(list(map(lambda type: type[1] if MBTI[type[1]] > MBTI[type[0]] else type[0] ,types)))

# 입력부
# solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5])   # "TCMA"
# solution(["TR", "RT", "TR"], [7, 1, 3]);    # "RCJA"

# [NOTE]
# 1. enumerate()
# + 기본적으로 "인덱스" 와 "원소" 순으로 이뤄진 튜플(tuple) 을 만들어줌
# + 인덱스와 원소를 각각 사용하기 위해서는 인자 풀기(unpacking)을 해줘야함
# + 참고: https://www.daleseo.com/python-enumerate/

# 2. list(공백없는 문자열) -> 문자열 하나씩 자른 배열 반환
# + 참고: https://codechacha.com/ko/python-convert-string-to-char-list/

# 3. 파이썬 딕셔너리는 존재하지 않는 키에 접근시 KeyError 를 발생시킴
# + 사전에 필요한 딕셔너리 "my_dict.key = value" 형태로 초기화를 시키면 error 를 피할 수 있음
# + 참고: https://korbillgates.tistory.com/95

# 4. 파이썬 map 에 callback 함수 사용하는 법(with. Lambda Function) + 파이썬 map 을 활용하는 법
# + 참고: https://zetcode.com/python/lambda/

# 5. 파이썬 문자열 배열 데이터 join 으로 하나의 문자열 만들기
# + seperator.join(array)
# + 참고: https://blockdmask.tistory.com/468

# 6. 파이썬 삼항 연산자 사용법
# + [on_true] if [expression] else [on_false]
# + 참고: https://codechacha.com/ko/python-ternary-operation/



