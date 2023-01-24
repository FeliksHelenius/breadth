const body = document.querySelector('body');
const container = document.querySelector('.container');

// const containerWidth = Math.round(container.getClientRects()[0].width);
// const containerHeight = Math.round(container.getClientRects()[0].height);

class node {
  constructor({ name, x, y }) {
    this.name = name;
    this.x = '';
    this.y = '';
    this.X = x;
    this.Y = y;
  }
  create() {
    let node = document.createElement('div');
    node.className = this.name;
    node.style.position = 'relative';
    node.style.background = 'black';

    container.appendChild(node);
    this.x = node.getBoundingClientRect().x;
    this.y = node.getBoundingClientRect().y;
    console.log(this.x + 'x', this.y + 'y');
  }
}
const test = new node({
  name: 'first',
  x: 0,
  y: 0,
});
test.create();

// console.log(document.elementFromPoint(461, 290));
function checkPositions() {}
