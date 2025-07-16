# 12) https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/python

# დავალება: Write a function that accepts a non-negative integer n and a string s as parameters, and returns a string of s repeated exactly n times.
# Examples (input -> output)
# 6, "I"     -> "IIIIII"
# 5, "Hello" -> "HelloHelloHelloHelloHello"

# შესრულებული დავალება: 
def repeat_str(repeat, string):
    x = string * repeat
    return x