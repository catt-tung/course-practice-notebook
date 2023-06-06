const backpack = {
  name: 'Everyday Backpack',
  volume: 30,
  color: 'grey',
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

console.log('The backpack object:', backpack)
console.log('The pocket number:', backpack.pocketNum)
console.log('Strap length left:', backpack.strapLength.left)

let query = 'pocketNum';
console.log('The pocket number query:', backpack[query])

console.log('Left before: ', backpack.strapLength.left)

backpack.newStrapLength(10, 15)

console.log('Left after: ', backpack.strapLength.left)