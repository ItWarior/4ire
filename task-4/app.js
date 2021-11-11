//варіант 1
// введення може відбуватись різними мовами
// але не досконала перевірка на символи
function palindrom(str) {
    if (typeof str === 'string' && str) {
        str = str.trim().toLowerCase();
        let strMas = [];

        for (let i = 0; i < str.length; i++) {
            if (str[i] !== ' ' && str[i] !== '\'' && str[i] !== ',' && str[i] !== '.' && str[i] !== '!' && str[i] !== '?') {
                strMas.push(str[i])
            }
        }

        let newStr = strMas.reverse().join('');
        str = strMas.join('');

        if (newStr === str) {
            return true
        }

        return false
    }
    return 'Data is invalide'
}

console.log(palindrom("кит Н'а морі, романтик.!?"));

//варіант 2
// введення може відбуватись лише англійською
// але за допомогою regexp ми можемо вибрати лише букви з тексту

function nextPalindrom(str) {
    if (str && typeof str === 'string') {

        str = str.trim().toLowerCase();
        const regexp = new RegExp(/\w/, 'g');
        str = str.match(regexp).join('');

        let flag = true;

        for (let i = 0, x = str.length - 1; i !== x, i < x; i++, x--) {

            if (str[i] !== str[x]) {
                flag = false;
                return flag
            }

        }
        return flag
    }
}

console.log(nextPalindrom("tik Kit ! . *"));
