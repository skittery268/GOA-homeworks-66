# 3) დაწერეთ პროგრამა, რომელიც მომხმარებელს მოსთხოვს რიცხვის შემოტანას.
# თუ შემოტანილი რიცხვი ლუწია და  მეტია ათზე დაბეჭდოს "True".
# სხვა შემთხვევაში, დაბეჭდოს "False".

num = int(input("Please enter any number: "))

if num % 2 == 0 and num > 10:
    print(True)
else:
    print(False)