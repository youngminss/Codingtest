def solution(lottos, win_nums):
    answer = []
    
    score = { 6 : 1, 5 : 2, 4 : 3, 3 : 4, 2 : 5, 1 : 6, 0 : 6 }
    
    win_nums.sort()
    lottos.sort()
    answer_count = 0
    for num in lottos:
        if num in win_nums :
            answer_count += 1
    
    answer.insert(0,score[answer_count])
    for num in lottos:
        if num == 0:
            answer_count += 1
    answer.insert(0, score[answer_count])

    return answer


if __name__ == '__main__':
    result = solution([45, 4, 35, 20, 3, 9],[20, 9, 3, 45, 4, 35])
    print(result)


# [44, 1, 0, 0, 31, 25],[31, 10, 45, 1, 6, 19]	[3, 5]
# [0, 0, 0, 0, 0, 0],[38, 19, 20, 40, 15, 25]	[1, 6]
# [45, 4, 35, 20, 3, 9],[20, 9, 3, 45, 4, 35]	[1, 1]