# 12) დააკვირდით მოცემულ flowchart-ს, ახსენით მისი მუშაობის პრინციპი. მისი მიხედვით შეადგინეთ პროგრამა და დაწერეთ რა შედეგს გამოიტანს კოდი იმ შემთხვევაში როცა მომხმარებელი არის 14 წლის და არ არის სტუდენტი.

age = int(input("Please enter any number: "))
is_student = input("You are student?(yes/no): ")
is_student_lower = is_student.lower()

if age < 18 and is_student_lower == "yes":
    print("20% discount")
elif age < 18 and is_student_lower == "no":
    print("10% discount")
else:
    print("regular price")