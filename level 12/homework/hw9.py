# 11) მომხმარებელს შემოატანინეთ ნებისმიერი რიცხვი, შემდეგ კი 1-დან მომხმარებლის მიერ შეყვანილი რიცხვის ჩათვლით არსებული ყველა რიცხვის ჯამი გამოთვალეთ და გამოიტანეთ ეკრანზე.

number = int(input("Please enter any number: "))

count = 1
sum = 0
while count <= number:
    sum += count
    count += 1
print(sum)