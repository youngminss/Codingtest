def solution(s):
    result = []
    splited_str = s.split(" ")
    for each_str in splited_str :
        converted_str = ''
        for i in range(len(each_str)) :
            if i % 2 == 0 : converted_str += each_str[i].upper()
            if i % 2 != 0 : converted_str += each_str[i].lower()
        result.append(converted_str)
    
    return ' '.join(result)


# [Note]
# https://programmers.co.kr/questions/19144
# 내용은, 문제에서 "각 단어는 하나 이상의 공백문자로 구분되어 있습니다."
# 공백으로 구분되어진 하나의 문자열을, 아무것도 모르고 str.split() 만 했다면 -> 테스트 케이스 거의 다 틀림
# str.split(" ") 처럼, split 하는 기준을 " "(빈공백) 을 명시해줘야 오류없이 처리된다.

# 🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦
# 문제 : 이상한 문자 만들기 (Level 1)
# 테마 : 문자열, 구현
# 출처 : https://programmers.co.kr/learn/courses/30/lessons/12930