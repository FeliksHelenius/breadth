const body = document.querySelector('#root');

const container = document.createElement('div');
container.className = 'nodeContainer';
body.appendChild(container);

const nodes = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l'];
numberOfNodes = nodes.length - 1;
numberOfObstacles = 2; //changeable

for (let i = 0; i < numberOfObstacles; i++) {
  nodes[Math.round(Math.random() * numberOfNodes)] = 'x';
  console.log('ran');
}
//initializing all the nodes inside the graph
nodes.forEach((element) => {
  const node = document.createElement('div');
  node.className = element;
  container.appendChild(node);
  node.style.width = '50px';
  node.style.height = '50px';
  node.style.border = 'solid white';
  node.style.flexGrow = '1';
  node.textContent = element;
  node.style.color = 'white';
});
console.log(document.querySelector('.nodeContainer').children);
