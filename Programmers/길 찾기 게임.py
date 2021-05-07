import sys
sys.setrecursionlimit(10**6)

class Node:
    def __init__(self, info):
        self.info = info
        self.left = None
        self.right = None

def insertNode(root, info):
    cur = root
    while cur != None:
        if cur.info[0] > info[0]:
            if cur.left != None:
                cur = cur.left
            else:
                newNode = Node(info)
                cur.left = newNode
                break
        elif cur.info[0] < info[0]:
            if cur.right != None:
                cur = cur.right
            else:
                newNode = Node(info)
                cur.right = newNode
                break

def preOrderTraverse(preTravese,node):
    preTravese.append(node.info[2])
    if node.left != None:
        preOrderTraverse(preTravese, node.left)
    if node.right != None:
        preOrderTraverse(preTravese, node.right)

def postOrderTraverse(postTravese, node):
    if node.left != None:
        postOrderTraverse(postTravese, node.left)
    if node.right != None:
        postOrderTraverse(postTravese, node.right)
    postTravese.append(node.info[2])
    
                
def solution(nodeinfo):
    answer = []

    [nodeinfo[i].append(i+1) for i in range(len(nodeinfo))]
    nodeinfo.sort(key=lambda x : x[1], reverse=True)
    T = Node(nodeinfo[0])
    for i in range(1,len(nodeinfo)):
        insertNode(T, nodeinfo[i])
    
    preTravese = []
    postTravese = []
    preOrderTraverse(preTravese, T)
    postOrderTraverse(postTravese, T)

    answer.append(preTravese)
    answer.append(postTravese)

    return answer

if __name__ == '__main__':
    nodeinfo = [[5,3],[11,5],[13,3],[3,5],[6,1],[1,3],[8,6],[7,2],[2,2]]
    result = solution(nodeinfo)
    print(result)



# [프로그래머스] 길 찾기 게임
# [문제링크] https://programmers.co.kr/learn/courses/30/lessons/42892
# [분야] 이진트리순회(Traverse)
# [난이도] Level 3 (2019 Kakao Blind Recuitment)
# [실행시간] O(n) == 트리가 한쪽으로만 치우친 경우

# [해법]
# - 문제 자체는 전형적인 트리순회(전위순회,후위순회,(중위순회도 있음))임
# - 문제는 처음에 주어진 리스트에서, 트리를 만들기위한, 적절한 순서로 만들어 주는 것
# - 문제에서, (x,y) 좌표상의 정보가 담긴 리스트를 준다.
# - 여기서 y좌표가 큰 순으로 정렬을 해서, 가장 y좌표가 큰(트리로 그릴경우, 루트노드 위치) 정보가 리스트 맨 앞에 위치하도록 배치
# - 그리고 이 때, 처음에 주어진 리스트안에 정보순서가 -> 몇 번째 노드인지 == 이름, 이 정보를 추가해준다.
# - 여기까지 작업이 완료되었으면, 그 이후로는 쉬움
# - 양방향 Node 클래스를 만들고, 노드삽입,선위순회,후위순회 함수를 만든다.
# - 파라미터로 넘겨진, nodeInfo 리스트정보를 기반으로, 트리를 만들고
# - 선위순회, 후위순회를 하며, 방문한, 노드의 이름을, 각각의 파라미터로 주어진, 리스트에 추가한다.
# - 마지막에, answer 리스트에, 선위순회리스트, 후우순회리스트를, 추가하고, 그 결과를 반환

# [Note]
# - 이 문제에서, 로직이 맞아도, 6,7번 케이스가 "런타임에러"발생하면, 이는 파이썬 recursion limit = 1000으로 기본설정되어 있다함.
# - 그래서 아래 두줄을 추가해주면, 정답처리가 된다.
# https://programmers.co.kr/questions/3723 (참고)
# import sys
# sys.setrecursionlimit(10**6) # 1,000,000 번 재귀가능 설정
# - C에서 구조체를 통해, 트리를 만들었던 것처럼, python에서는 class를 이용해서, 구현가능한 것을 해봄
# - class 안에서의 function의 파라미터 시작은, self 를 빼먹지 않도록 하자.


