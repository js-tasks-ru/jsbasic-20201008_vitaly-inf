/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: '',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *   },
 *
 * @constructor
 */
/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },
 *
 * @constructor
 */
export default class UserTable {
  constructor(rows) {
    this.rows = rows;
    this.elem = this.createHeader();
    this.elem = addEventListener("click", function (event) {
      if (event.target.tagName === "BUTTON") {
        let button = event.target.closest("tr");
        button.remove();
      }
    });
  }
  createHeader() {
    let table = document.createElement("table");
    let tbody = document.createElement("tbody");
    let thead = `<thead>
    <tr>
      <th>Имя</th>
      <th>Возраст</th>
      <th>Зарплата</th>
      <th>Город</th>
      <th></th>
    </tr>
  </thead>`;
    document.body.append(table);
    table.insertAdjacentHTML("beforeend", thead);
    table.append(tbody);
    let allRows = "";
    for (let i = 0; i < this.rows.length; i++) {
      let user = this.rows[i];
      let row = `
    <tr>
     <td>${user.name}</td>
     <td>${user.age}</td>
     <td>${user.salary}</td>
     <td>${user.city}</td>
     <td><button>X</button></td>
    </tr>
  `;
      allRows += row;
    }
    tbody.insertAdjacentHTML("beforeend", allRows);
  }
}
