import sys
num = sys.stdin.readline()
input_data_list = list(map(int,sys.stdin.readline().split()))
print(min(input_data_list), max(input_data_list))