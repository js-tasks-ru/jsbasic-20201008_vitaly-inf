export default class Modal {
  constructor() {
    this.elem = document.createElement('div');
    this.elem.classList.add('modal');
    this.render(this.elem);
    this.addEventListeners();
  }
  render() {
    this.elem = document.createElement('div');
    document.body.append(this.elem);
    this.elem.classList.add('modal');
    this.elem.innerHTML = `<div class="modal__overlay"></div>
    <div class="modal__inner">
      <div class="modal__header">
        <!--Кнопка закрытия модального окна-->
        <button type="button" class="modal__close">
          <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
        </button>
        <h3 class="modal__title"></h3>
      </div>
      <div class="modal__body">
      </div>
    </div>`;
    return this.elem;
  }
  open() {
    document.body.append(this.elem);
    document.body.classList.add('is-modal-open');
    document.addEventListener('keydown', () => this.escClick);
  }
  setTitle(title) {
    let a = document.querySelector('.modal__title');
    a.innerHTML = title;
  }
  setBody(node) {
    let modalBody = document.createElement('div');
    modalBody.classList.add('modal__body');
    modalBody.innerHTML = ``;
    modalBody.append(node);
  }
  onClick = (event) => {
    if (event.target.closest('.modal__close')) {
      this.close();
    }
  }
  escClick = (event) => {
    if (event.code == 'Escape') {
      this.close();
    }
  }
  close(){
    thiss.elem.classList.remove('.is-modal-open');
    this.elem.remove();
  }
    addEventListeners = () => {
      this.elem.addEventListener("click", this.onClick);
    }
}
