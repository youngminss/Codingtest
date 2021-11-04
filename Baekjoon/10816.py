from sys import stdin

def count_each_mycard_in_cards(cards, mycards) :
    cards_counting_info = {}
    for card in cards :
        if card in cards_counting_info :
            cards_counting_info[card] += 1
        if not card in cards_counting_info :
            cards_counting_info[card] = 1
    
    for mycard in mycards :
        if mycard in cards_counting_info :
            print(cards_counting_info[mycard], end=' ')
        if not mycard in cards_counting_info :
            print(0, end=' ')


if __name__ == '__main__' :
    n = int(stdin.readline().rstrip('\n'))
    cards = list(map(int, stdin.readline().rstrip('\n').split()))
    m = int(stdin.readline().rstrip('\n'))
    mycards = list(map(int, stdin.readline().rstrip('\n').split()))

    count_each_mycard_in_cards(cards, mycards)

# 숫자 카드 1은 "특정 데이터가 기준 데이터들 안에 존재하느냐 ?"
# 숫자 카드 2는 "특정 데이터가 기준 데이테들 안에 몇개가 존재하느냐 ?"
# 묻는 것이 다르기 때문에, 접근 방법도 전자는 "이분탐색", 후자는 "해시맵" 으로 구분된다.

# 🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦

# 문제 : 숫자 카드 2
# 테마 : 자료구조, 해시를 사용한 집합과 맵 or 이분탐색
# 출처 : https://www.acmicpc.net/problem/10816