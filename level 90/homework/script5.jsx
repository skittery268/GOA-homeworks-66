// 5) codecademy - ში default props - ის სექციის გავლის შემდეგ გააკეთეთ მასზე მაგალითები და ახსენით კომენტარების სახით

function Example({text="This is default text"}) {
    const handlClick = () => {
        alert(text)
    }
    
    return (
        <button onClick={handlClick}>Click Me</button>
    )
}

export default Example

// default props - ი ნიშნავს რაიმე props - ის კუთვნილებისთვის დეფოლტური მნიშვნელობის მინიჭება.

