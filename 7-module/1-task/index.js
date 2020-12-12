import createElement from '../../assets/lib/create-element.js';
export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.create(categories);
    this.visibleArrows();
  }
  create (categories){
    this.elem = document.createElement('div');
    this.elem.classList.add('ribbon');
    let leftArrow = `
    <!--Кнопка прокрутки влево-->
    <button class="ribbon__arrow ribbon__arrow_left ribbon__arrow_visible">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </button>`;
    let rightArrow = `
    <!--Кнопка прокрутки вправо-->
    <button class="ribbon__arrow ribbon__arrow_right">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </button>`;
    let nav = document.createElement('nav');
    nav.classList.add('ribbon__inner');
    this.elem.append(nav);
    let a = categories.map((item) => {
      return  `<a href="#" class="ribbon__item" data-id=${item.id}>${item.name}</a>`})
      .join('');
      nav.insertAdjacentHTML('beforebegin', leftArrow);
      nav.insertAdjacentHTML('afterbegin', a);
      nav.insertAdjacentHTML('afterend', rightArrow);
  }
  visibleArrows() {
    this.ribbonInner = this.elem.querySelector('.ribbon__inner');
    this.elem.addEventListener('click', (event) =>{
      if (event.target.closest('.ribbon__arrow_right')){
        this.ribbonInner.scrollBy(350, 0);
      }
      if (event.target.closest('.ribbon__arrow_left')){
        this.ribbonInner.scrollBy(-350,0);
      }
      let scrollWidth = this.ribbonInner.scrollWidth;
      let scrollLeft = this.ribbonInner.scrollLeft;
      let clientWidth = this.ribbonInner.clientWidth;
      let scrollRight = scrollWidth - scrollLeft - clientWidth;
      let leftArrows = this.elem.querySelector('.ribbon__arrow_left');
      let rightArrows = this.elem.querySelector('.ribbon__arrow_right');
      if (scrollLeft == 0){
        leftArrows.classList.remove('ribbon__arrow_visible');
      } else {
        leftArrows.classList.add('ribbon__arrow_visible');
      }
      if (scrollRight < 1){
        rightArrows.classList.remove('ribbon__arrow_visible');
      } else {
        rightArrows.classList.add('ribbon__arrow_visible');
      }
    });
    this.elem.addEventListener('click', (event)=> {
      let ribbonItem = event.target.closest('.ribbon__item');
      let ribbonActive = this.elem.querySelector('.ribbon__item_active');
     
      if (ribbonActive){
        ribbonActive.classList.remove('ribbon__item_active');
      } 
      if (ribbonItem){
        event.preventDefault();
        ribbonItem.classList.add('ribbon__item_active');
        let customEvent = new CustomEvent('ribbon-select', {
        detail: ribbonItem.dataset.id, 
        bubbles: true 
        });
        this.elem.dispatchEvent(customEvent);
      }
    });
}
}