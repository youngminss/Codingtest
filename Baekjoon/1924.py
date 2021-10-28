def print_converted_day(month, day) :
    week_list = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']
    day_from_month = [31,28,31,30,31,30,31,31,30,31,30,31]

    total_day = 0
    for i in range(1,month) : total_day += day_from_month[i-1]
    total_day += day - 1

    print(week_list[total_day % len(week_list)])

month, day = map(int,input().split())
print_converted_day(month, day)