def print_pattern(filenames, N) :
    pattern = ""
    length = len(filenames[0])

    for i in range(length) :
        candidate_pattern = filenames[0][i]
        for j in range(1, N) :
            if candidate_pattern != filenames[j][i] :
                pattern += '?'
                break
        if len(pattern) == i :
            pattern += candidate_pattern
    
    print(pattern)
            

if __name__ == '__main__' :
    N = int(input())
    filenames = [input() for _ in range(N)]
    print_pattern(filenames, N)

# [Approach]
# 패턴을 구하기 전, 모든 파일이름 길이가 같지만 길이를 모르니 구한다.
# 구한 길이만큼 한 자리씩 전진한다.
# 전진하면서 맨 처음 파일이름으로 매 단계 기준이 될 패턴 후보군을 정한다.
# 다른 파일이름의 같은 자리의 문자를 확인하면서 하나라도 다른 후보군 패턴이면 "?" 를 정답 패턴에 추가하고 그 단계 반복과정 중지
# 한 자리의 패턴 검사를 끝냈는데 현재 i(몇번 째 문자)와 현쟁 정답 패턴의 길이가 다르다면 -> 모든 후보군 패턴이 같다는 것이기에, 그 차례의 후보군 패턴을 정답 패턴에 추가
# 모든 반복 과정 끝나면, 정답 패턴 출력

# 🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦
# 문제 : 명령 프롬프트
# 테마 : 구현, 문자열
# 출처 : https://www.acmicpc.net/problem/1032