# 2) შექმენით Number guess game, while ციკლების გამოყენებით.

comp_number = 45

user_number = int(input("Guess the number the computer has guessed: "))

while user_number != comp_number:
    if user_number > comp_number:
        print('the number guessed by the computer is smaller')
        user_number = int(input("Guess the number the computer has guessed: "))
    elif user_number < comp_number:
        print('the number guessed by the computer is bigger')
        user_number = int(input("Guess the number the computer has guessed: "))
    else:
        print("Your right!")