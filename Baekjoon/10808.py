def count_alpha(input_alpha) :
    alpha_dict = { 'a': 0, 'b': 0, 'c': 0, 'd': 0, 'e': 0, 'f': 0, 'g': 0, 'h': 0, 'i': 0, 'j': 0, 'k': 0, 'l': 0, 'm': 0, 'n': 0, 'o': 0, 'p': 0, 'q': 0, 'r': 0, 's': 0, 't': 0, 'u': 0, 'v': 0, 'w': 0, 'x': 0, 'y': 0, 'z': 0 }
    for i in range(len(input_alpha)) :
        alpha_dict[input_alpha[i]] += 1
    [print(alpha_count, end=' ') for alpha_count in list(alpha_dict.values())]
    
if __name__ == '__main__' :
    input_alpha = input()
    count_alpha(input_alpha)