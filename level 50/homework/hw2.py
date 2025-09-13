# 1) https://www.codewars.com/kata/5a3dd29055519e23ec000074/train/python

# The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

# The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

# If the score < 0, return 0.

# For example:

#     Correct answer    |    Student's answer   |   Result         
#  ---------------------|-----------------------|-----------
#  ["a", "a", "b", "b"]   ["a", "c", "b", "d"]  →     6
#  ["a", "a", "c", "b"]   ["a", "a", "b", "" ]  →     7
#  ["a", "a", "b", "c"]   ["a", "a", "b", "c"]  →     16
#  ["b", "c", "b", "a"]   ["" , "a", "a", "c"]  →     0

def check_exam(arr1,arr2):
    x = 0
    
    if arr2[0] == "":
        x += 0
    elif arr1[0] == arr2[0]:
        x += 4
    else:
        x -= 1
    
    if arr2[1] == "":
        x += 0
    elif arr1[1] == arr2[1]:
        x += 4
    else:
        x -= 1
    
    if arr2[2] == "":
        x += 0
    elif arr1[2] == arr2[2]:
        x += 4
    else:
        x -= 1
    
    if arr2[3] == "":
        x += 0
    elif arr1[3] == arr2[3]:
        x += 4
    else:
        x -= 1
    
    if x < 0:
        return 0
    else:
        return x