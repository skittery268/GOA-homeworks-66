# 4) ცვლადში შეინახეთ ცარიელი სია. input-ის მეშვეობით მომხმარებელს შემოატანინეთ ინფორმაცია საკუთარი თავის შესახებ. (მაგ. სახელი, გვარი, ასაკი, დაბადების თარიღი, სიმაღლე და ა.შ.)მომხმარებელმა მინიმუმ უნდა შემოიტანოს 8 input. ეს ყოველივე input დაამატეთ თქვენს მიერ შექმნილ ცარიელ სიაში 

user_data = []

name = input('შეიყვანეთ თქვენი სახელი: ')
surename = input('შეიყვანეთ თქვენი გვარი: ')
age = input('შეიყვანეთ თქვენი ასაკი: ')
height = input('შეიყვანეთ თქვენი სიმაღლე: ')
number = input('შეიყვანეთ თქვენი საყვარელი ციფრი: ')
color = input('შეიყვანეთ თქვენი სავარელი ფერი: ')
favorite_name = input('შეიყვანეთ თქვენი საყვარელი სახელი: ')
pet = input('შეიყვანეთ თქვენი საყვარელი ცხოველი: ')

user_data.insert(0, name)
user_data.insert(1, surename)
user_data.insert(2, age)
user_data.insert(3, height)
user_data.insert(4, number)
user_data.insert(5, color)
user_data.insert(6, favorite_name)
user_data.insert(7, pet)

print(f'თქვენმიერ შემოტანილი ინფორმაცია: {user_data}')