import './scss/layout.scss';
import './index.pug';

import initializeNavigation from './components/header/header';
import fetchCardsData from './components/cards-section/cards-section';

document.addEventListener('DOMContentLoaded', () => {
  initializeNavigation();
  fetchCardsData();
});
