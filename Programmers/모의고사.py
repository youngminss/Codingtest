def solution(answers):
    person = [0,0,0]
    person1 = [1,2,3,4,5] # 5
    person2 = [2,1,2,3,2,4,2,5] # 8
    person3 = [3,3,1,1,2,2,4,4,5,5] # 10
    
    for i in range(len(answers)) :
        if answers[i] == person1[i%5] :
            person[0] += 1
        if answers[i] == person2[i%8] :
            person[1] += 1
        if answers[i] == person3[i%10] :
            person[2] += 1
    
    max_person_score = max(person)
    answer = [(i+1) for i in range(len(person)) if person[i] == max_person_score ]
    
    return answer

# 문제 : 모의고사
# 분류 : 완전탐색

# Note 
# - 마지막에, max 값을 구해놓고, 학생 1,2,3 과 비교하면서, max값과 같은 수만큼의 정답을 맞춘,학생의 번호를 answer에 넣는다.

# 링크 : https://programmers.co.kr/learn/courses/30/lessons/42840
    