# 3) მომხმარებელს შემოატანინეთ რიცხვი და დაბეჭდეთ რიცხვები მომხმარებლის შემოტანილი რიცხვიდან 0-მდე. (მაგ. input = 3. output: 3 2 1 );

num1 = int(input("Please enter any number: "))

for i in range(num1, 0, -1):
    print(i)