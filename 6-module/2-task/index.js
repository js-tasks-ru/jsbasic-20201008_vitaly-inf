import createElement from '../../assets/lib/create-element.js';
export default class ProductCard {
  constructor(product) {
    this.product = product;
    this.create();
    this.addEventListener();
  }
  create(){
    this.elem = document.createElement('div');
    this.elem.classList.add('card');
    this.elem.innerHTML = 
    `<div class="card__top">
    <img src="/assets/images/products/${this.product.image}" class="card__image" alt="product">
    <span class="card__price">€${this.product.price.toFixed(2)}</span>
    </div>
      <div class="card__body">
      <div class="card__title">${this.product.name}</div>
          <button type="button" class="card__button">
          <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
      </div>`;
  }
  addEventListener(){
    this.elem.addEventListener('click', (event)=> {
      if(event.target.closest('.card__button')){
        let customEvent = new CustomEvent('product-add', {
          detail: this.product.id,
          bubbles:true
        });
        this.elem.dispatchEvent(customEvent);
      }
    });
  }
}