def solution(numbers, hand):
    answer = ''
    keyPad = {
        1 : [0,0],
        2 : [0,1],
        3 : [0,2],
        4 : [1,0],
        5 : [1,1],
        6 : [1,2],
        7 : [2,0],
        8 : [2,1],
        9 : [2,2],
        0 : [3,1],
    }
    l = (3,0)
    r = (3,2)
    for i in range(len(numbers)):
        if numbers[i] == 1 or numbers[i] == 4 or numbers[i] == 7 : 
            answer += 'L'
            l = (keyPad[numbers[i]][0],keyPad[numbers[i]][1])
        elif numbers[i] == 3 or numbers[i] == 6 or numbers[i] == 9:
            answer += 'R'
            r = (keyPad[numbers[i]][0],keyPad[numbers[i]][1])
        else:
            targetKeyIdx = (keyPad[numbers[i]][0],keyPad[numbers[i]][1])
            d_l = abs(l[0] - targetKeyIdx[0]) + abs(l[1] - targetKeyIdx[1])
            d_r = abs(r[0] - targetKeyIdx[0]) + abs(r[1] - targetKeyIdx[1])
            if d_l < d_r:
                answer += 'L'
                l = (targetKeyIdx[0],targetKeyIdx[1])
            elif d_l > d_r:
                answer += 'R'
                r = (targetKeyIdx[0],targetKeyIdx[1])
            else:
                if hand[0] == 'l':
                    answer += 'L'
                    l = (targetKeyIdx[0],targetKeyIdx[1])
                else:
                    answer += 'R'
                    r = (targetKeyIdx[0],targetKeyIdx[1])

    return answer


if __name__ == '__main__':
    result = solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5],"right")
    print(result)


# [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5],"right"	"LRLLLRLLRRL"
# [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2],"left"	"LRLLRRLLLRR"
# [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],"right"	"LLRLLRLLRL"

# [문제] 키패드 누르기 / 프로그래머스 2020 카카오 인턴십
# [문제링크] https://programmers.co.kr/learn/courses/30/lessons/67256
# [카테고리] 구현
# [실행시간] O(len(numbers))

# [해법]
# - 각 숫자버튼을 좌표라고 생각하고, 숫자마다 좌표를 가지는 딕셔너리를 선언함
# - 시작은 각각 '*' 과 '#'의 좌표를 의미하는 좌표로 l,r 이라는 변수에 선언하고 시작
# - numbers 배열을 순회하면서 정보에 해당하는 keyPad 딕셔너리의 정보를 보고, 크게 [1,4,7], [3,6,9] 일때는 간단히 처리하고
# - [2,5,8,0] 일때가 문제인데, 현 시점에서의 l,r의 좌표기준으로, 눌러야 할 [2,5,8,0] 버튼의 좌표의, '맨하탄 거리'를 계산(기범님 감사합니다 !)해서 더 짧은 거리로 선택한다.
# - 만약, l,r 기준의 거리가 같다면, 주어진 hand의 정보로 결정한다.