// Immediate Invoked Function Expression
// circondate da parentesi tonde ()

let result = []

// for (var i = 0; i < 5; i++) {
//   result.push(function () {
//     console.log(i)
//   })
// }

// result[0]()
// result[4]()
// questo succede perchè quando richiamiamo la funzione all'interno dell'array, essa si riferisce alla var i = 5 globale e quindi sarà sempre uguale a 5, che è l'ultimo valore a cui si è fermata nel ciclo for.

// modi per risolvere: usare let al posto di var che non è più locale ma esiste solo nello scope del for.

// oppure : iife che si legge i if e
for (var i = 0; i < 5; i++) {
  // scope esterno
  ;(function (j) {
    // scope interno
    result.push(function () {
      console.log(j)
    })
  })(i)
}

result[0]()
result[2]()
result[4]()
