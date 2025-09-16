// 2) შექმნილ ობიექტში დაამტეთ ერთი კუთვნილება და წაშალეთ უკვე არსებული კუთვნილება, ჩააშენეთ მეორე ობიექტი თქვენს შექმნილ ობიექტში

const me = {
    firstName: "Saba",
    lastName: "Dzidzikashvili",
    age: 15,
    city: "Tbilisi",
    pet: true,
    names: {
        one_name: "Giorgi",
        second_name: "Ana",
        third_name: "Nino"
    }
}

me.height = 181.2

delete me.pet

console.log(me)

