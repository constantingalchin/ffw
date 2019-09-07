const tab = document.getElementsByClassName('tab');
const myFontsContainer = document.getElementById('myFonts');
const buyFontsContainer = document.getElementById('buyFonts');

function init() {
  selectMyFonts();
}

function changeTab(tabName) {
  tabName === 'buyFontsTab'
    ? selectBuyFonts()
    : selectMyFonts();
}

function selectMyFonts() {
  myFontsContainer.style.display = 'flex';
  buyFontsContainer.style.display = 'none';
  tab[0].classList.add('tab--active');
  tab[1].classList.remove('tab--active');
}

function selectBuyFonts() {
  buyFontsContainer.style.display = 'flex';
  myFontsContainer.style.display = 'none';
  tab[1].classList.add('tab--active');
  tab[0].classList.remove('tab--active');
}
