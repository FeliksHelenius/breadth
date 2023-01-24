const body = document.querySelector('body');
const container = document.querySelector('.container');

const containerWidth = Math.round(container.getClientRects()[0].width);
const containerHeight = Math.round(container.getClientRects()[0].height);

class node {
  constructor({ name, x, y }) {
    this.name = name;
    this.width = 50;
    this.height = 50;
    this.x = x * this.width;
    this.y = y * this.height;
    this.X = x;
    this.Y = y;
  }

  create() {
    let node = document.createElement('div');
    node.className = this.name;
    node.style.position = 'relative';
    node.style.background = 'black';

    //size
    node.style.width = this.width;
    node.style.height = this.height;

    //position
    node.style.top = this.y;
    node.style.left = this.x;
    container.appendChild(node);
  }
}
const test = new node({
  name: 'first',
  x: 0,
  y: 0,
});
test.create();
// console.log(nodeOne.X, 'X', nodeOne.Y, 'Y');

function idk(num1, num2) {
  console.log(num1, num2);
}

function checkPositions(x, y) {
  x = x * 50;
  y = y * 50;

  console.log();
}
console.log(document.querySelector('.first').getBoundingClientRect());
// console.log(document.querySelector('.first').offsetLeft);
console.log(document.elementFromPoint(298, 199));

if (checkPositions(0, 0) == 'div') {
}
