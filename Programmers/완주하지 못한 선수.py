def solution(participant, completion):
    
    result = ""
    participant = sorted(participant)
    completion = sorted(completion)
    
      
    for i in range(len(completion)):
        if participant[i] != completion[i]:
            return participant[i]
    return participant[-1]


# 문제 : 완주하지 못한 선수
# 분류 : 해쉬 or 정렬

# Note 
# - 참석자(participant) 수 == 완주자(completion) 수 + 1 임을 알고, 정렬 후, 완주자 수만큼 반복문 돌린다.
# - 돌면서, i 번째 인덱스 값이, 서로 다르다면, 참석자에 문제가 있는 사람이다.
# - 끝까지 반복문이 돌았다면, 참석자의 남은 한명이 문제가 있는 사람이다.

# 링크 : https://programmers.co.kr/learn/courses/30/lessons/42576