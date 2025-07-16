# 6) შექმენით ფუნქცია და არგუმენტად გადაეცით String-ი. ფუნქციამ ეგრედწოდებულად უნდა "გაფილტროს" ეს სტრინგი თანხმოვანი ასოებისგან და მხოლოდ დააბრუნოს ის ხმოვანი ასოები, რომლებსაც ეს სტრინგი შეიცავს.

st = input("შეიყვანეთ წინადადება: ")


def filter_string(string):
    vowels = 'აოიოუ'
    result = ''
    for letter in string:
        if letter.lower() in vowels:
            result += letter
    return result 

print(filter_string(st))