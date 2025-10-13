# 3) მომხმარებელს შემოატანინეთ რიცხვი და დაწერეთ ისეთი პროგრამა, რომელიც განსაზღვრავს ეს რიცხვი ლუწია თუ კენტი.

num1 = int(input("Enter your number: "))

if num1 % 2 == 0:
    print(f"{num1} is even number")
else:
    print(f"{num1} is odd number")