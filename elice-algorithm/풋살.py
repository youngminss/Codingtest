def solution(info):
    scores = [0,0,0]
    win_time = [0,0,0]
    length = len(info)

    if info[0][0] == 1 :
        scores[1] += 1
        win_time[1] += info[0][1]
    elif info[0][0] == 2 :
        scores[2] += 1
        win_time[1] += info[0][1]
    
    for i in range(1,length-1):
        if info[i][0] == info[i-1][0] :
            if info[i][0] == 1:
                scores[1] += 1
                win_time[1] += (info[i][1] - info[i-1][1])
            elif info[i][0] == 2:
                scores[2] += 1
                win_time[2] += (info[i][1] - info[i-1][1])
        else :
            if info[i][0] == 1:
                scores[1] += 1
            elif info[i][0] == 2:
                scores[2] += 1
    if info[-1][1] <= 5400:
        if info[-1][0] == info[-2][0]:
            win_time[info[-1][0]] += (5400 - info[-1][1])
        elif info[-1][0] != info[-2][0]:
            if info[-1][0] == 1:
                if scores[info[-1][0]] + 1 > scores[2]:
                    win_time[info[-1][0]] += (5400 - info[-1][1])
            elif info[-1][0] == 2:
                if scores[info[-1][0]] + 1 > scores[1]:
                    win_time[info[-1][0]] += (5400 - info[-1][1])
    
    print(win_time[1],win_time[2])

if __name__ == '__main__':
    n = int(input())
    info = []
    for i in range(n):
        team, time = map(str,input().split())
        team, time = int(team), (int(time.split(':')[0]) * 60  + int(time.split(':')[1]))
        info.append((team,time))
    info.sort(key=lambda x : x[1])
 
    results = solution(info)
    # [print(result) for result in results]
         