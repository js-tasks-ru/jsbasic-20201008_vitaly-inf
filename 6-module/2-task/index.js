import createElement from '../../assets/lib/create-element.js';
export default class ProductCard {
  get elem() {
    return this._elem;
  }
  constructor(product) {
    this.product = product;
    this.create();
    this._elem.addEventListener('click', (event)=> this.onClick(event));
  }
  create() {
   this._elem = document.getElementById('holder');
   this._elem.innerHTML = `
    <div class="card">
      <div class="card__top">
     <img src="/assets/images/products/${this.product.image}" class="card__image" alt="product">
     <span class="card__price">€${this.product.price.toFixed(2)}</span>
   </div>
   <div class="card__body">
     <div class="card__title">${this.product.name}</div>
     <button type="button" class="card__button">
       <img src="/assets/images/icons/plus-icon.svg" alt="icon">
     </button>
    </div>
  </div>`;
  }
  onClick(event){
    if(event.target.closest('.card_button')){
      let customEvent = new CustomEvent('product-add', {
        detail: product.id,
        bubbles:true
      })
      this.elem.dispatchEvent(event);
    }
  }
}