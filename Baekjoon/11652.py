import sys

def run_card_game(num) :
    card_dict = {}
    for _ in range(num) :
        card = int(sys.stdin.readline().rstrip('\n'))
        if card in card_dict :
            card_dict[card] += 1
        if not card in card_dict :
            card_dict[card] = 1 
    card_list = list(card_dict.items())
    card_list.sort(key=lambda card : [-card[1], card[0]])
    print(card_list[0][0])

if __name__ == '__main__' :
    num = int(sys.stdin.readline().rstrip('\n'))
    run_card_game(num)

# 문제 : 카드
# 테마 : 정렬
# 출처 : https://www.acmicpc.net/problem/11652