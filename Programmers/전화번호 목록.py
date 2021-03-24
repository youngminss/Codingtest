def solution(phone_book):
    
    phone_book.sort()

    for i in range(len(phone_book) - 1):
        if phone_book[i+1].startswith(phone_book[i]):
            return False

    return True


# 문제 : 전화번호 목록
# 분류 : 해시

# Note 
# - 번호길이에 따른, 정렬 아이디어까진 Ok
# - n번째 번호가 들어왔을 때, (0 ~ n-1)번째까지 prefix와 비교하면서, 같으면 끝
# - 통과하면, bucket에 append 
# [ O(n^2) 나온 풀이 ]
    # 방식 1
    # bucket = []
    # for i in range(len(phone_book)):
    #     for j in range(len(bucket)):
    #         prefix = bucket[j]
    #         if prefix == phone_book[i][:len(prefix)]:
    #             return False
            
    #     bucket.append(phone_book[i])
    
    # 방식 2
    # for i in range(len(phone_book)):
    #     for p in phone_book[:i]:
    #         if phone_book[i].startswith(p):
    #             return False
# 결과 = 테스트 3,4 시간초과 (어떻게 줄일 수 있을까 !)

# 해결책
# 전화번호를 길이가 아닌, 그냥 전화번호 자체를 정렬하면, 오름차순으로 잘 정리된다.
# 0 ~ len(arr) -1 까지 나와 내 이후 값만 비교하면 된다. 
# 실행시간 : O(n)

# 링크 : https://programmers.co.kr/learn/courses/30/lessons/42577