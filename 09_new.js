function Cat(color, name) {
  this.color = color
  this.name = name
}

// const cat = new Cat('black', 'gatto')
// console.log(cat)

// come funziona e come creare un proprio new
// function myNew(constructor, ...args) {
//   const obj = {}
//   Object.setPrototypeOf(obj, constructor.prototype)
//   return constructor.apply(obj, args) || obj
// }

// const cat = myNew(Cat, 'black', 'gatto')
// console.log(cat)

