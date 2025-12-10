# https://www.codewars.com/kata/5a00a8b5ffe75f8888000080/train/python

# Given an array containing only zeros and ones, find the index of the zero that, if converted to one, will make the longest sequence of ones.

# For instance, given the array:

# [1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1]
# replacing the zero at index 10 (counting from 0) forms a sequence of 9 ones:

# [1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1]
#                   '------------^------------'
# Your task is to complete the function that determines where to replace a zero with a one to make the maximum length subsequence.

# Notes:

# If there are multiple results, return the last one:
# [1, 1, 0, 1, 1, 0, 1, 1] ==> 5

# The array will always contain only zeros and ones.
# Can you do this in one pass?

def replace_zero(arr):
    left = 0
    zeroIndex = -1
    maxLen = 0
    bestZeroIndex = -1

    for right, val in enumerate(arr):
        if val == 0:
            if zeroIndex != -1:
                left = zeroIndex + 1
            zeroIndex = right

        windowLen = right - left + 1

        if windowLen > maxLen or (windowLen == maxLen and zeroIndex > bestZeroIndex):
            maxLen = windowLen
            bestZeroIndex = zeroIndex

    return bestZeroIndex