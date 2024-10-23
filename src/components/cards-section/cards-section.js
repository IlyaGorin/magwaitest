const cardTemplate = document.querySelector('.card-template');
const cardsContainer = document.querySelector('.cards-section__cards-list');
let totalLoaded = 0;
const LIMIT = 5;
const MAX_POSTS = 30;

function createCard(data) {
  const card = cardTemplate.content.cloneNode(true);

  card.querySelector('.card__title').textContent = data.title;
  card.querySelector('.card__desc').textContent = data.description;
  card.querySelector('.card__text').textContent = data.text;
  card.querySelector(
    '.card__info'
  ).innerHTML = `Posted by <b>${data.author}</b>, on ${data.date}`;

  return card;
}

function loadCards() {
  if (totalLoaded >= MAX_POSTS) {
    document.querySelector(
      '.cards-section__load-button button'
    ).disabled = true;
    alert('Все карточки загружены');
    return;
  }

  fetch(
    `https://jsonplaceholder.typicode.com/posts?_start=${totalLoaded}&_limit=${LIMIT}`
  )
    .then((response) => response.json())
    .then((posts) => {
      posts.forEach((post) => {
        const cardData = {
          title: post.title,
          description: 'How to increase your productivity with a Music',
          text: post.body,
          author: 'Eugenia',
          date: 'July 24, 2019',
        };

        const card = createCard(cardData);
        cardsContainer.appendChild(card);
      });

      totalLoaded += posts.length;
    })
    .catch((error) => console.error('Ошибка загрузки:', error));
}

export default function fetchCardsData() {
  document
    .querySelector('.cards-section__load-button button')
    .addEventListener('click', loadCards);

  loadCards();
}
