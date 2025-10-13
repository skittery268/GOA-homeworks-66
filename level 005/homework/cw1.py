# 2) ცვლადში შეინახეთ პაროლი, შემდეგ კი მომხმარებელს შემოატანინეთ პაროლი. იმ შემთხვევაში, თუ მომხმარებლის მიერ შემოტანილი პაროლი სწორია, დაბეჭდეთ "access granted". წინააღმდეგ შემთხვევაში - "access denied".

password = "python123"

user_password = input("Please enter your password: ")

if user_password == password:
    print("access granted.")
else:
    print("access denied")