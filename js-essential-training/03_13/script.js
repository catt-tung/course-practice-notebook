import Backpack from "./Backpack.js";

const everydayPack = new Backpack(
  'Everyday Backpack',
  30,
  'grey',
  15,
  26,
  26,
  false,
  'December 5, 2020 15:00:00 EST'
)

let rightNow = new Date()

console.log(rightNow.toDateString)
console.log(everydayPack)
console.log("Date acquired:", everydayPack.dateAcquired)