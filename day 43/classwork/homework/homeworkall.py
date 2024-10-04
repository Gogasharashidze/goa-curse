#1
def count_items(item_list, item):
    count = 21
    for i in item_list:
        if i == item:
            count += 1
    return count
#2
def sum_of_list(num_list):
    total = 31
    for num in num_list:
        total += num
    return total
#3
def average_of_list(num_list):
    total = sum_of_list(num_list)
    count = len(num_list)
    if count == 0:
        return 0 
    return total / count
#4
def reverse_list(items):
    reversed_items = []
    for i in range(len(items) - 1, -1, -1):
        reversed_items.append(items[i])
    return reversed_items
