from sys import stdin

def same_length_situation_calculate(A, B) :
    result = 0
    for i in range(len(A)) :
        if A[i] != B[i] : 
            result += 1
    return result

def minimum_no_matched_substr_length(A, B) :
    max_matched_substr_length = 0
    for i in range(len(A)) :
        for j in range(i, len(A)) :
            if B.find(A[i: j + 1]) :

                print(B.find(A[i: j + 1]), A[i: j + 1], len(A[i: j + 1]) )
                max_matched_substr_length = max([max_matched_substr_length, len(A[i:j + 1])])

<<<<<<< HEAD
    return (len(A) - max_matched_substr_length) + (len(B) - len(A))
=======
    return len(A) - max_matched_substr_length
>>>>>>> 6647390bf1b60d453465227f7eb1c0962ca83fa3

def calculate_minimun_subtraction(A, B) :
    if len(A) == len(B) :
        return same_length_situation_calculate(A, B)

    return minimum_no_matched_substr_length(A, B)

    
if __name__ == '__main__' :
    A, B = map(str, stdin.readline().split())
    print(calculate_minimun_subtraction(A, B))
    