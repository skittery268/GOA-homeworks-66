# 1 ) https://www.codewars.com/kata/5356ad2cbb858025d800111d/train/python

# Create a function that accepts an array of names, and returns an array of each name with its first letter capitalized and the remainder in lowercase.

# Examples
# ["jo", "nelson", "jurie"] -->  ["Jo", "Nelson", "Jurie"]
# ["KARLY", "DANIEL", "KELSEY"] --> ["Karly", "Daniel", "Kelsey"]

def cap_me(arr):
    y = []
    while True:
        for i in arr:
            x = i.title()
            y.append(x)
        return y