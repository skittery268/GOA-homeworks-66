# 3) გაიხსენეთ გაკვეთილზე გაკეთებული დავალება მომხმარებლის სისტემაში შესვლის მცდელობაზე და დამოუკიდებლად გააკეთეთ იგივე while ციკლის საშუალებით.

password = "python123"

user_password = input("Please enter your password: ")

if user_password == password:
    print("access granted.")

while user_password != password:
    user_password = input("Wrong! Please enter your password again: ")
    if user_password == password:
        print("access granted.")