def solution(record):
    answer = []
    messages = []
    user = dict()
    
    for m in record :
        state = m.split()[0]
        userId = m.split()[1]
        
        if state == 'Enter' : 
            name = m.split()[2]
            user[userId] = name
            messages.append([userId,"님이 들어왔습니다."])
        elif state == 'Leave' :
            messages.append([userId,"님이 나갔습니다."])
        else :
            name = m.split()[2]
            user[userId] = name

  
    for message in messages :
        answer.append(user[message[0]] + message[1])
        
    return answer

if __name__ == '__main__' :
    result = solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"])
    print(result)


# [문제] 오픈채팅방
# [테마] 구현
# [출처] 프로그래머스 - 2019 KAKAO BLIND RECRUITMENT
# [링크] https://programmers.co.kr/learn/courses/30/lessons/42888

# [올바른 해법]
# - "Enter" , "Leave" , "Change" 에 대한 연산을 해주면 되는데
# - "Leave" 에 경우, [userId, 나갔음] 을 저장해 놓는다.
# - "Enter" 에 경우, 매 차례, user 딕셔너리에, { userid : 이름 } 을 업데이트한다.
#   + "Enter" 는 결국, 맨 마지막에 들어온 이름이 적용 되어야 하기 때문
# - "Chagne" 에 경우도, 매 차례, user 딕셔너리에, { userid : 이름 } 을 업데이트한다.
#   + "Change" 도 결국, 맨 마지막에 들어온 이름이 적용 되어야 하기 때문
# - 최종적으로, answer에 다가, 하나씩 최종 업데이트된, userid 에 해당하는, user이름과, 나갔는지 들어갔는지 정보인 문자열을 넣을 것임
#   + 이때, user 딕셔너리에, 가장 최근(= 가장 마지막)에 업데이트 된, userId 에 해당하는 이름을 반영하면서, answer 배열에 넣어주면 끝난다.

# [잘못된 접근]
# - 매 차례에, "Enter" 나 "Chagne" 에 대한 연산을 반복문을 통해, 수정하면, "시간초과"가 발생하고, 비효율적이었음

# [Note]
# - userId 에 경우, 형식이 "uid~~~" 이라고, 뽑아낼때, userId[3:] 방식으로 "~~~" 부분만 뽑아내면 오답처리가 되었다.
# - 그냥, userId 그대로인, "uid~~~" 형태 그대로 뽑아내야 함
# - 이유는, 제한사항 조건에, 유저 아이디 길이가 1<= userId <= 10 이라는게, "uid" 포함인 것 같다.



# from collections import deque

# def solution(record):
#     answer = deque()
#     user = {}
#     change = {}

#     for i in range(len(record)-1, -1, -1) :
#         state = record[i].split()[0]
#         if state == 'Enter' :
#             id, name = record[i].split()[1], record[i].split()[2]
#             if id in change :
#                 answer.appendleft(change[id]+'님이 ' + '들어왔습니다.')
#             else :
#                 if id in user :
#                     answer.appendleft(user[id]+'님이 ' + '들어왔습니다.')
#                 else :
#                     user[id] = name
#                     answer.appendleft(name+'님이 ' + '들어왔습니다.')
#         elif state == 'Leave' :
#             id = record[i].split()[1]
#             if id in user :
#                 answer.appendleft(user[id]+'님이 ' + '나갔습니다.')
#             else :
#                 for j in range(i-1, -1, -1):
#                     if (record[j].split()[0] == 'Enter' or record[j].split()[0] == 'Change') and id == record[j].split()[1] :
#                         user[id] = name
#                         answer.appendleft(name+'님이 ' + '나갔습니다.')
#                         break
#         else :
#             id, name = record[i].split()[1], record[i].split()[2]
#             if id in change :
#                 pass
#             else :
#                 change[id] = name
