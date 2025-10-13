# 4) გადაუარეთ სტრინგს for loop-ით და სტრი გში მხოლოდ ლუწ ინდექსებზე მდგომი ასოები დაბეჭდეთ .

string = "Hello world!"
for i in range(len(string)):
    if i % 2 == 0:
        print(string[i])