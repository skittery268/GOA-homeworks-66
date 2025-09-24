// 26) შექმენით საგნების ობიექტი, თითოეულს გაუწერეთ ქულები, Object.values(), reduce - ის დახმარებით შეკრიბეთ ამ ობიექტებში 
// არსებული ქულები და დააბრუნეთ საბოლოო შედეგი

const subjects = {
    math: 92,
    physics: 85,
    chemistry: 88,
    literature: 77,
    history: 81
};

const sub = Object.values(subjects).reduce((sum, num) => sum + num)

console.log(sub)

