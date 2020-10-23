/**
 * showSalary
 * @param {Array} users - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(users, age) {
  let userNames = '';
  for (let keys of users) {
      let age1 = keys.age;
      if (age >= age1) {
        userNames += (`${keys.name}, ${keys.balance}\n`);
      }
  }
  return userNames;
}
