/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  let strDown = str.toLowerCase();
  if (strDown.includes("1xbet") || strDown.includes("xxx")) {
    return true;
  } else {
    return false;
  }
}
