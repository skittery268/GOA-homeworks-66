# 4) ცვლადში შეინახეთ პაროლი. შემდეგ მომხმარებელს შემოატანინეთ პაროლი, სანამ მომხმარებლის მიერ შემოტანილი პაროლი არ დაემთხვევა თქვენს პაროლს, გამოუტანეთ "Incorrect password. Try again". იმ შემთხვევაში თუ ეს პაროლები ერთმანეთს დაემთხვევა გამოიტანეთ "Correct password. You have successfully logged in." (გააკეთეთ While ციკლით, არ გამოიყენოთ if else statement-ები.);

password = "python123"

user_password = input("Please enter your password: ")

while user_password != password:
    user_password = input("Incorrect password. Try again: ")
print("Correct password. You have successfully logged in.")