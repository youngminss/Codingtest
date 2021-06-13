def solution(board, moves):
    answer = 0
    stack = []
    depth = len(board[0])
    popData = 0
    
    for i in range(len(moves)):
        for j in range(depth):
            if board[j][moves[i]-1] != 0:
                popData = board[j][moves[i]-1]
                board[j][moves[i]-1] = 0

                if stack and popData != 0 :
                    if stack[-1] == popData :
                        print(stack,popData)
                        stack.pop()
                        answer += 2
                    else :
                        stack.append(popData)
                else :
                    stack.append(popData)
                break
        
    return answer

if __name__ == '__main__':
    result = solution([[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]],[1,5,3,5,1,2,1,4])
    # print(result)


# [문제] 크레인 인형뽑기 게임
# [문제유형] Stack
# [출처] 프로그래머스 - 2019 카카오 개발자 겨울 인턴십

# [해법]
# - 뽑은 인형을 담는, 빈 스택을 생성
# - moves 배열안에, 매 차례 뽑을 위치를 받아서, 인형이 있는지 확인
# - 인형이 있으면, 현재 인형을 담은 스택에 가장 위에 있는 인형과 비교
# - 같은 종류의 인형이면, 방금 뽑은 인형 & 인형 바구니에 있는 가장 바깥쪽 인형 pop
# - answer( 터뜨린 ) 값을 +2 한다.

# [Note]
# - 처음 간과 했던 점 = 한 섹터의 인형이 하나도 없는 곳이 었다면, 그 차례에는 인형 바구니와 비교를 하지 말아야 한다는 점
# - 고려를 하지 않았기 때문에, 이전 popData를 가지고서, 바구니에 있는 인형과 비교하는 로직이 적용되서, 잘못된 정답이 도출 됐다.
# - 결론은, 해당 차례에, 뽑힌 인형이 존재할 때만, 바구니에 있는 인형과 비교하는 로직이 작동하도록 할 것


