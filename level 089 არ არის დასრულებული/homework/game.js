const getFromLocalStorage = (key) => {
    return JSON.parse(localStorage.getItem(key))
}

const setFromLocalStorage = (key, value) => {
    return localStorage.setItem(key, JSON.stringify(value));
}

const main = document.getElementById("main");
const adminPanelButton = document.getElementById("admin-panel-button");

const renderMain = () => {
    const thisAccount = getFromLocalStorage("thisAccount");
    main.innerHTML = `
        <div id="shop">
            <h2>Shop</h2>
            <div class="product1">
                <h3>
                    <span class="buisnessName">Lemonade Stand</span>
                    <span class="passiveIncome">Passive Income: $1 / Sec</span> 
                    <span class="limit" id="lemonadeStandLimit">Limit: ${thisAccount.account.lemonadeStandCount} / 50</span>
                    <span class="price">Price: $50</span>
                </h3>
                <button id="buyLemonadeStand">Buy</button>
            </div>

            <div class="product2">
                <h3>
                    <span class="buisnessName">Tech Store</span>
                    <span class="passiveIncome">Passive Income: $10 / Sec</span> 
                    <span class="limit" id="techStoreLimit">Limit: ${thisAccount.account.techStoreCount} / 30</span>
                    <span class="price">Price: $500</span>
                </h3>
                <button id="buyTechStore">Buy</button>
            </div>

            <div class="product3">
                <h3>
                    <span class="buisnessName">Pizza Shop</span>
                    <span class="passiveIncome">Passive Income: $50 / Sec</span> 
                    <span class="limit" id="pizzaShopLimit">Limit: ${thisAccount.account.pizzaShopCount} / 20</span>
                    <span class="price">Price: $5 000</span>
                </h3>
                <button id="buyPizzaShop">Buy</button>
            </div>

            <div class="product4">
                <h3>
                    <span class="buisnessName">Taxi Company</span>
                    <span class="passiveIncome">Passive Income: $250 / Sec</span> 
                    <span class="limit" id="taxiCompanyLimit">Limit: ${thisAccount.account.taxiCompanyCount} / 10</span>
                    <span class="price">Price: $50 000</span>
                </h3>
                <button id="buyTaxiCompany">Buy</button>
            </div>

            <div class="product5">
                <h3>
                    <span class="buisnessName">Shopping Mall</span>
                    <span class="passiveIncome">Passive Income: $1 000 / Sec</span> 
                    <span class="limit" id="shoppingMallLimit">Limit: ${thisAccount.account.shoppingMallCount} / 5</span>
                    <span class="price">Price: $500 000</span>
                </h3>
                <button id="buyShoppingMall">Buy</button>
            </div>
            
        </div>

        <div id="user">
            <div id="userInfo">
                <h2 id="balance">Balance: ${thisAccount.account.balance}</h2>
                <h2 id="passiveIncome">Passive Income: ${thisAccount.account.passiveIncome}</h2>
            </div>

            <div id="clickContainer">
                <div id="click">

                </div>
            </div>
        </div>
    `;

    const balance = document.getElementById("balance");
    const passiveIncome = document.getElementById("passiveIncome");
    const lemonadeStandLimit = document.getElementById("lemonadeStandLimit")
    const techStoreLimit = document.getElementById("techStoreLimit");
    const pizzaShopLimit = document.getElementById("pizzaShopLimit");
    const taxiCompanyLimit = document.getElementById("taxiCompanyLimit");
    const shoppingMallLimit = document.getElementById("shoppingMallLimit");

    const clickImage = document.getElementById("click");
    const buyLemonadeStandBtn = document.getElementById("buyLemonadeStand");
    const buyTechStoreBtn = document.getElementById("buyTechStore");
    const buyPizzaShopBtn = document.getElementById("buyPizzaShop");
    const buyTaxiCompanyBtn = document.getElementById("buyTaxiCompany");
    const buyShoppingMallBtn = document.getElementById("buyShoppingMall");

    clickImage.addEventListener('click', () => {
        const thisAccount = getFromLocalStorage("thisAccount");

        let accountBalance = thisAccount.account.balance;
        accountBalance++;
        
        thisAccount.account.balance = accountBalance;

        balance.textContent = `Balance: ${thisAccount.account.balance}`
        
        setFromLocalStorage("thisAccount", thisAccount);

        const accounts = getFromLocalStorage("accounts");

        let newAccounts = accounts.filter(account => account.id !== thisAccount.account.id);

        newAccounts.push(thisAccount.account);

        setFromLocalStorage("accounts", newAccounts);
    })

    buyLemonadeStandBtn.addEventListener("click", () => {
        const thisAccount = getFromLocalStorage("thisAccount");
        
        if (thisAccount.account.lemonadeStandCount < 50) {
            if (thisAccount.account.balance < 50) {
                alert("You don't have enough funds on your balance");
            } else {
                thisAccount.account.balance -= 50;
                thisAccount.account.passiveIncome += 1;
                
                thisAccount.account.lemonadeStandCount++;

                balance.textContent = `Balance: ${thisAccount.account.balance}`;
                passiveIncome.textContent = `Passive Income: ${thisAccount.account.passiveIncome}`;
                lemonadeStandLimit.textContent = `Limit: ${thisAccount.account.lemonadeStandCount} / 50`;

                setFromLocalStorage("thisAccount", thisAccount);
                }
        } else {
            alert("The Lemonade Stand business limit has been exceeded.")
        }
    })

    buyTechStoreBtn.addEventListener("click", () => {
        const thisAccount = getFromLocalStorage("thisAccount");
        
        if (thisAccount.account.techStoreCount < 30) {
            if (thisAccount.account.balance < 500) {
                alert("You don't have enough funds on your balance");
            } else {
                thisAccount.account.balance -= 500;
                thisAccount.account.passiveIncome += 10;
                
                thisAccount.account.techStoreCount++;

                balance.textContent = `Balance: ${thisAccount.account.balance}`;
                passiveIncome.textContent = `Passive Income: ${thisAccount.account.passiveIncome}`;
                techStoreLimit.textContent = `Limit: ${thisAccount.account.techStoreCount} / 30`;

                setFromLocalStorage("thisAccount", thisAccount);
                }
        } else {
            alert("The Tech Store business limit has been exceeded.");
        }
    })

    buyPizzaShopBtn.addEventListener("click", () => {
        const thisAccount = getFromLocalStorage("thisAccount");
        
        if (thisAccount.account.pizzaShopCount < 20) {
            if (thisAccount.account.balance < 5000) {
                alert("You don't have enough funds on your balance");
            } else {
                thisAccount.account.balance -= 5000;
                thisAccount.account.passiveIncome += 50;
                
                thisAccount.account.pizzaShopCount++;

                balance.textContent = `Balance: ${thisAccount.account.balance}`;
                passiveIncome.textContent = `Passive Income: ${thisAccount.account.passiveIncome}`;
                pizzaShopLimit.textContent = `Limit: ${thisAccount.account.pizzaShopCount} / 20`;

                setFromLocalStorage("thisAccount", thisAccount);
                }
        } else {
            alert("The Pizza Shop business limit has been exceeded.");
        }
    })

    buyTaxiCompanyBtn.addEventListener("click", () => {
        const thisAccount = getFromLocalStorage("thisAccount");
        
        if (thisAccount.account.taxiCompanyCount < 10) {
            if (thisAccount.account.balance < 50000) {
                alert("You don't have enough funds on your balance");
            } else {
                thisAccount.account.balance -= 50000;
                thisAccount.account.passiveIncome += 250;
                
                thisAccount.account.taxiCompanyCount++;

                balance.textContent = `Balance: ${thisAccount.account.balance}`;
                passiveIncome.textContent = `Passive Income: ${thisAccount.account.passiveIncome}`;
                taxiCompanyLimit.textContent = `Limit: ${thisAccount.account.taxiCompanyCount} / 10`;

                setFromLocalStorage("thisAccount", thisAccount);
                }
        } else {
            alert("The Taxi Company business limit has been exceeded.");
        }
    })

    buyShoppingMallBtn.addEventListener("click", () => {
        const thisAccount = getFromLocalStorage("thisAccount");
        
        if (thisAccount.account.shoppingMallCount < 5) {
            if (thisAccount.account.balance < 500000) {
                alert("You don't have enough funds on your balance");
            } else {
                thisAccount.account.balance -= 500000;
                thisAccount.account.passiveIncome += 1000;

                thisAccount.account.shoppingMallCount++;

                balance.textContent = `Balance: ${thisAccount.account.balance}`;
                passiveIncome.textContent = `Passive Income: ${thisAccount.account.passiveIncome}`;
                shoppingMallLimit.textContent = `Limit: ${thisAccount.account.shoppingMallCount} / 5`;

                setFromLocalStorage("thisAccount", thisAccount);
                }
        } else {
            alert("The Shopping Mall business limit has been exceeded.");
        }
    })
}

