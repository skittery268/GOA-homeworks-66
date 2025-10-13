# 3) შექმენით ფუნქცია სახელწოდებით double_values რომელიც არგუმენტად მიიღებს სიას და დააბრუნებს ახალ სიას, სადაც თითოეული ელემენტი გაორმაგებული იქნება.

num = [4, 3, 6, 8, 1, 3, 5, 90]
print(num)

def double_values(numbers):
    numbers = list(map(lambda numbers: numbers * 2, num))
    return numbers

print(double_values(num))