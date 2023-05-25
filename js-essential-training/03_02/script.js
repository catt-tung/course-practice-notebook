let backpack = {
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

console.log(backpack.lidOpen)


function openBackpack () {
  if (backpack.lidOpen === true) {
    console.log('The backpack was already open')
  };
  if (backpack.lidOpen === false) {
    backpack.toggleLid(true)
    console.log(`The backpack is now open, see? LidOpen = ${backpack.lidOpen}`)
  };
};

openBackpack()