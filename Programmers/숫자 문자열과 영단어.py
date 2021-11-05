def solution(s):
    result = ""
    str_number_to_natural_number_converter = { 'ze': ['0', 4], 'on': ['1', 3], 'tw': ['2', 3], 'th': ['3', 5], 'fo': ['4', 4], 'fi': ['5', 4], 'si': ['6', 3], 'se': ['7', 5], 'ei': ['8', 5], 'ni': ['9', 4] }

    idx = 0
    while idx < len(s) :
        if '0' <= s[idx] <= '9' :
            result += s[idx]
            idx += 1
        else :
            keyword = s[idx] + s[idx + 1]
            result += str_number_to_natural_number_converter[keyword][0]
            idx += str_number_to_natural_number_converter[keyword][1]
    
    print(result)

solution("123")

# [Approach]
# 문자로 만들어진 숫자들에 대해, 변환기를 만든다. 각 숫자에 대해 [변환되는 실제 숫자, 그 영어로된 문자의 길이]
# 인덱스를 처음부터 시작해서 전진하면서, 매 차례 현재 s문자열 내에 idx에 해당하는 값이 0 ~ 9 에 속하는 숫자면 그대로 정답문자열에 더하고 idx 증감
# 뭔가 문자로 시작하는 숫자면, 현재 idx 와 idx + 1의 자리수를 합친 단어로 유추를 한다. 유추한 단어를 변환기에 넣어서 실제 변환되는 숫자를 정답 문자열에 넣고, 현재 인덱스에서 변환된 숫자의 영어단어길이만큼 인덱스 증가

# [Note]
# str.replace(패턴문자열, 변환할 값) = str 내에 패턴문자열에 해당하는 것을 찾으면, 변환할 값으로 바꾼다.

# 🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦
# 문제 : 숫자 문자열과 영단어 (Level 1)
# 테마 : 문자열, 구현
# 출처 : https://programmers.co.kr/learn/courses/30/lessons/81301
