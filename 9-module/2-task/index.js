import Carousel from '../../6-module/3-task/index.js';
import slides from '../../6-module/3-task/slides.js';

import RibbonMenu from '../../7-module/1-task/index.js';
import categories from '../../7-module/1-task/categories.js';

import StepSlider from '../../7-module/4-task/index.js';
import ProductsGrid from '../../8-module/2-task/index.js';

import CartIcon from '../../8-module/1-task/index.js';
import Cart from '../../8-module/4-task/index.js';

export default class Main {

  constructor() {
    this.carousel = new Carousel(slides);
    this.ribbonMenu = new RibbonMenu(categories);
    this.stepSlider = new StepSlider({ steps: 5, value: 3 });
    this.cartIcon = new CartIcon();
    this.cart = new Cart(this.cartIcon);
    this.addEventListeners();
  }

  async render() {
    document.querySelector('[data-carousel-holder]')
      .append(this.carousel.elem);
    document.querySelector('[data-ribbon-holder]')
      .append(this.ribbonMenu.elem);
    document.querySelector('[data-slider-holder]')
      .append(this.stepSlider.elem);
    document.querySelector('[data-cart-icon-holder]')
      .append(this.cartIcon.elem);
    const adress = 'products.json';
    let response = await fetch(adress, {
      method: 'GET'
    });
    this.responseArray = await response.json();
    this.productsGrid = new ProductsGrid(this.responseArray);
    document.querySelector
      ('[data-products-grid-holder]').append(this.productsGrid.elem);
    this.productsGrid.updateFilter({
      noNuts: document.getElementById('nuts-checkbox').checked,
      vegeterianOnly: document.getElementById('vegeterian-checkbox').checked,
      maxSpiciness: this.stepSlider.value,
      category: this.ribbonMenu.value
    });
  }
  addEventListeners() {
    document.body.addEventListener('product-add', (event) => {
      let productId = event.detail;
      let finalItem = this.responseArray.find(
       item => item.id === productId);
      this.cart.addProduct(finalItem);
    });
    this.stepSlider.elem.addEventListener('slider-change', (event) => {
      let productId = event.detail;
      this.productsGrid.updateFilter({
        maxSpiciness: productId
      });
    });
    this.ribbonMenu.elem.addEventListener('ribbon-select', (event) => {
      let productId = event.detail;
      this.productsGrid.updateFilter({
        category: productId
      });
    });
    document.addEventListener('change', (event) => {
      let checked = event.target.checked;
      if (event.target.id == 'nuts-checkbox') {
        this.productsGrid.updateFilter({
          noNuts: checked
        });
      }
      if (event.target.id == 'vegeterian-checkbox') {
        this.productsGrid.updateFilter({
            vegeterianOnly: checked
          });
      }
    });
  }
}
