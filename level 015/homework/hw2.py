# 5) გააკეთეთ მეოთხე დავალება, თუმცა ამჯერად ჩააშენეთ კოდი ფუნქციაში.
# 4) მომხმარებელს შემოატანინეთ წინადადება. ტერმინალში კი დაბეჭდეთ ეს წინადადება ისე რომ იყოს:

# 1. ყველა პატარა ასო;
# 2. ყველა დიდი ასო;
# 3. პირველი ასო დიდი, ხოლო ყველა დანარჩენი პატარა.

suggestion = input("Please enter a suggestion: ")

def sentence_transformation(sentence):
    # 1:
    print("in small letters: " + sentence.lower())
    # 2:
    print("in capital letters: " + sentence.upper())
    # 3:
    print("Only first letter is capitalized: " + sentence.capitalize())


sentence_transformation(suggestion)