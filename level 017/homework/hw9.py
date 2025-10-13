# 10) შექმენით ფუნქცია. მას გადაეცით ორი პარამეტრი: x და y რიცხვები. ფუნქციამ უნდა დააბრუნოს x რიცხვი აყვანილი y ხარისხში.

number1 = int(input("Please enter a number: "))
number2 = int(input("Please enter a number: "))

def num(x, y):
    x_y = x ** y
    fun = (f"{x} ** {y} = {x_y}")
    return fun

print(num(number1, number2))