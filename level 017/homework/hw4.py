# 5) შექმენით ფუნქცია და გადაეცით არგუმენტად სია. ფუნქციამ უნდა დააბრუნოს ახალი სია, რომლის თითოეული ელემენტიც უნდა იყოს კვადრატში აყვანილი.

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
print(numbers)

def square_numbers():
    num = list(map(lambda num: num ** 2, numbers))
    return num

# or

# def square_numbers():
#     square_number = []
#     for num in numbers:
#         square = num ** 2
#         square_number.append(square)
#     return square_number
print(square_numbers())