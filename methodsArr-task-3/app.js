const MAS = [null, () => {}, [1, 2], {}, 25, 12, null, NaN, BigInt(25n), Symbol('i'), '', 'dfd', undefined];

function filterBy(arr, type, ...arg) {
    if (Array.isArray(arr) && arr.length && type && typeof type === 'string' && type.length) {

        type = type.toLowerCase().trim();

        let mas = arr.filter((val) => {
            return typeof (val) !== type
        })

        if (arg.length) { 
            for (let i = 0; i < arg.length; i++) {
                mas = filterBy(mas, arg[i])
            }
        }
        return mas
    }

    return 'Data is invalide'
}

console.log(filterBy(MAS, 'strIng', 'number  ', 'objEct'));


