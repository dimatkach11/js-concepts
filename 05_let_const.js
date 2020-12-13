// Let (ES6)
let a = 'Variable a'
let b = 'Variable b'
var c = 'Variable b'
// block scope
{
  a = 'New Variable A' // modifica la variabile globale fuori dallo scope
  let b = 'Local Variable B' // disponibile solo in questo block scope e non fa conflitto col la variabile b dello scope globale
  var c = 'Local Variable B' // disponibile da per tutto perchè dichiarata con var
  console.log('Scope a: ', a)
  console.log('Scope b: ', b)
  console.log('Scope c: ', c)
}
// out of block scope
console.log('a: ', a)
console.log('b: ', b)
console.log('c: ', c)

// Const (ES6)
// const PORT = 8080
// // PORT = 2000 // darà errore, non si può modificare un tipo primitivo const
// // Per non i primitivi è diverso
// const array = ['ciao', 'mi', 'chiamo', 'Dima']
// array.push('!')
// console.log(array)
// // disponibili metodi come :
// // shift, pop, array.[index] ecc...
// array.shift()
// console.log(array)
// array.pop()
// console.log(array)
// array[0] = 'io'
// console.log(array)

// const obj = {}
// obj.name = 'Dima'
// obj.age = '31'
// console.log(obj)
// obj.age = '32'
// console.log(obj)
// delete obj.name
// console.log(obj)
