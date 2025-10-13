# 1) კომენტარების სახით ახსენით მოცემული კოდი
# def sort_array(source_array):
#     odd_numbers = []
#     result = []
#     index = 0
    
#     for num in source_array:
#         if num % 2 != 0:
#             odd_numbers.append(num)
    
#     odd_numbers.sort();
    
#     for num in source_array:
#         if num % 2 != 0:
#             result.append(odd_numbers[index])
#             index += 1
#         else:
#             result.append(num)
    
#     return result

def sort_array(source_array):
    # ვქმნით ლისტებს რომლებშიც შევინახავთ კენტ რიცხვებს და ასევე საბოლოო შედეგს და ვქმნით ინდექსის ცვლადს
    odd_numbers = []
    result = []
    index = 0
    
    # კენტი რიცხვების ლისტში ვამატებთ კენტ რიცხვებს შემოსული ლისტიდან
    for num in source_array:
        if num % 2 != 0:
            odd_numbers.append(num)
    
    # ვსორტავთ კენტი რიცხვების ლისტს
    odd_numbers.sort();
    
    # for ციკლით გადაუვლით შემოსულ ლისტს და ვგებულობთ, თუ რიცხვი ამ ლისტიდან არის კენტი მაშინ ვამატებთ საბოლოო რესულთის ცვლადსკენტ რიცხვს
    # დასორტილი კენტი რიცხვების ლისტიდან ყველა სხვა შემთხვევაში უბრალოდ შეუცვლელათ ვამატებთ ამავე რიცხვს
    for num in source_array:
        if num % 2 != 0:
            result.append(odd_numbers[index])
            index += 1
        else:
            result.append(num)
    
    # საბოლოოდ ვაბრუნებთ რესულთის ლისტს
    return result

