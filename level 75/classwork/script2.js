// 2) იგივე დავალება ამ შემთხვევაში უბრალოდ გამოიძახეთ reject და უარყოფილი დაპირების სამართაავად გამოიყენეთ catch მეთოდი

function createPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Hello")
        }, 5000);
    });
};

const prom = createPromise();

prom
    .then((value) => console.log(value))
    .catch(reason => console.log(reason));

