import sys

def router_install(house_positions, c) :
    house_positions.sort()
    
    max_between_distance = 0
    for i in range(len(house_positions) - 1) :
        if abs(house_positions[i + 1] - house_positions[i]) > max_between_distance :
            max_between_distance = abs(house_positions[i + 1] - house_positions[i])
    print(max_between_distance)

if __name__ == '__main__' :
    n, c = map(int, sys.stdin.readline().rstrip('\n').split())
    house_positions = []
    for _ in range(n) : 
        house_positions.append(int(sys.stdin.readline().rstrip('\n')))
    router_install(house_positions, c)
