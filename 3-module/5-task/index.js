/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  let stringWithoutSpaces = str.split(" ").join();
  let itemsDividedByComma = stringWithoutSpaces.split(",");
  let getMinMaxValue = itemsDividedByComma.sort((a, b) => a - b);

  let result = {
    min: +getMinMaxValue[0],
    max: +getMinMaxValue[getMinMaxValue.length - 1],
  };

  return result;
}
