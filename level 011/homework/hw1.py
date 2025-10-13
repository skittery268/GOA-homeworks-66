# 1) შექმენით Number guess game, if else statement-ების გამოყენებით.

comp_number = 45

user_number = int(input("Guess the number the computer has guessed: "))

if user_number > comp_number:
    print('the number guessed by the computer is smaller')
elif user_number < comp_number:
    print('the number guessed by the computer is bigger')
else:
    print("Your right!")