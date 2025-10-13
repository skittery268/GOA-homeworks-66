# 6) შექმენით სია სახელად Fruits და ჩაამატეთ მასში ხილი. მომხმარებელს შემოატანინეთ ინდექსი და შემდეგ  ამ ინდექსზე მდგომი ელემენტი ამოშალე სიიდან. საბოლოოდ დაბეჭდე სიის საბოლოო ვერსია.

fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple"]
print(f"Fruits list: {fruits}")

index = int(input("Enter the location of the fruit to remove it from the list: "))
x = index - 1
fruits.pop(x)
print(f"Final version of the list: {fruits}")