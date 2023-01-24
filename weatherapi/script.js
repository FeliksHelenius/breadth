const form = document.querySelector('.form');
const button = document.querySelector('.submit');
let answer = '';
form.addEventListener('submit', (e) => {
  e.preventDefault();
  answer = form.answer.value;
  form.reset();
});

console.log(answer);

const apikey = 'qBU3EAEpRaj5Bn1ldCjDlsZH07pxRNgC';
// ${locationKey}?apikey=qBU3EAEpRaj5Bn1ldCjDlsZH07pxRNgC&language=en-us&details=false&metric=true`;
locationKey = '46';
let url = `http://dataservice.accuweather.com/locations/v1/cities/search`;

fetch(`${url}?apikey=${apikey}&q=stockholm`)
  .then((response) => {
    response.json();
  })
  .then((res) => {
    console.log(res);
  });
