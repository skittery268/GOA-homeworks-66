# 1) https://www.codewars.com/kata/5592fc599a7f40adac0000a8/train/python

# Create a function that receives a (square) matrix and calculates the sum of both diagonals (main and secondary)

# Matrix = array of n length whose elements are n length arrays of integers.

# 3x3 example:

# [
#   [ 1, 2, 3 ],
#   [ 4, 5, 6 ],
#   [ 7, 8, 9 ]
# ]

# returns --> 30 // 1 + 5 + 9 + 3 + 5 + 7



def sum_diagonals(matrix):
    sum = 0
    size = len(matrix)
    for i in range(size):
        sum += matrix[i][i]
        sum += matrix[i][size - 1]
        size -= 1
        
    return sum