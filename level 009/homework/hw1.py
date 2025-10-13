# 1) მომხმარებელს შემოატანინეთ სახელი და გვარი, რასაც შემდეგ გადაუვლით for loop-ით და შემოტანილი სახელისა და გვარის თითოეულ ასოს ცალ-ცალკე გამოიტანთ ტერმინალში;

name_surename = input("Enter your name and surename: ")

for letter in name_surename:
    print(letter)