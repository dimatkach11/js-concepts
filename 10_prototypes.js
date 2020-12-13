// si utilizza in due differernti contesti
// ogni oggetto ha il suo prototype che eredità dal genitore
// ES6 __proto__  === Object.getPrototypeOf() ES5

// ptototype delle funzioni che si usa per dare le proprietà alle oggetti che si creano attraverso New

// function Cat(name, color) {
//   this.name = name
//   this.color = color
// }

// Cat.prototype.voice = function () {
//   console.log(`Cat ${this.name} says miau`)
// }

// const cat = new Cat('Gatto', 'white')

// console.log(Cat.prototype)
// console.log(cat)
// // voice non lo trova in Cat ma lo trova in prototype di Cat
// console.log(cat.__proto__)
// console.log(cat.__proto__ === Cat.prototype) // true
// console.log(cat.constructor) // mostra il genitore [Function: Cat]
// cat.voice()

// ================
// function Person() {}
// Person.prototype.legs = 2
// Person.prototype.skin = 'white'

// const person = new Person()
// person.name = 'Dmytro'

// console.log('skin' in person) // true, perchè basta che sia nell'oggetto o nel suo prototype
// // cosa sta dove( hasOwnProperty )
// console.log(person.hasOwnProperty('name')) // true, solo dell'oggetto
// console.log(person.hasOwnProperty('legs')) // false, perchè sta in prototype e non è proprio del oggetto

// Objecte.create() permette di creare oggetti a partire da un prototype gia esistente
let proto = { year: 2020 }
const myYear = Object.create(proto) // mette in prototypes

console.log(myYear.year)
// console.log(myYear.hasOwnProperty('year')) // false
// console.log(myYear.__proto__ === proto) // true

// prima particolarità
proto.year = 2021 // cosi proto e myYear rimangono collegati
console.log(myYear.year)
// seconda particolarità
proto = { year: 1989 } // cosi proto e myYear non sono più collegati perchè creo con la riassegnazione a proto un altro oggetto che non sarà più lincato a myYear
console.log(myYear.year)
