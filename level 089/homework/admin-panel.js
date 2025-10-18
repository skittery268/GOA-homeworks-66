const getElementFromLocalStorage = (key) => {
    return JSON.parse(localStorage.getItem(key));
};

const addFromLocalStorage = (key, value) => {
    return localStorage.setItem(key, JSON.stringify(value));
}

const dropDownMenuAccount = document.querySelector("#selectAccount");

const accountOptions = dropDownMenuAccount.querySelector("#selectAccountOptions");
const main = document.getElementById("main");

let dropDownMenuAccountInd = false;
let dropDownMenuActionInd = false;
const accounts = getElementFromLocalStorage("accounts");

if (getElementFromLocalStorage("selectedAccount") === null) {
    const acc = {
        account: {}
    }
    addFromLocalStorage("selectedAccount", acc)
}

const renderForm = (mainForm, form) => {
    mainForm.forEach(form => {
        form.style.display = "none";
    })
    const selectedForm = document.querySelector(`#${form}`);
    selectedForm.style.display = "flex";
}

const renderMain = (account) => {
    if (account.userName === undefined) {
        main.style.display = "none";
    } else {
        main.style.display = "flex";
    }

    

    main.innerHTML = `
        <div id="profile">
            <div class="account">
                <div class="left">
                    <div class="image1"></div>
                    <h2 id="user-name">${account.userName} <span id="user-email">${account.email}</span></h2>
                </div>
                <h4 id="balance">Balance: ${account.balance} | </h4>
                <h4>Passive Income: ${account.passiveIncome}</h4>
                <h3 id="status">${account.status === "Member" ? `<div id="green"></div>` : `<div id="red"></div>`} ${account.status}</h3>
            </div>
            <div class="edit-profile">
                <div class="edit-user">
                    <h3>User name: ${account.userName}</h3>
                </div>

                <div class="edit-user">
                    <h3>User email: ${account.email}</h3>
                </div>

                <div class="edit-user">
                    <h3>User password: ********</h3>
                </div>
            </div>
        </div>
        
        <div id="adminPanel">
            <div id="chooseActionPlatform">
                <div id="selectAction">
                    <div id="selectActionText">Choose Action</div>
                    <div id="selectActionOptions">
                        <div class="option1" value="balanceForm">Balance</div>
                        <div class="option1" value="userName">User Name</div>
                        <div class="option1" value="lemonadeStand">Lemonade Stand</div>
                        <div class="option1" value="techStore">Tech Store</div>
                        <div class="option1" value="pizzaShop">Pizza Shop</div>
                        <div class="option1" value="taxiCompany">Taxi Company</div>
                        <div class="option1" value="shoppingMall">Shopping Mall</div>
                    </div>
                </div>
            </div>
            <div id="forms">
                <form class="form" id="balanceForm">
                    <h2 style="margin: 0px; padding: 0px;">Balance</h2>
                    <input type="number" name="balance" placeholder="Enter new balance">
                    <button type="submit">Accept</button>
                </form>

                <form class="form" id="lemonadeStand">
                    <h2 style="margin: 0px; padding: 0px;">Lemonade Stand Buizness</h2>
                    <input type="number" name="lemonadeStand" placeholder="Enter new Lemonade Stand Count">
                    <button type="submit">Accept</button>
                </form>

                <form class="form" id="techStore">
                    <h2 style="margin: 0px; padding: 0px;">Tech Store Buizness</h2>
                    <input type="number" name="techStore" placeholder="Enter new Tech Store Count">
                    <button type="submit">Accept</button>
                </form>

                <form class="form" id="pizzaShop">
                    <h2 style="margin: 0px; padding: 0px;">Pizza Shop Buizness</h2>
                    <input type="number" name="pizzaShop" placeholder="Enter new Pizza Shop Count">
                    <button type="submit">Accept</button>
                </form>

                <form class="form" id="taxiCompany">
                    <h2 style="margin: 0px; padding: 0px;">Taxi Company Buizness</h2>
                    <input type="number" name="taxiCompany" placeholder="Enter new Taxi Company Count">
                    <button type="submit">Accept</button>
                </form>

                <form class="form" id="shoppingMall">
                    <h2 style="margin: 0px; padding: 0px;">Shopping Mall Buizness</h2>
                    <input type="number" name="shoppingMall" placeholder="Enter new Shopping Mall Count">
                    <button type="submit">Accept</button>
                </form>

                <form class="form" id="userName">
                    <h2 style="margin: 0px; padding: 0px;">User Name</h2>
                    <input type="text" name="userName" placeholder="Enter new User Name">
                    <button type="submit">Accept</button>
                </form>
            </div>
        </div>
    `
    const dropDownMenuAction = document.querySelector("#chooseActionPlatform");

    const actionOptions = dropDownMenuAction.querySelector("#selectActionOptions");
    
    // forms
    const balanceForm = document.getElementById("balanceForm");
    const lemonadeStandForm = document.getElementById("lemonadeStand");
    const techStoreForm = document.getElementById("techStore");
    const pizzaShopForm = document.getElementById("pizzaShop");
    const taxiCompanyForm = document.getElementById("taxiCompany");
    const shoppingMallForm = document.getElementById("shoppingMall");
    const userNameForm = document.getElementById("userName");

    dropDownMenuAction.addEventListener("click", (e) => {
        if (dropDownMenuActionInd) {
            actionOptions.style.display = "none";
            dropDownMenuActionInd = false;
        } else {
            actionOptions.style.display = "flex";
            dropDownMenuActionInd = true;
        }

        const options = document.querySelectorAll(".option1");
        options.forEach(option => {
            option.addEventListener("click", () => {
                const optValue = option.getAttribute("value");
                const mainForms = [balanceForm, lemonadeStandForm, techStoreForm, pizzaShopForm, taxiCompanyForm, shoppingMallForm, userNameForm];
                renderForm(mainForms, optValue);
            })
        })

        e.stopPropagation();
    })

    balanceForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const newBalance = balanceForm.balance.value;

        const accounts = getElementFromLocalStorage("accounts");
        const selectedAccount = getElementFromLocalStorage("selectedAccount");

        selectedAccount.account.balance += parseInt(newBalance);

        const newAccountsArray = accounts.filter(acc => acc.email !== selectedAccount.account.email);
        newAccountsArray.push(selectedAccount.account);
        addFromLocalStorage("accounts", newAccountsArray);
        addFromLocalStorage("selectedAccount", selectedAccount);
        renderMain(selectedAccount.account);
    })

    lemonadeStandForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const newLemonadeStand = lemonadeStandForm.lemonadeStand.value;
        const accounts = getElementFromLocalStorage("accounts");
        const selectedAccount = getElementFromLocalStorage("selectedAccount");

        selectedAccount.account.lemonadeStandCount = parseInt(newLemonadeStand);
        selectedAccount.account.passiveIncome = selectedAccount.account.lemonadeStandCount + selectedAccount.account.techStoreCount * 10 + selectedAccount.account.pizzaShopCount * 50 + selectedAccount.account.taxiCompanyCount * 250 + selectedAccount.account.shoppingMallCount * 1000;
        const newAccountsArray = accounts.filter(acc => acc.email !== selectedAccount.account.email);
        newAccountsArray.push(selectedAccount.account);
        addFromLocalStorage("accounts", newAccountsArray);
        addFromLocalStorage("selectedAccount", selectedAccount);
        renderMain(selectedAccount.account);
    })

    techStoreForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const newTechStore = techStoreForm.techStore.value;
        const accounts = getElementFromLocalStorage("accounts");
        const selectedAccount = getElementFromLocalStorage("selectedAccount");
        selectedAccount.account.techStoreCount = parseInt(newTechStore);
        selectedAccount.account.passiveIncome = selectedAccount.account.lemonadeStandCount + selectedAccount.account.techStoreCount * 10 + selectedAccount.account.pizzaShopCount * 50 + selectedAccount.account.taxiCompanyCount * 250 + selectedAccount.account.shoppingMallCount * 1000;
        const newAccountsArray = accounts.filter(acc => acc.email !== selectedAccount.account.email);
        newAccountsArray.push(selectedAccount.account);
        addFromLocalStorage("accounts", newAccountsArray);
        addFromLocalStorage("selectedAccount", selectedAccount);
        renderMain(selectedAccount.account);
    });

    pizzaShopForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const newPizzaShop = pizzaShopForm.pizzaShop.value;
        const accounts = getElementFromLocalStorage("accounts");
        const selectedAccount = getElementFromLocalStorage("selectedAccount");
        selectedAccount.account.pizzaShopCount = parseInt(newPizzaShop);
        selectedAccount.account.passiveIncome = selectedAccount.account.lemonadeStandCount + selectedAccount.account.techStoreCount * 10 + selectedAccount.account.pizzaShopCount * 50 + selectedAccount.account.taxiCompanyCount * 250 + selectedAccount.account.shoppingMallCount * 1000;
        const newAccountsArray = accounts.filter(acc => acc.email !== selectedAccount.account.email);
        newAccountsArray.push(selectedAccount.account);
        addFromLocalStorage("accounts", newAccountsArray);
        addFromLocalStorage("selectedAccount", selectedAccount);
        renderMain(selectedAccount.account);
    });

    taxiCompanyForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const newTaxiCompany = taxiCompanyForm.taxiCompany.value;
        const accounts = getElementFromLocalStorage("accounts");
        const selectedAccount = getElementFromLocalStorage("selectedAccount");
        selectedAccount.account.taxiCompanyCount = parseInt(newTaxiCompany);
        selectedAccount.account.passiveIncome = selectedAccount.account.lemonadeStandCount + selectedAccount.account.techStoreCount * 10 + selectedAccount.account.pizzaShopCount * 50 + selectedAccount.account.taxiCompanyCount * 250 + selectedAccount.account.shoppingMallCount * 1000;
        const newAccountsArray = accounts.filter(acc => acc.email !== selectedAccount.account.email);
        newAccountsArray.push(selectedAccount.account);
        addFromLocalStorage("accounts", newAccountsArray);
        addFromLocalStorage("selectedAccount", selectedAccount);
        renderMain(selectedAccount.account);
    });

    shoppingMallForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const newShoppingMall = shoppingMallForm.shoppingMall.value;
        const accounts = getElementFromLocalStorage("accounts");
        const selectedAccount = getElementFromLocalStorage("selectedAccount");
        selectedAccount.account.shoppingMallCount = parseInt(newShoppingMall);
        selectedAccount.account.passiveIncome = selectedAccount.account.lemonadeStandCount + selectedAccount.account.techStoreCount * 10 + selectedAccount.account.pizzaShopCount * 50 + selectedAccount.account.taxiCompanyCount * 250 + selectedAccount.account.shoppingMallCount * 1000;
        const newAccountsArray = accounts.filter(acc => acc.email !== selectedAccount.account.email);
        newAccountsArray.push(selectedAccount.account);
        addFromLocalStorage("accounts", newAccountsArray);
        addFromLocalStorage("selectedAccount", selectedAccount);
        renderMain(selectedAccount.account);
    });

    userNameForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const newUserName = userNameForm.userName.value;
        const accounts = getElementFromLocalStorage("accounts");
        const selectedAccount = getElementFromLocalStorage("selectedAccount");
        selectedAccount.account.userName = newUserName;
        const newAccountsArray = accounts.filter(acc => acc.email !== selectedAccount.account.email);
        newAccountsArray.push(selectedAccount.account);
        addFromLocalStorage("accounts", newAccountsArray);
        addFromLocalStorage("selectedAccount", selectedAccount);
        renderMain(selectedAccount.account);
    });

    document.addEventListener('click', () => {
        accountOptions.style.display = "none";
        actionOptions.style.display = "none";
        dropDownMenuAccountInd = false;
        dropDownMenuActionInd = false;
    })
}

