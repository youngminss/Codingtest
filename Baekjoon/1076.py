from sys import stdin

def print_calculated_resistance(colors) :
    color_to_resistance_converter = {
        'black': [0, 1],
        'brown': [1, 10],
        'red': [2, 100],
        'orange': [3, 1000],
        'yellow': [4, 10000],
        'green': [5, 100000],
        'blue': [6, 1000000],
        'violet': [7, 10000000],
        'grey': [8, 100000000],
        'white': [9, 1000000000]
    }

    print((color_to_resistance_converter[colors[0]][0] * 10 + color_to_resistance_converter[colors[1]][0]) * color_to_resistance_converter[colors[2]][1])


if __name__ == '__main__' :
    colors = [stdin.readline().rstrip('\n') for _ in range(3)]
    print_calculated_resistance(colors)

# [Approach]
# 색을 key 로, [값, 곱] 리스트를 value 하는 converter 딕셔너리를 하나 만든다.
# 문제에서 제공하는 저항값을 구하는 식을 이용해 출력한다.

# 나와는 다른 느낌의 신박한 다른 해설 : https://www.acmicpc.net/source/35072240

# 🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦
# 문제 : 저항
# 테마 : 구현
# 출처 : https://www.acmicpc.net/problem/1076