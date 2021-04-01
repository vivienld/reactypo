export default function currency(number, separator, type, decimalsLength) {

  if (!number) return '';

  if (separator === '.,' || separator === ',.') {

    let numberString = (number + '');

    numberString = numberString.replace(/\D/g, '');
    numberString = numberString.replace(/^(0)+/, '');

    function zeros() {
      zeros = '';
      let l = (decimalsLength || 3) - numberString.length;
      for (let i = 0; i < l; i++) zeros += '0';
      return zeros;
    }

    numberString = zeros() + numberString;

    numberString = numberString.replace(/([0-9]{2})$/g, separator[1] + '$1');
    numberString = numberString.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + separator[0]);

    return (type || '') + ' ' + numberString;
  }

} // currency
