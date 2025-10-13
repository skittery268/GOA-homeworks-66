# 7) https://www.codewars.com/kata/5a023c426975981341000014/train/python (ამ ამოცანის გასაკეთებლად მათემატიკური ცოდნა დაგჭირდებათ, ამიტომ მოიძიეთ ინფორმაცია თუ როგორ ვიპოვოთ სამკუთხედის მესამე კუთხის გრადუსი, იმ შემთხვევაში თუ დანარჩენი ორი კუთხის გრადუსი ჩვენთვის უკვე ცნობილია).

# დავალება: You are given two interior angles (in degrees) of a triangle.
# Write a function to return the 3rd.
# Note: only positive integers will be tested.

# შესრულებული დავალება:
def other_angle(a, b):
    k = 180 - (a + b)
    return k