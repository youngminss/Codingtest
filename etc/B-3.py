import copy
def powerMatrix(arr1,arr2): 
    length = len(arr1)
    result = [[0]*length for _ in range(length)]
    for i in range(length):
        for j in range(length):
            for k in range(length):
                result[i][j] += (arr1[i][k] * arr2[k][j])  
            result[i][j] %= 1000000007
    return result

def power(arr,m):
    if m == 1:
        return arr
    elif m == 2:
        return powerMatrix(arr,arr)
    else:
        tmp = power(arr,m//2)
        if m % 2 == 0:
            return powerMatrix(tmp,tmp)
        else:
            return powerMatrix(powerMatrix(tmp,tmp), arr)
     

def main():
    n, m = map(int,input().split())
    arr = [list(map(int,input().split())) for _ in range(n)]
  
    result = power(arr,m)
    for i in range(n):
        for j in range(n):
            print(result[i][j],end=' ')
        print()

if __name__=="__main__":
    main()


# [분할정복] 행렬의 거듭제곱
# 시간 제한 : 1초
# n x n 행렬 A가 주어질 때, A의 m 거듭제곱을 구하는 프로그램을 작성하세요. 각 원소가 매우 커질 수 있기 때문에, 각 원소를 1,000,000,007으로 나눈 나머지를 출력합니다.

# 지시사항
# 입력
# 첫 번째 줄에 두 개의 정수 nn과 mm이 공백으로 구분되어 입력됩니다.
# ( 101≤n≤10, 1≤m≤1,000,000,000)
# 두 번째 줄 부터 n×n 행렬이 입력됩니다.
# 각 줄의 행렬 원소들은 공백으로 구분되어 입력됩니다.

# 출력
# 주어진 행렬을 m 제곱한 결과를 출력합니다.

# 입력 예시 1
# 2 100
# 1 0
# 0 1
# 출력 예시 1
# 1 0
# 0 1
# 입력 예시 2
# 3 10
# 4 5 7
# 3 2 4
# 1 8 6
# 출력 예시 2
# 200550812 126334261 935850336
# 577967600 933709083 173170086
# 632145023 224048971 416434710

# [출처 : elice]