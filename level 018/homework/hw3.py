# 5) შექმენით სია, სადაც დაამატებთ მინიმუმ 5 ელემენტს. მომხმარებელს ჰკითხე სურს თუ არა სიის გასუფთავება. თუ დაგთანხმდება გაასუფთავე სია თუ არა მაშინ ჩვეულებრივად დაბეჭდე ეს სია ტერმინალში.

data = ["Hello", 1, "Name", 200, "Hi", "Go home"]
print(f"data_list: {data}")

user = input("Do you want to clear your data_list? (yes/no): ")
user_lower = user.lower()

count = 1
count2 = 0

while count > count2:
    if user_lower == "yes":
        data.clear()
        print("succes!")
        print(f"Your new data_list: {data}")
        count2 += 2
    elif user_lower == "no":
        print("Okay, Thank You for answer!")
        print(f"Your data_list: {data}")
        count2 += 2
    else:
        print("You did not write an answer (yes/no), please try again:")
        user = input("Do you want to clear the list? (yes/no): ")
        user_lower = user.lower()

