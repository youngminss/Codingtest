import sys


def has_mycard_in_cards(cards, my_card) :
    start, end = 0, len(cards) - 1

    while start <= end :
        mid = (start + end) // 2
        if cards[mid] == my_card :
            return True
        if cards[mid] < my_card :
            start = mid + 1
        if cards[mid] > my_card :
            end = mid - 1
    
    return False
 
def number_card(cards, my_cards) :
    result = []
    
    cards.sort()
    for my_card in my_cards :
        if has_mycard_in_cards(cards, my_card) :
            result.append(1)
        if not has_mycard_in_cards(cards, my_card) :
            result.append(0)
    
    [print(mycard_in_cards, end=' ') for mycard_in_cards in result]


if __name__ == '__main__' :
    n = int(sys.stdin.readline().rstrip('\n'))
    cards = list(map(int, sys.stdin.readline().rstrip('\n').split()))
    m = int(sys.stdin.readline().rstrip('\n'))
    my_cards = list(map(int, sys.stdin.readline().rstrip('\n').split()))
    number_card(cards, my_cards)

# 문제 : 숫자 카드
<<<<<<< HEAD
# 테마 : 이분탐색
=======
# 테마 : 이진탐색
>>>>>>> 6647390bf1b60d453465227f7eb1c0962ca83fa3
# 출처 : https://www.acmicpc.net/problem/10815