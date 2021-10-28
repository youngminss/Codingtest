def findidx_alphas_first(input_alpha) :
    alpha_dict = dict([[chr(asc), -1] for asc in range(ord('a'), ord('z') + 1)])
    
    for i in range(len(input_alpha)) :
        if alpha_dict[input_alpha[i]] == -1 :
            alpha_dict[input_alpha[i]] = input_alpha.find(input_alpha[i])
    
    [print(first_alpha_idx, end=' ') for first_alpha_idx in alpha_dict.values()]
    
if __name__ == '__main__' :
    input_alpha = input()
    findidx_alphas_first(input_alpha)

# [문제] 알파벳 찾기
# [테마] 구현
# [출처] https://www.acmicpc.net/problem/10809


