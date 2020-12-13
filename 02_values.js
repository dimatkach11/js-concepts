// primitivi

// let a = 42
// let b = a
// b++
// console.log(a)
// console.log(b)

// non primitivi
let a = [1, 2, 3]
let b = a // stesso oggetto
b.push(4) // a avra lo stesso effetto che subisce a
console.log('a', a)
console.log('b', b)
console.log(a === b) // stessi oggetti linkati tra loro

// per evitare ciò si puo fare in questo modo:
let c = a.concat() // diversi oggetti
c.push(5)
console.log('c', c)
let d = [1, 2, 3, 4, 5]
console.log('d', d)
console.log(a === c) // diversi oggetti
