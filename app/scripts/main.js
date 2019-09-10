const tab = document.getElementsByClassName('tab');
const myFontsContainer = document.getElementById('myFonts');
const buyFontsContainer = document.getElementById('buyFonts');

function init() {
  selectMyFonts();
  getAndShowUsers();
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

function parseUrl(url) {
  return new URL(url);
}

parsedUrl = parseUrl('http://ffwagency.com/do/any.php?a=1#foo');

console.log(parsedUrl.hash);
console.log(parsedUrl.hostname);
console.log(parsedUrl.pathname);


async function getAndShowUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();

  users.forEach(user => {
    const template = `
      <div class="user">
          <h3 class="user__name">${user.name}</h3>
          <div class="user__email">${user.email}</div>
      </div>`;

    document.body.insertAdjacentHTML('beforeend', template);
  })
}
