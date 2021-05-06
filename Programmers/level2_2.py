def solution(prices):
    answer = []
    for i in range(len(prices)):
        stock = prices[i]
        increase_count = 0
        for j in range(i+1,len(prices)):
            if stock <= prices[j]:
                increase_count += 1
            else:
                increase_count += 1
                break
        answer.append(increase_count)
    print(answer)
    return answer

if __name__ == '__main__':
    result = solution([1,2,3,2,3])