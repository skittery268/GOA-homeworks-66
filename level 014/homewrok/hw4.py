# 5) მომხმარებელს შემოატანინეთ 10 მნიშვნელობა სიაში (For loop-ის მეშვეობით. ) შემდეგ გამოიყენეთ კიდევ ერთი for loop, გადაუარეთ თითოეულ სიის ელემენტს და შამოწმეთ ეს რიცხვები ლუწია თუ კენტი.

numbers = []

for i in range(10):
    number = int(input("Please enter a number: "))
    numbers.append(number)

for i in numbers:
    if i % 2 == 0:
        print(f"{i}: this is an even number.")
    if i % 2 == 1:
        print(f'{i}: This is not an even number.')