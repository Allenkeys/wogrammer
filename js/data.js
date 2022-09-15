const programs = [
  {
    icon: '/images/icon1.png',
    title: 'Lecture',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
  },
  {
    icon: '/images/icon2.png',
    title: 'capstone',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
  },
  {
    icon: '/images/icon3.png',
    title: 'forum',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
  },
  {
    icon: '/images/icon4.png',
    title: 'workshop',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
  },
  {
    icon: '/images/icon5.png',
    title: 'projects',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
  },
];

const speakers = [
  {
    image: '/images/speaker1.png',
    name: 'Yochai Benkler',
    job: 'Institute for Professional Excellence in Coaching',
    bio: 'A web platform for practical advice and inspiring stories to encourage young women into tech',
  },
  {
    image: '/images/speaker2.png',
    name: 'Kilnan Chon',
    job: 'Institute for Professional Excellence in Coaching',
    bio: 'A web platform for practical advice and inspiring stories to encourage young women into tech',
  },
  {
    image: '/images/speaker3.png',
    name: 'Soh Noh',
    job: 'Institute for Professional Excellence in Coaching',
    bio: 'A web platform for practical advice and inspiring stories to encourage young women into tech',
  },
  {
    image: '/images/speaker4.png',
    name: 'Julia Leda',
    job: 'Institute for Professional Excellence in Coaching',
    bio: 'A web platform for practical advice and inspiring stories to encourage young women into tech',
  },
  {
    image: './images/speaker5.png',
    name: 'Lila Tret',
    job: 'Institute for Professional Excellence in Coaching',
    bio: 'A web platform for practical advice and inspiring stories to encourage young women into tech',
  },
  {
    image: '/images/speaker6.png',
    name: 'Ryan Merkley',
    job: 'Institute for Professional Excellence in Coaching',
    bio: 'A web platform for practical advice and inspiring stories to encourage young women into tech',
  },
];

const sponsors = ['./images/sponsor1.png', './images/google.png', './images/naver.png', './images/kakao.png', './images/airbnb.png'];

const programTile = document.querySelector('.program');
const speakerTile = document.querySelector('.speakers-section');
const sponsorTile = document.querySelector('.sponsors-container');

function createProgram() {
  programs.forEach((program) => {
    const cards = document.createElement('div');
    cards.classList.add('program-container');

    cards.innerHTML = `<img src=${program.icon} alt="">
<h3>${program.title}</h3>
<p>${program.description}</p>`;

    programTile.appendChild(cards);
  });
}

function createSpeaker() {
  speakers.forEach((speaker) => {
    const cards = document.createElement('div');
    cards.classList.add('speaker');

    cards.innerHTML = `<img class="speaker-image" src=${speaker.image} alt="This is featured speaker image"/>
<div id="about">
<h2 class="speaker-name">${speaker.name}</h2>
<p class="speaker-info">${speaker.job}</p>
<p id="dots">......</p>
<p class="speaker-bio">${speaker.bio}</p>
</div>`;

    speakerTile.appendChild(cards);
  });
}

function createSponsor() {
  sponsors.forEach((sponsor) => {
    const cards = document.createElement('div');
    cards.classList.add('sponsors');

    cards.innerHTML = `<img class="sponsors-image" src=${sponsor} alt="This is featured speaker image"/>`;

    sponsorTile.appendChild(cards);
  });
}

createProgram();
createSpeaker();
createSponsor();