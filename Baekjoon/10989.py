import sys

def sort_nums(array) :
    array.sort()
    [print(data) for data in array]

if __name__ == '__main__' :
    num = int(sys.stdin.readline().rstrip('\n'))
    
    array = []
    for _ in range(num) : array.append(int(sys.stdin.readline().rstrip('\n')))
    sort_nums(array) 

