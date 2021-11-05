from sys import stdin

def is_one_hundred(n) :
    return int(n) == 100

def anything_error_button(n, error_buttons) :
    for error_button in error_buttons :
        if error_button in n :
            return False
    return True

def how_many_push_buttons(n, error_buttons) :
    if is_one_hundred(n) : return 0
    if anything_error_button(n, error_buttons) : return len(n)

    

if __name__ == '__main__' :
    n = stdin.readline().rstrip('\n')
    m = int(stdin.readline().rstrip('\n'))
    error_buttons = list(map(str, stdin.readline().rstrip('\n').split()))
    how_many_push_buttons(n, error_buttons)

# 고장난 수를 제외한 수들로, "목표 수와 가장 가까운 수를 만듬"
# 오차는 만큼 +, - 을 누름

# 고려 사항
# - 고장난 버튼이 하나도 포함 X -> 목표 버튼 수의 길이만큼 누름
# - 목표 채널이 100일 때
# - 시작부터 +, - 버튼만 눌러 목표지점으로 가는 것과 근처로 이동 후 +, - 버튼을 누른 것 중에 어떤 게 더 최소화인지