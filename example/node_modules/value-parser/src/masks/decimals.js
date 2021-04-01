export default function decimals(number, decimalsLength, separator) {

  if (!number) return '';

  let numberString = (number + '');

  if (numberString.match(/\.[0-9]{5}$/g)) {
    return numberString;
  }

  let regex = new RegExp(`([0-9]{${decimalsLength}})$`, 'g');

  numberString = numberString.replace(/\D/g, '');
  numberString = numberString.replace(/^(0)+/, '');

  function zeros() {
    zeros = '';
    let l = (decimalsLength + 1) - numberString.length;
    for (let i = 0; i < l; i++) zeros += '0';
    return zeros;
  }

  numberString = zeros() + numberString;

  numberString = numberString.replace(regex, (separator || '.') + '$1');

  return numberString;

} // decimals
