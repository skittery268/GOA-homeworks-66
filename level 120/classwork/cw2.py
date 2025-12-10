# https://www.codewars.com/kata/59f34ec5a01431ab7600005a/train/python

# In this Kata, you will implement a function count that takes an integer and returns the number of digits in factorial(n).

# For example, count(5) = 3, because 5! = 120, and 120 has 3 digits.

# More examples in the test cases.

# Brute force is not possible. A little research will go a long way, as this is a well known series.

# Good luck!

# Please also try:

import math

def count(n):
    if n == 0:
        return 1

    log_sum = 0
    for i in range(1, n + 1):
        log_sum += math.log10(i)
    
    return int(log_sum) + 1