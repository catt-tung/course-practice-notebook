/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

let wallet = {
  name: 'Liz Claiborne Wallet',
  color: 'purple',
  amtCash: {
    oneDollar: 5,
    fiveDollar: 0,
    tenDollar: 3,
    twentyDollar: 4,
    fiftyDollar: 0,
    hundredDollar: 1,
  },
  cardPocketNum: 14,
  cardNum: 13,
}

function countMoney(walletObj) {
  arr = []
  dollarCash = walletObj.amtCash
  arr.push(dollarCash.oneDollar * 1)
  arr.push(dollarCash.fiveDollar * 5)
  arr.push(dollarCash.tenDollar * 10)
  arr.push(dollarCash.twentyDollar * 20)
  arr.push(dollarCash.fiftyDollar * 50)
  arr.push(dollarCash.hundredDollar * 100)
  console.log(arr)
  return console.log(arr.reduce((acc, curVal) => acc + curVal))
}
countMoney(wallet)