# 1) მომხმარებელს შემოატანინეთ 10 მნიშვნელობა სიაში (For loop-ის მეშვეობით. ) შემდეგ გამოიყენეთ კიდევ ერთი for loop, გადაუარეთ თითოეულ სიის ელემენტს და შამოწმეთ ეს რიცხვები ლუწია თუ კენტი.

numbers = []
for i in range(10):
    num = int(input("Enter your number: "))
    num_append = numbers.append(num)

for i in numbers:
    if i % 2 == 0:
        print(f"{i} This is an even number.")
    else:
        print(f"{i} This is an odd number.")