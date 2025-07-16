# 1) https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/python

# Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

# Examples:
# Input: 42145 Output: 54421

# Input: 145263 Output: 654321

# Input: 123456789 Output: 987654321

def descending_order(num):
    num_str = str(num)
    num_list = list(num_str)
    num_list.sort(reverse=True)
    num_int = ''.join(num_list)
    return int(num_int)