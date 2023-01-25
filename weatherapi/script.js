// create a 6x6 map
let map = [];
for (let i = 0; i < 6; i++) {
  map[i] = [];
  for (let j = 0; j < 6; j++) {
    map[i][j] = 0;
  }
}

// place obstacles inside the map at random position
let obstacleCount = 0;
while (obstacleCount < 6) {
  let x = Math.floor(Math.random() * 6);
  let y = Math.floor(Math.random() * 6);
  if (map[x][y] === 0) {
    map[x][y] = 1;
    obstacleCount++;
  }
}

// calculate the shortest path to traverse the whole map without touching the obstacles
let path = [];
let current = [0, 0];
let next = [0, 0];
let visited = [];
for (let i = 0; i < 6; i++) {
  visited[i] = [];
  for (let j = 0; j < 6; j++) {
    visited[i][j] = 0;
  }
}

let queue = [];
queue.push(current);
visited[current[0]][current[1]] = 1;

while (queue.length > 0) {
  current = queue.shift();
  path.push(current);
  if (current[0] === 5 && current[1] === 5) {
    break;
  }
  // up
  next = [current[0] - 1, current[1]];
  if (
    next[0] >= 0 &&
    map[next[0]][next[1]] === 0 &&
    visited[next[0]][next[1]] === 0
  ) {
    queue.push(next);
    visited[next[0]][next[1]] = 1;
  }
  // down
  next = [current[0] + 1, current[1]];
  if (
    next[0] < 6 &&
    map[next[0]][next[1]] === 0 &&
    visited[next[0]][next[1]] === 0
  ) {
    queue.push(next);
    visited[next[0]][next[1]] = 1;
  }
  // left
  next = [current[0], current[1] - 1];
  if (
    next[1] >= 0 &&
    map[next[0]][next[1]] === 0 &&
    visited[next[0]][next[1]] === 0
  ) {
    queue.push(next);
    visited[next[0]][next[1]] = 1;
  }
  // right
  next = [current[0], current[1] + 1];
  if (
    next[1] < 6 &&
    map[next[0]][next[1]] === 0 &&
    visited[next[0]][next[1]] === 0
  ) {
    queue.push(next);
    visited[next[0]][next[1]] = 1;
  }
}

// visually illustrate the map and draw the traversing path using html and css
let mapDiv = document.getElementById('map');
let pathDiv = document.getElementById('path');

for (let i = 0; i < 6; i++) {
  for (let j = 0; j < 6; j++) {
    let div = document.createElement('div');
    div.className = 'cell';
    if (map[i][j] === 1) {
      div.className += ' obstacle';
    }
    mapDiv.appendChild(div);
  }
}

for (let i = 0; i < path.length; i++) {
  let div = document.createElement('div');
  div.className = 'path';
  div.style.top = path[i][0] * 100 + 'px';
  div.style.left = path[i][1] * 100 + 'px';
  pathDiv.appendChild(div);

  setTimeout(() => {
    div.style.background = 'red';
  }, 1000 + i * 100);
}
