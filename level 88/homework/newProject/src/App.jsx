// 2) შექმენით React - ის პროექტი, შექმენით ორი კომპონენტი 1.AboutMe.jsx, 2.UserStatus.jsx - UserStatus კომპონენტში შექმენით ერთი ცვლადი სახელად 
// isLoggedIn რომელშიც შეინახავთ მნიშვნელობას, ან true ან false, ternary operator - ის გამოყენებით შეამოწმეთ თუ isLoggedIn - ის მნიშვნელობა არის 
// true მაგ შემთხვევაში გამოიძახეთ AboutMe კომპონენტი სხვა შემთხვევაში კი გამოიტანეთ რომ You are not logged in to your account

// AboutMe კომპონენტში უნდა იყოს მოცემული ინფორმაცია თქვენს შესახებ, გაალამაზეთ საიტი ფოტოებით, გამოიყენეთ დღევანდელ გაკვეთილზე განხილული {} 
// მაგალითი <img src={} />

import UserStatus from "./components/UserStatus"

function App() {
    return (
      <main>
        <UserStatus />
      </main>
    )
}

export default App
