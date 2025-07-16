# 5) მომხმარებელს შემოატანინე მთელი რიცხვი. იმ შემთხვევაში, თუ ეს რიცხვი არის ლუწი და ამავდროულად არის 10-ზე მეტი, დაბეჭდე True. ყველა სხვა შემთხვევაში False. 

num = int(input("Please enter any number: "))

if num % 2 == 0 and num > 10:
    print(True)
else:
    print(False)