def solution(p,w,words):
    words = words.upper()
    length = len(words)
    keyboard = { 
        ' ' : [1,p], 
        'A' : [2,p],'B' : [2,p*2], 'C' : [2,p*3],
        'D' : [3,p], 'E' : [3,p*2], 'F' : [3,p*3],
        'G' : [4,p], 'H' : [4,p*2], 'I' : [4,p*3],
        'J' : [5,p], 'K' : [5,p*2], 'L' : [5,p*3], 
        'M' : [6,p], 'N' : [6,p*2], 'O' : [6,p*3], 
        'P' : [7,p], 'Q' : [7,p*2], 'R' : [7,p*3], 'S' : [7,p*4], 
        'T' : [8,p], 'U' : [8,p*2], 'V' : [8,p*3], 
        'W' : [9,p], 'X' : [9,p*2], 'Y' : [9,p*3], 'Z' : [9,p*4]
    }

    second = keyboard[words[0]][1]
    for i in range(1,length):
        if keyboard[words[i]][0] == keyboard[words[i-1]][0] :
            if keyboard[words[i]][0] == ' ':
                second += keyboard[words[i]][1]    
            else:
                second += w
                second += keyboard[words[i]][1]
        else:
            second += keyboard[words[i]][1]
    
    return second

if __name__ == '__main__':
    p,w = map(int,input().split())
    words = input()
    result = solution(p,w,words)
    print(result)

# [구현] 추억 여행
# https://kdt.elice.io/courses/7447/lectures/81388/materials/139

# 오답 예외케이스 파악 중
# [문제출처] 앨리스 AI 트랙