const updateUserInfo = () => {
    const thisAccount = getFromLocalStorage("thisAccount");

    const balance = document.getElementById("balance");
    const passiveIncome = document.getElementById("passiveIncome");

    if (balance && passiveIncome) {
        balance.textContent = `Balance: ${thisAccount.account.balance}`;
        passiveIncome.textContent = `Passive Income: ${thisAccount.account.passiveIncome}`;
    }
}


document.addEventListener("DOMContentLoaded", () => {
    if (getFromLocalStorage("isLoggedIn") === true) {
        renderMain();

        if (getFromLocalStorage("thisAccount").account.status === "Administrator") {
            adminPanelButton.style.display = "flex";
        }
    }
})

renderMain()

const balance = document.getElementById("balance");

const thisAccount = getFromLocalStorage("thisAccount");

if (thisAccount.account.passiveIncome > 0) {
    setInterval(() => {
        const thisAccount = getFromLocalStorage("thisAccount");

        const newBalance = thisAccount.account.balance + thisAccount.account.passiveIncome;

        thisAccount.account.balance = newBalance;

        balance.textContent = `Balance: ${thisAccount.account.balance}`

        setFromLocalStorage("thisAccount", thisAccount);
            
        const accounts = getFromLocalStorage("accounts");

        let newAccounts = accounts.filter(account => account.id !== thisAccount.account.id);

        newAccounts.push(thisAccount.account);

        setFromLocalStorage("accounts", newAccounts);
        updateUserInfo()
    }, 1000)
}

