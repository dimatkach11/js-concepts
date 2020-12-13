// 7 types
// null, undefined, boolean, number, string, object, symbol(ES6)
// tutti primetivi a parte object
// typeof()
console.log(typeof 0)
console.log(typeof true)
console.log(typeof 'Javascript')
console.log(typeof undefined)
console.log(typeof {})
console.log(typeof Math)
console.log(typeof Symbol('JS'))
// in realta è null ma ritorna un oggetto
console.log('null return --> ', typeof null)
// in realta è un oggetto ma ritorna function
console.log('object return --> ', typeof function () {})
// in realta è NaN ma ritorna function
console.log('NaN return --> ', typeof NaN)
console.log(undefined * 1)

// differenza undefined vs null
// undefined --> quando la variabile non è definita (var a). Le funzioni che non ritornano niente, ritornano undefined
// null dice che manca l'assegnazione, magari prima era qualcosa ma poi dopo lo abbiamo annullato insirendoci null.

// Utilizzo dei types
let language = 'JavaScript'
if (language) {
  console.log('The best language is', language)
}

// false value : '', 0, null, undefined, NaN, false
console.log(Boolean(''))
console.log(Boolean(0))
console.log(Boolean(null))
console.log(Boolean(undefined))
console.log(Boolean(NaN))
console.log(Boolean(false))
// true
console.log(Boolean([]))
console.log(Boolean({}))
console.log(Boolean(function () {}))
console.log(Boolean(' '))
console.log(Boolean('hello'))
console.log(Boolean(' '))
console.log(Boolean('0'))

// strings and numbers
console.log(1 + '2') // 12
console.log('1' + 2) // 12
console.log('' + 1 + 2) // 12
// ordine è importante
console.log(4 + 10 + 'px') // 14px
console.log(4 + 10 + 'px' + 5 + 10) // 14px510
console.log('' - 1 + 2) // 1 perchè le stringhe non rionoscono l'operatore di sottrazione -
console.log('42px' - 2) // NaN
console.log('8' * '3') // 24 perchè le stringhe non rionoscono l'operatore di sottrazione *
console.log(null + 2) // 2
console.log(undefined + 42) // NaN

// ===== particolarità
console.log(false == '') // true
console.log(false == []) // true
console.log(false == {}) // false
console.log('' == 0) // true
console.log('' == []) // true
console.log('' == {}) // false
console.log(0 == []) // true
console.log(0 == {}) // false
console.log(0 == null) // false
