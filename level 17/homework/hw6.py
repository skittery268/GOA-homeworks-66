# 7) შექმენით ფუნქცია და გადაეცით რიცხვების სია არგუმენტად. ფუნქციის მიზანი იქნება, რომ სიიდან დააბრუნოს მხოლოდ უარყოფითი რიცხვები.

numbers = [1, -1, 2, -2, 3, -3, -4 ,5, 6, -7, -8]
print(numbers)

def negative_numbers(negative):
    neg_nums = []
    for nums in negative:
        if nums < 0:
            neg_nums.append(nums)
    return neg_nums

print(negative_numbers(numbers))