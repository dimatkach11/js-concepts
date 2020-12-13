// definisce come la funzione è stata chiamata, in che contesto,
// this, call, aply, bind

// const person = {
//   surname: 'Stark',
//   knows: function (what, name) {
//     console.log(`Tu ${what} sai, ${name} ${this.surname}`) // this creata nel contesto di person sara proprio person
//   },
// }

// person.knows('tutto', 'Bran')

// const john = { surname: 'Snow' }
// person.knows.call(john, 'niente', 'Djon') // utilizza i dati da un'altro contesto che è un oggetto
// person.knows.apply(john, ['niente', 'Djon']) // utilizza i dati da un'altro contesto che è un oggetto
// //
// person.knows.call(john, ...['niente', 'Djon']) // spread
// //
// person.knows.bind(john, 'niente', 'Djon')() // ritorna una nuova funzione che possiamo richiamare quando vogliamo
// const bound = person.knows.bind(john, 'niente', 'Djon')
// bound()
// ==============
//creazione di una classe attraverso ES5 sintax
// function Person(name, age) {
//   this.name = name
//   this.age = age

//   console.log(this)
// }

// const elena = new Person('Elena', 20) // instance of Person class

// binding
// explicit
// function logThis() {
//   console.log(this) // contesto
// }

// const obj = { num: 42 }
// // come dare il contesto, modi:
// logThis.apply(obj)
// logThis.call(obj)
// logThis.bind(obj)()

// implicit
// const animal = {
//   leg: 4,
//   logThis: function () {
//     console.log(this)
//   },
// }

// animal.logThis()

// arrow
function Cat(color) {
  this.color = color
  console.log('This', this)
  // ES6
  ;(() => console.log('Arrow this', this))()
}

new Cat('red')
