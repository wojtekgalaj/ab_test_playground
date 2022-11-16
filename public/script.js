//script

//get querystring

const params = new URLSearchParams(window.location.search);

let version;

if (params.has('version')) {
  if (params.get('version') === 'a') {
    version = 'a';
  } else if (params.get('version') === 'b') {
    version = 'b';
  }
} else {
  version = 'a';
}

//elemnts
const title = document.getElementById('title');
const image = document.getElementById('image');
const button = document.querySelector('button');
const body = document.querySelector('body');
const info = document.getElementsByClassName('info');

if (version === 'a') {
  title.textContent = 'Version A';
} else if (version === 'b') {
  title.textContent = 'Version B';

  image.src = 'hotel_room_b.png';

  button.style.backgroundColor = '#86c9f0';

  body.style.backgroundColor = '#ffffff';

  title.style.color = '#c22d24';
}
