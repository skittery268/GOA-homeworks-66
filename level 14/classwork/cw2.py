# 2) მომხმარებელს შემოატანინეთ 5 სახეთი, შემდეგ კი კიდევ ერთი for loop გამოიყენეთ რათა გაიგოთ ამ სახელებში სიმბოლოების რაოდენობა აღემატება თუ არა 5-ს. თუ აღემატება დაუბეჭდეთ "the name consists of more than five letters).

for i in range(5):
    names = input("Enter name: ")
    if len(names) >= 5:
        print("the name consists of more than five letters")