# შექმენით რიცხვების სია, რომელშიც მინიმუმ გექნებათ 5 ელემენტი. ამ 5 ელემენტიდან 1 განსხვავებული ელემენტი იქნება. ეს ელემენტი უნდა იყოს მოთავსებული დაახლოების სიის შუაში. (არ უნდა იყოს სიის დასაწყისში ან დასასრულში). თქვენი დავალებაა დაწეროთ პროგრამა და იპოვოთ ეს განსხვავებული ელემენტი მოცემულ სიაში. (მინიშნება: სიის დალაგება)

numbers = [5, 5, 2, 5, 5]
sorted_numbers = sorted(numbers)

if sorted_numbers[0] != sorted_numbers[1]:
    different_number = sorted_numbers[0]
else:
    different_number = sorted_numbers[-1]

print(f'{different_number}: This is a different element')

