/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  let body = document.querySelector('body');
            let ul = document.createElement('ul');
            body.append(ul);
            for (let i = 0; i < friends.length; i++) {
                let li = document.createElement('li');
                let text = friends[i].firstName + ' ' + friends[i].lastName;
                li.append(text);
                ul.append(li);
            }
            return ul;
}
