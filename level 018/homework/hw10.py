# 12)https://www.codewars.com/kata/566dc566f6ea9a14b500007b/train/python

# # დავალება: The method is supposed to remove even numbers from the list and return a list that contains the odd numbers.
# However, there is a bug in the method that needs to be resolved.

# შესრულებული დავალება:
def kata_13_december(lst): 
    new = list()
    for i in range(len(lst)): 
        if lst[i] % 2 != 0: 
            new.append(lst[i])
    return new