# 16) https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/python

# დავალება: Write a function which calculates the average of the numbers in a given array.
# Note: Empty arrays should return 0.

# შესრულებული დავალება:
def find_average(array):
    return sum(array) / (len(array) or 1)