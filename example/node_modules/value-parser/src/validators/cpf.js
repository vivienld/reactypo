import {checkLength} from './_utils';

export default function cpf(cpf) {

  if (checkLength(cpf, 11, 'string')) {
    if (cpf === "00000000000" ||
        cpf === "11111111111" ||
        cpf === "22222222222" ||
        cpf === "33333333333" ||
        cpf === "44444444444" ||
        cpf === "55555555555" ||
        cpf === "66666666666" ||
        cpf === "77777777777" ||
        cpf === "88888888888" ||
        cpf === "99999999999")
      return false;
    if (isValid(cpf, 10, 2) === cpf.charAt(9) &&
        isValid(cpf, 11, 1) === cpf.charAt(10)) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }


  /**
   * Private utils
   */

  function isValid(cpf, index, size) {
    let isValid = false;
    let combination = 0;
    for (let i = 0, l = cpf.length; i < l - size; i++) {
      combination += parseInt(cpf.charAt(i)) * index;
      index--;
    }
    combination = combination * 10 % 11;
    if (combination === 10) isValid = 0;
    return isValid;
  } // isValid

} // cpf
