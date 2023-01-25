const root = document.querySelector('#root');
const rootX = Math.round(root.getBoundingClientRect().x);
const rootY = Math.round(root.getBoundingClientRect().y);
const results = {
  0: [],
  1: [],
  2: [],
  3: [],
  4: [],
  5: [],
};
// not the actual number of obstacles
const obstacles = 15;

for (let i = 0; i < 36; i++) {
  let node = document.createElement('div');
  let random = Math.round(Math.random() * obstacles);
  random == 0
    ? ((node.className = 'obstacle'), (node.style.background = 'gray'))
    : (node.className = 'node');
  root.appendChild(node);
}
function establishMap() {
  function checkX(y) {
    y = y * 100;
    for (i = 0; i < 6; i++) {
      let x = i * 100;
      let currentNode = document.elementFromPoint(rootX + x, rootY + y);
      // currentNode.textContent = x + y + currentNode.className;
      results[y / 100].push(currentNode);
    }
  }
  for (let i = 0; i < 6; i++) {
    checkX(i);
  }
}
establishMap();

function findPath(results, startX, startY) {
  let stack = [[startY, startX]];
  let visited = [[startY, startX]];
  let path = [[startY, startX]];
  let dx = [0, 0, 1, -1];
  let dy = [1, -1, 0, 0];

  while (stack.length > 0) {
    let current = stack.pop();
    let x = current[1];
    let y = current[0];

    for (let i = 0; i < 4; i++) {
      let newX = x + dx[i];
      let newY = y + dy[i];
      if (
        newY >= 0 &&
        newY < 6 &&
        newX >= 0 &&
        newX < results[0].length &&
        !visited.find((p) => p[0] == newY && p[1] == newX) &&
        results[newY][newX].className != 'obstacle'
      ) {
        stack.push([newY, newX]);
        visited.push([newY, newX]);
        path.push([newY, newX]);
      }
    }
  }
  return path;
}
let answer = findPath(results, 0, 0);
console.log(answer);
count = 0;
answer.forEach((element) => {
  setTimeout(() => {
    walk(element[0], element[1]);
  }, 1000 + count * 200);
  count++;
});
function walk(y, x) {
  results[y][x].style.background = 'red';
}
//just to check what you're clicking on
window.addEventListener('click', (e) => {
  console.log(e.clientX + 'x', e.clientY + 'y');
  console.log(document.elementFromPoint(e.clientX, e.clientY));
});
