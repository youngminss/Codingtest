def solution(words):
    finger = [0,0,0,0,0,0,0,0]
    areas = [
        ['1','Q','A','Z'],
        ['2','W','S','X'],
        ['3','E','D','C'],
        ['4','R','F','V','5','T','G','B'],
        ['6','Y','H','N','7','U','J','M'],
        ['8','I','K',','],
        ['9','O','L','.'],
        ['0','P',';','/','-','[',"'",']','=']
        ]
    for word in words:
        for i in range(len(areas)):
            if word in areas[i]:
                finger[i] += 1
                break
    return finger

if __name__ == '__main__':
    words = input()
    result = solution(words)
    [print(n) for n in result]