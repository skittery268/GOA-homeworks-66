# 17) https://www.codewars.com/kata/53369039d7ab3ac506000467/train/python

# დავალება: Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

# შესრულებული დავალება: 
def bool_to_word(boolean):
    if boolean == True:
        return "Yes"
    if boolean == False:
        return "No"