# გააკეთეთ Codewars-ები:

# 1) https://www.codewars.com/kata/565f5825379664a26b00007c/train/python

# დავალება:
# Write a function that returns the total surface area and volume of a box.
# The given input will be three positive non-zero integers: width, height, and depth.
# The output will be language dependant, so please check sample tests for the corresponding data type, (list, tuple, struct, query, et cetera).

# გაკეთებული დავალება:
def get_size(width, height, depth):
    area = 2 * (width * height + height * depth + width * depth)
    volume = width * height * depth
    return [area, volume] 