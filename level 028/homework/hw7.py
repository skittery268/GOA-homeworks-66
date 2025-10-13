# 7) https://www.codewars.com/kata/53697be005f803751e0015aa/train/python

# Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

# a -> 1
# e -> 2
# i -> 3
# o -> 4
# u -> 5
# For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

# Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

# For example, decode("h3 th2r2") would return "hi there".

# For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.

def encode(st):
    result = ''
    for char in st:
        if char == 'a':
            result += '1'
        elif char == 'e':
            result += '2'
        elif char == 'i':
            result += '3'
        elif char == 'o':
            result += '4'
        elif char == 'u':
            result += '5'
        else:
            result += char
    return result

def decode(st):
    result = ''
    for char in st:
        if char == '1':
            result += 'a'
        elif char == '2':
            result += 'e'
        elif char == '3':
            result += 'i'
        elif char == '4':
            result += 'o'
        elif char == '5':
            result += 'u'
        else:
            result += char
    return result