import createElement from '../../assets/lib/create-element.js';
export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.create();
    this.addEventListener();
  }
  create(slides){ 
    this.elem = document.createElement('div');
    this.elem.classList.add('carousel');
    this.elem.innerHTML = `
    <!--Кнопки переключения-->
    <div class="carousel__arrow carousel__arrow_right">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </div>
    <div class="carousel__arrow carousel__arrow_left">
      <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
    </div>`;
    let tableRows = this.slides.map(item => 
    `<div class="carousel__slide" data-id="${item.id}">
    <img src="/assets/images/carousel/${item.image}" class="carousel__img" alt="slide">
    <div class="carousel__caption">
      <span class="carousel__price">€${item.price.toFixed(2)}</span>
      <div class="carousel__title">${item.name}</div>
      <button type="button" class="carousel__button">
        <img src="/assets/images/icons/plus-icon.svg" alt="icon">
      </button>
    </div>
    </div>`).join('');
    let carouselInner = document.createElement('div');
    carouselInner.classList.add('carousel__inner');
    this.elem.append(carouselInner);
    carouselInner.insertAdjacentHTML('beforeend', tableRows);
    let leftArrow = this.elem.querySelector('.carousel__arrow_left');
    leftArrow.style.display = 'none';
  }
  addEventListener(){
    let leftArrow = this.elem.querySelector('.carousel__arrow_left');
    let rightArrow = this.elem.querySelector('.carousel__arrow_right');
    let carousel = this.elem.querySelector('.carousel__inner');
    let image = this.elem.querySelectorAll('.carousel__slide') // 4
    let position = 0;
    let a;
    rightArrow.addEventListener('click', () => {
      let width = this.elem.offsetWidth;
      if (position < image.length - 1){
        position++;
        a = position * width;    
      } 
      if (position === image.length - 1){
        rightArrow.style.display = 'none';
      } else {
        rightArrow.style.display = '';
      }
      if (position !== 0){
        leftArrow.style.display = '';
      }
      carousel.style.transform = `translateX(-${a}px)`;
    });
    leftArrow.addEventListener('click', () => {
      let width = this.elem.offsetWidth;
      if (position > 0){
      position--;
      a = position * width;
    } 
    if (position !== image.length - 1){
      rightArrow.style.display = '';
    } 
    if (position === 0){
      leftArrow.style.display = 'none';
    }
    carousel.style.transform = `translateX(-${a}px)`;
    });
    this.elem.addEventListener('click', (event)=> {
      if(event.target.closest('.carousel__button')){
        new CustomEvent('product-add', {
          detail: this.slides.id,
          bubbles: true
        })
      }
    });
  }
}