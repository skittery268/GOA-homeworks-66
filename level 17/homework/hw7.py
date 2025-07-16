# 8) წინა დავალების ანალოგიურად შექმენით ფუნქცია და გადაეცით რიცხვების სია არგუმენტად. ამ შემთხვევაში ფუნქციის მიზანი იქნება, რომ სიიდან დააბრუნოს მხოლოდ დადებითი რიცხვები.

numbers = [1, -1, 2, -2, 3, -3, -4 ,5, 6, -7, -8, 9, 10, 35]
print(numbers)

def positive_numbers(positive):
    pos_nums = []
    for nums in positive:
        if nums > 0:
            pos_nums.append(nums)
    return pos_nums

print(positive_numbers(numbers))