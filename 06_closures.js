// ЗАМЫКАНИЕ !!!!!!!!!!!!!!!!

// momento quando la funzione ha accesso alle variabili che stanno in uno scope genitore
// in pratica la funzione si riempe dei valori da qualche genitore
// in gergo : funzione all'interno di un'altra funzione

// function sayHelloTo(name) {
//   const message = 'Hello ' + name

//   return function () {
//     console.log(message)
//   }
// }

// const helloToDima = sayHelloTo('Dima')
// const helloToTkach = sayHelloTo('Tkach')
// console.log(helloToDima)
// // cosi se richiamiamo le funzioni senza parametri loro ritornano i parametri che hanno presi e salvati all'interno prima
// helloToDima()
// helloToTkach()

// Casi d'uso
// function createFrameworkManager() {
//   const fw = ['Vue', 'React']

//   return {
//     // le due funzioni замыкают в себе значение fw
//     print: function () {
//       console.log(fw.join(' '))
//     },
//     add: function (framework) {
//       fw.push(framework)
//     },
//   }
// }

// const manager = createFrameworkManager()
// // console.log(manager)
// manager.print()
// manager.add('Angular')
// manager.print()

// setTimeout
const fib = [1, 2, 3, 5, 8, 13]
// for (var i = 0; i < fib.length; i++) {
//   setTimeout(function () {
//     console.log(`fib[${i}] = ${fib[i]}`)
//   }, 1500)
// }
// // modi per risolvere - modo let che esiste solo nello scope interno del for
// for (let i = 0; i < fib.length; i++) {
//   setTimeout(function () {
//     console.log(`fib[${i}] = ${fib[i]}`)
//   }, 1500)
// }
// oppure замыкание
for (var i = 0; i < fib.length; i++) {
  // scope esterno
  ;(function (j) {
    // scope interno
    setTimeout(function () {
      console.log(`fib[${j}] = ${fib[j]}`)
    }, 1500)
  })(i)
}
