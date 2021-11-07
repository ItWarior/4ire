// Реалізувати функцію підрахунку n-го узагальненого числа Фібоначчі.
//
//     Написати функцію для підрахунку n-го узагальненого [числа Фібоначчі]. Аргументами на вхід будуть три числа – F0, F1, n, де F0, F1 – перші два числа послідовності (можуть бути будь-якими цілими числами), n – порядковий номер числа Фібоначчі, яке треба знайти. Послідовність будуватиметься за наступним правилом F2 = F0 + F1, F3 = F1 + F2 і так далі.
//
//     Вважати за допомогою модального вікна браузера число, яке введе користувач (n).
//
//     За допомогою функції порахувати n-е число в узагальненій послідовності Фібоначчі та вивести його на екран.
//
//     Користувач може ввести від'ємне число - результат треба порахувати за таким самим правилом (F-1 = F-3 + F-2).


const findByIndex = valNormPromptNumber("Enter you Fibonacci number");
const firstNumber = valNormPromptNumber("Enter the first number in the list");
const secondNumber = valNormPromptNumber("Enter the second number in the list");


function valNormPromptNumber(message) {
    let getPromptNumber = prompt(message);

    if (getPromptNumber) {
        getPromptNumber = Number(getPromptNumber);

        if (!Number.isNaN(+getPromptNumber) && Number.isInteger(getPromptNumber)) {
            return getPromptNumber

        }else if (!Number.isInteger(getPromptNumber)){
            alert("You must write an integer");
            return valNormPromptNumber(message)

        }
    }else if (getPromptNumber === null){
        return null

    }else{
        alert("You have not recorded any information");
        return valNormPromptNumber(message)
    }

}

function findFibonacciNumber(n, F0, F1) {
    typeof n === 'number' ? n : n = 0;
    typeof F0 === 'number' ? F0 : F0 = 0;
    typeof F1 === 'number' ? F1 : F1 = 1;

   if (n === 0){
       alert(F0)

   }else if(n === 1 || n === -1){
       alert(F1)

   }else if(n > 1){
       let F2 = null;

       for (let i = 2; i <= n; i++) {
           F2 = F0 + F1;
           F0 = F1;
           F1 = F2;

       }
        alert(F2)

   }else if(n < -1){
       let F2 = null;

       for (let i = -2; i >= n; i--) {
           F2 = F0 - F1;
           F0 = F1;
           F1 = F2;

       }
       alert(F2)

   }else{
       alert("Data invalid")
   }
}

findFibonacciNumber(findByIndex, firstNumber, secondNumber);

