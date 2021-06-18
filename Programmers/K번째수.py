def solution(array, commands):
    answer = []
    
    for command in commands :
        new_arr = array[command[0]-1 : command[1]]
        new_arr.sort()
        answer.append(new_arr[command[2]-1])
        
    return answer

# [문제] K번째수
# [테마] 정렬
# [출처] https://programmers.co.kr/learn/courses/30/lessons/42748?language=python3
