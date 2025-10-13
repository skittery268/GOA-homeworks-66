# დაწერეთ პროგრამა, რომელიც მომხმარებლს მოსთხოვს, რომ შემოიტანოს დადებითი რიცხვი. 
# თუ მომხმარებელი შემოიტანს უარყოფით რიცხვს ან ნულს, პროგრამამ უნდა მოსთხოვოს რიცხვის თავიდან შემოტანა

num = int(input("Please enter any number (number > 0): "))

while num <= 0:
    num = int(input("Please enter any number (number > 0): "))
    if num > 0:
        print("Your right!")
        break