// ## Опис завдання
//
// Вам потрібно оформити програму конвертер валют за допомогою пройдених тем.
//
//     Програма повинна вміти переводити 5 валют одна в одну (валюти на ваш розсуд). Користувач вводить спочатку назву валюти, потім вводить суму, і назву валюти в яку хоче перекласти, після чого отримує відповідь (для спілкування з користувачем використовуємо prompt та alert
// Якщо користувач ввів щось неправильно, необхідно повторити введення цієї інформації.
//     Після закінчення конвертації запитати користувача чи хоче він зробити конвертацію ще раз. Якщо так - то повторити всі о'ї. Якщо ні – виконати вихід із програми.

const initialAnswer = confirm("Welcme to our Currency Exchanger. Would you like to have surgery?");

const UAH = 1;
const USD = 26.25;
const EUR = 30.36;
const PLN = 6.50;
const CAD = 20.16;

let currentСurrency = initialAnswer
    ? prompt("What currency would you like to exchange? Example : (UAH , USD, EUR, PLN, CAD)")
    : alert("Have a nice day, see you next time)");

if (!currentСurrency) {
    alert("You didn't make your choice");
    location.reload();

} else {
    currentСurrency = currentСurrency.trim().toUpperCase();

    if (
        currentСurrency === "UAH" ||
        currentСurrency === "USD" ||
        currentСurrency === "EUR" ||
        currentСurrency === "PLN" ||
        currentСurrency === "CAD") {

        let moneyToExchange = +prompt("Enter the amount to exchange. Note : (min sum : 1 ; max sum : 10000)");

        if (!moneyToExchange || typeof (moneyToExchange) !== "number" || moneyToExchange < 1 || moneyToExchange > 10000) {
            alert("Invalid data entered. Please repeat and choose correct sum. Example : 100, 200, 125. Note : (min sum : 1 ; max sum : 10000)");
            location.reload();

        } else {

            let exchangeCurrency = prompt("what currency you would like to buy? Example : (UAH , USD, EUR, PLN, CAD)");

            if (!exchangeCurrency) {
                alert("You didn't make your choice");
                location.reload();

            } else {
                exchangeCurrency = exchangeCurrency.trim().toUpperCase();

                if (
                    exchangeCurrency === "UAH" ||
                    exchangeCurrency === "USD" ||
                    exchangeCurrency === "EUR" ||
                    exchangeCurrency === "PLN" ||
                    exchangeCurrency === "CAD") {

                    if (currentСurrency === exchangeCurrency) {
                        alert("you cannot buy the same currency you offer");
                        location.reload();
                    } else {
                        let currencyForExchange =
                            currentСurrency === "UAH" ? UAH :
                                currentСurrency === "USD" ? USD :
                                    currentСurrency === "EUR" ? EUR :
                                        currentСurrency === "PLN" ? PLN : CAD;

                        let currencyToBuy =
                            exchangeCurrency === "UAH" ? UAH :
                                exchangeCurrency === "USD" ? USD :
                                    exchangeCurrency === "EUR" ? EUR :
                                        exchangeCurrency === "PLN" ? PLN : CAD;

                        let result = (moneyToExchange * (currencyForExchange / currencyToBuy)).toFixed(2);

                        alert(
                            `
                        The operation was successful
                        You give : ${moneyToExchange} ${currentСurrency}
                        You get : ${result} ${exchangeCurrency}`);

                        let makeNewOperation = confirm("Would you like to do any more operations?");

                        if (makeNewOperation) {
                            location.reload();
                        } else {
                            alert("Have a nice day, see you next time)");
                        }

                    }

                } else {
                    alert("Invalid data entered. Please repeat and choose between : (UAH , USD, EUR, PLN, CAD)");
                    location.reload();
                }
            }

        }

    } else {
        alert("Invalid data entered. Please repeat and choose between : (UAH , USD, EUR, PLN, CAD)");
        location.reload();
    }

}




