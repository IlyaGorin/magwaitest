const burgerBtn = document.querySelector('.burger-button');
const navigation = document.querySelector('.navigation');
const navigationWrapper = document.querySelector('.navigation__wrapper');
const navigationBtnsElement = document.querySelector('.navigation-btns');
const pageHeader = document.querySelector('.page-header__wrapper');

export default function initializeNavigation() {
  function moveNavigationBtns() {
    const mediaQuery = window.matchMedia(
      '(min-width: 768px) and (max-width: 1400px)'
    );

    if (mediaQuery.matches) {
      pageHeader.appendChild(navigationBtnsElement);
    } else {
      navigationWrapper.appendChild(navigationBtnsElement);
    }
  }

  moveNavigationBtns();

  window.addEventListener('resize', moveNavigationBtns);

  burgerBtn.addEventListener('click', () => {
    navigation.classList.toggle('open');
    burgerBtn.classList.toggle('open');
    document.body.classList.toggle('no-scroll');
  });
}
