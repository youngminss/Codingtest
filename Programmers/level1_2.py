def solution(array, commands):
    answer = []
    repeat_len = len(commands)
    for i in range(repeat_len):
        array_cut = array[commands[i][0]-1:commands[i][1]]

        array_cut.sort()
        answer.append(array_cut[commands[i][2]-1])
    return answer

if __name__ == '__main__':
    array = [1, 5, 2, 6, 3, 7, 4]
    commands = 	[[2, 5, 3], [4, 4, 1], [1, 7, 3]]
    result = solution(array,commands)


