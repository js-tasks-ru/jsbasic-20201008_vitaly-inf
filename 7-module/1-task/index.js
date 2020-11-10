import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.currentSlideNumber = 0;
    this.render();
    this.addEaddEventListeners();
    this.update();
  }
  render() {
    this.elem = document.createElement('div');
    this.elem.className = "ribbon";
    this.elem.innerHTML = `
      <!--Кнопка прокрутки влево-->
      <button class="ribbon__arrow ribbon__arrow_left ribbon__arrow_visible">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>
      <!--Кнопка прокрутки вправо-->
      <button class="ribbon__arrow ribbon__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>`;
    this.sub('arrow_right').classList.add('ribbon__arrow_visible'); 
    let nav = document.createElement('nav');
    nav.className = ("ribbon__inner");   
    this.elem.append(nav);
    let categories = this.categories.map(item => createElement(`
    <a href="#" class="ribbon__item" data-id="${item.id}">${item.name}</a>`));
    categories[0].classList.add('ribbon__item_active');
    categories[this.categories.length - 1].dataset.id = ('on-the-side ribbon__item_active');
    this.sub('inner').append(...categories);
  }
  addEaddEventListeners(){
    this.elem.onclick = ({target}) => {
      let button = target.closest('.carousel__button');
      if (button) {
        let id = target.closest('[data-id]').dataset.id;
        this.elem.dispatchEvent(new CustomEvent('product-add', {
          detail: id,
          bubbles: true
        }));
      }
      if (target.closest('.ribbon__arrow_right')) {
        this.forward();
      }
      if (target.closest('.ribbon__arrow_left')) {
        this.back();
      }
    };
    }
  sub(ref){
    return this.elem.querySelector(`.ribbon__${ref}`);
  }
  back(){
   this.sub('inner').scrollBy(-350, 0);
   console.log('NALEVO');
  }
  forward (){
  this.sub('inner').scrollBy(350, 0);
  console.log('NAPRAVO');
  }
  update(){
    let ribbonInner = this.sub('inner');
    let scrollLeft = ribbonInner.scrollLeft;
    let scrollWidth = ribbonInner.scrollWidth;
    let clientWidth = ribbonInner.clientWidth;
    let scrollRight = scrollWidth - scrollLeft - clientWidth; // число пикселей, например, 100 или 0.
    if (scrollLeft == 0){
      let button = this.sub('arrow_left');
      button.classList.remove = 'ribbon__arrow_visible';
    }
    if (scrollRight == 0){
      let button = this.sub('arrow_right');
      button.dataset.id = 'on-the-side';
    }
    console.log(document.documentElement.clientWidth);
    console.log(scrollLeft);
  }
}

