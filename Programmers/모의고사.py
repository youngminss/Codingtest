def solution(answers):
    answer = []
    students = [0,0,0]
    pattern_1 = [1,2,3,4,5] # 5
    pattern_2 = [2,1,2,3,2,4,2,5]   # 8
    pattern_3 = [3,3,1,1,2,2,4,4,5,5]   # 10
    
    for i in range(len(answers)):
        if pattern_1[i%5] == answers[i]:
            students[0] += 1
        if pattern_2[i%8] == answers[i]:
            students[1] += 1
        if pattern_3[i%10] == answers[i]:
            students[2] += 1
    
    max_answer = max(students)
    
    for i in range(len(students)):
        if students[i] == max_answer:
            answer.append(i+1)
    
    return answer

# 문제 : 모의고사
# 분류 : 완전탐색

# Note 
# - 마지막에, max 값을 구해놓고, 학생 1,2,3 과 비교하면서, max값과 같은 수만큼의 정답을 맞춘,학생의 번호를 answer에 넣는다.

# 링크 : https://programmers.co.kr/learn/courses/30/lessons/42840
    