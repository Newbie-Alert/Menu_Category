//data
import menu from './data.js'

//dataset
const menuContainer = document.querySelector('.menu-container');
const btns = document.querySelectorAll('.btn');


createMenu(menu);
category();

//make menu
function createMenu(data) {
  data.map((item, i) => {
    menuContainer.innerHTML += 
      `
      <div key = ${i} class="menu" data-code="${item.category}">
          <div class="menu-img" style="background-image: url(${item.img})"></div>
          <div class="about-menu">
            <div class="menu-name">
              <p>${item.name}</p>
              <span>${item.price}</span>
            </div>
            <div class="menu-text">
              ${item.content}
            </div>
          </div>
        </div>
      `
  })
}

//select category
function category() {
  btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.target.style.backgroundColor='rgb(151, 104, 33);'
      let style = e.target.classList;
      if (style.contains('breakfast')) {
        let copy = [...menu];
        let found = copy.filter(x => x.category === 111);
        copy = [...found];
        menuContainer.innerHTML = ``;
        createMenu(copy);
      }
      else if (style.contains('lunch')) {
        let copy = [...menu];
        let found = copy.filter(x => x.category === 112);
        copy = [...found];
        menuContainer.innerHTML = ``;
        createMenu(copy);
      }
      else if (style.contains('shakes')) {
        let copy = [...menu];
        let found = copy.filter(x => x.category === 113);
        copy = [...found];
        menuContainer.innerHTML = ``;
        createMenu(copy);
      }
      else {
        menuContainer.innerHTML = ``;
        createMenu(menu);
      }
    })
  })
  }