# 2) https://www.codewars.com/kata/58712dfa5c538b6fc7000569/train/python

# Two red beads are placed between every two blue beads. There are N blue beads. After looking at the arrangement below work out the number of red beads.

# @ @@ @ @@ @ @@ @ @@ @ @@ @

# Implement a function returning the number of red beads.
# If there are less than 2 blue beads return 0.

def count_red_beads(n):
    if n < 2:
        return 0
    else:
        return n * 2 - 2