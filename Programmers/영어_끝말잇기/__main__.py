import math
def solution(n, words):
    answer = []
    
    mentions = { words[0] : 1 }
    speak_count = 2
    my_turn = 2
    words_length = len(words)
    
    while speak_count <= words_length:
        my_turn = (my_turn) % (n+1)
        if my_turn == 0:
            my_turn = 1
        if (words[speak_count-2][-1] != words[speak_count-1][0]) or (words[speak_count-1] in mentions) :
            answer.append(my_turn)
            answer.append(math.ceil(speak_count / n))
            return answer
        else :
            mentions[words[speak_count-1]] = 1
        my_turn += 1
        speak_count += 1

    return [0,0]

if __name__ == '__main__' :
    result = solution(2,["hello", "one", "even", "never", "now", "world", "draw"])
    print(result)

# Test Case
# 3,["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"]	
# 5,["hello", "observe", "effect", "take", "either", "recognize", "encourage", "ensure", "establish", "hang", "gather", "refer", "reference", "estimate", "executive"]	
# 2,["hello", "one", "even", "never", "now", "world", "draw"]	

# [문제] 영어 끝말잇기 (프로그래머스 Summer/Winter Coding 2018)
# [문제링크] https://programmers.co.kr/learn/courses/30/lessons/12981
# [카테고리] 문자열
# [실행시간] O(n)

# [해법]
# 필요한 것
# - 등장한 단어들 저장하는 mentions 딕셔너리 생성
# - 말을 한 라운드 수 카운팅 변수 
# - 현재 말하고 있는 사람 번호 변수

# 탈락 하는 사람 발생하는 경우만 잘 작성하면 됨
# - 현재 말한 사람의 단어가, 딕셔너리에 이미 존재하면 탈락 (앞서 말한 것)
# - 현재 말한 사람의 첫 단어와, 이전에 말한 사람의 첫 단어가 다르면 탈락 (끝말잇기 룰 어김)

# 주어진 단어리스트 끝까지 탐색했는데, 탈락한 사람 없다
# => 그럼 [0,0] 반환

# 주의 : 처음에 시작하는 사람의 말을 딕셔너리에 넣고 시작하고, 제어 변수들 카운팅을 하고 시작할 것

# [Note]
# - 몇 번째 라운드 인지는, 말하고 있는 현재 라운드 카운팅 변수 / 전체 인원 수에, math.ceil()로 올림 수를 사용
# - 인덱싱을 어떻게 할 것인지 본인이 잘 판단 할 것