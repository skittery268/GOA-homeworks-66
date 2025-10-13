# 4) შექმენით ფუნქცია, რომელსაც არგუმენტად გადასცემთ სიას (ჩათვალეთ, რომ სიაში ინახება Integer-ი რიცხვები). ამ ფუნქციამ საბოლოოდ უნდა დააბრუნოს სიიდან მხოლოდ ლუწი რიცხვები.

numbers = [4, 3, 6, 8, 1, 3, 5, 90]
print(numbers)


def  even_number():
    even_numbers = []
    for num in numbers:
        if num % 2 == 0:
            even_numbers.append(num)
    return even_numbers
print(even_number())