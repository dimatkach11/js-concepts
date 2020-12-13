// event loop e callstack

const first = () => console.log('First')
const second = () => console.log('Second')
const third = () => console.log('Third')
const four = () => console.log('Four')

// first()
// second()
// third()

// setTimeout async
//interprete arrivato qua mette in callstack la funzione first
// essa si esegue e quando ha finito l'interprete mostra il risultato
first()
// arriva a set time out e vede che è assincrona, allora la mette in un api esterno, dopo di che quando il timeout finisce, l'interprete vede che dentro c'è una funzione che deve essere eseguita e la mette in coda dei callback.
setTimeout(second, 10) // si eseguira per ultima
setTimeout(third, 0) // si eseguira per penultima, perche third sarà messa prima in coda dei callback rispetto a second per via del timeout. Attenzione se metti una differenza piccola di timeout ciò non è detto ad esempio (10, 9)
four()
//quando finiscono i callstack l'interprete prende dalla coda i callback e li mette in callstack ed è per questo che la seconda funzione si esegue per ultima
