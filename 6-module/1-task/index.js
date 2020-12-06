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
     this.create();
     this.addEventListener();
  }
  create(rows){
    this.elem = document.createElement('table');
    this.elem.innerHTML = 
    `<thead>
      <tr>
        <th>Имя</th>
        <th>Возраст</th>
        <th>Зарплата</th>
        <th>Город</th>
        <th></th>
     </tr>
    </thead>`;
    const tableRows = this.rows.map(item =>`<tr>
    <td>${item.name}</td>
    <td>${item.age}</td>
    <td>${item.salary}</td>
    <td>${item.city}</td>
    <td><button>X</button></td>
    </tr>`).join('');
    let tbody = document.createElement('tbody');
    this.elem.append(tbody);
    tbody.innerHTML = tableRows;
  }
  addEventListener(){
    this.elem.addEventListener('click', (event) => {
      if (event.target.closest('button')){
        let tr = event.target.closest('tr');
        tr.remove();
      }
    });
  }
}