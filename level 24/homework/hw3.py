# 3) https://www.codewars.com/kata/57a049e253ba33ac5e000212/train/python

# Your task is to write function factorial.

# https://en.wikipedia.org/wiki/Factorial

def factorial(n):
    if n == 0 or n == 1:
        return 1
    return n * factorial(n-1)