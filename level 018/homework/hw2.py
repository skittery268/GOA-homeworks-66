# 4) შექმენით სია სადაც შეინახავთ 5 რიცხვს, მომხმარებელს აარჩევინეთ ამ სიიდან ერთ-ერთი რიცხვი და დათვალეთ თუ რამდენჯერ მეორდება ეს რიცხვი სიაში.

numbers = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5]
print(numbers)

user_number = int(input("Please enter a number from the list (1 - 5): "))

if user_number == 1:
    count1 = numbers.count(1)
    print(f"Your number was repeated in the list this many times: {count1}")
elif user_number == 2:
    count2 = numbers.count(2)
    print(f"Your number was repeated in the list this many times: {count2}")
elif user_number == 3:
    count3 = numbers.count(3)
    print(f"Your number was repeated in the list this many times: {count3}")
elif user_number == 4:
    count4 = numbers.count(4)
    print(f"Your number was repeated in the list this many times: {count4}")
elif user_number == 5:
    count5 = numbers.count(5)
    print(f"Your number was repeated in the list this many times: {count5}")
else:
    print("Error! You entered a number that is not in the list.")