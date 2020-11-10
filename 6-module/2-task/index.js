import createElement from '../../assets/lib/create-element.js';
export default class ProductCard {
  constructor(product) {
    this.product = product;
    this.elem = create();
    this.elem.addEventListener('click', function (event){
      if (event.target.classList.contains('card__button')) {
        let event = new CustomEvent('product-add', {
          detail: this.product.id, 
          bubbles: true,
        });
        this.elem.dispatchEvent(event);
      }
    });
    function create() {
      let div = document.createElement('div');
      div.className = 'card';
      document.body.append(div);
      div.innerHTML = `
    <div class="card__top">
      <img src="/assets/images/products/${product.image}" class="card__image" alt="product">
      <span class="card__price">€${product.price.toFixed(2)}</span>
    </div>
      <div class="card__body">
        <div class="card__title">${product.name}</div>
          <button type="button" class="card__button">
        <img src="/assets/images/icons/plus-icon.svg" alt="icon">
      </button>
    </div>`
      return div;
    }
  }
}