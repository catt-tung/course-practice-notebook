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
  arr.push(walletObj.amtCash.oneDollar * 1)
  arr.push(walletObj.amtCash.fiveDollar * 5)
  arr.push(walletObj.amtCash.tenDollar * 10)
  arr.push(walletObj.amtCash.twentyDollar * 20)
  arr.push(walletObj.amtCash.fiftyDollar * 50)
  arr.push(walletObj.amtCash.hundredDollar * 100)
  console.log(arr)
  return console.log(arr.reduce((acc, curVal) => acc + curVal))
}
countMoney(wallet)