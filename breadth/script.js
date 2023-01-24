const root = document.querySelector('#root');
let results = [];
// 600px width 600px height
for (let i = 0; i < 36; i++) {
  let node = document.createElement('div');
  node.className = 'node';
  root.appendChild(node);
}

//offsetLeft offsetTop
let rootX = Math.round(root.getBoundingClientRect().x);
let rootY = Math.round(root.getBoundingClientRect().y);
//choose which Y section to check
function checkX(y) {
  y = y * 100;
  for (i = 0; i < 6; i++) {
    let x = i * 100;
    let currentNode = document.elementFromPoint(rootX + x, rootY + y);
    results.push(currentNode);
  }
}
checkX(0);

console.log(results);

window.addEventListener('click', (e) => {
  console.log(e.clientX + 'x', e.clientY + 'y');
  console.log(document.elementFromPoint(e.clientX, e.clientY));
});
// console.log(test.getBoundingClientRect());
// console.log(x + 'x');
