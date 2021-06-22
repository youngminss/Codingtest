def solution(text) :
    alpha_dict = dict([[chr(i),-1] for i in range(ord('a'),ord('z')+1) ])
    
    for i in range(len(text)) :
        if alpha_dict[text[i]] == -1 :
            alpha_dict[text[i]] = i

    for index in alpha_dict.values() :
        print(index, end=' ')

if __name__ == '__main__' :
    text = input()
    solution(text)

# [문제] 알파벳 찾기
# [테마] 구현
# [출처] https://www.acmicpc.net/problem/10809