dropDownMenuAccount.addEventListener('click', (e) => {
    if (dropDownMenuAccountInd) {
        accountOptions.style.display = "none";
        dropDownMenuAccountInd = false;
    } else {
        accountOptions.style.display = "flex";
        dropDownMenuAccountInd = true;
        accountOptions.innerHTML = "";
        accounts.forEach(account => {
            accountOptions.innerHTML += `
                <div class="option" value="${account.email}">${account.userName}</div>
            `;
        })
    }
    e.stopPropagation()

    const options = document.querySelectorAll(".option");
    options.forEach(option => {
        option.addEventListener("click", () => {
            main.style.display = "flex";
            const optValue = option.getAttribute("value");
            const selectAccaunt = accounts.find(account => account.email === optValue);
            const correctSelectedAccount = {
                account: selectAccaunt
            }
            addFromLocalStorage("selectedAccount", correctSelectedAccount);
            renderMain(selectAccaunt);
        })
    })
})

document.addEventListener('click', () => {
    accountOptions.style.display = "none";
    dropDownMenuAccountInd = false;
})

const selectAccaunt = getElementFromLocalStorage("selectedAccount")

if (!selectAccaunt.account) {
    main.style.display = "none";
}

renderMain(selectAccaunt.account)

document.addEventListener("DOMContentLoaded", () => {
    renderMain(selectAccaunt.account)
})