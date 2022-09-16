const sponsors = ['./images/sponsor1.png', './images/google.png', './images/naver.png', './images/kakao.png', './images/airbnb.png'];
const sponsorTile = document.querySelector('.sponsors-container');

function createSponsor() {
  sponsors.forEach((sponsor) => {
    const cards = document.createElement('div');
    cards.classList.add('sponsors');

    cards.innerHTML = `<img class="sponsors-image" src=${sponsor} alt="This is featured speaker image"/>`;

    sponsorTile.appendChild(cards);
  });
}

createSponsor();