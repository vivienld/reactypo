export default function numbers(value, float = 2, locale = 'pt-BR') {
  if (value.length < 1) return value;
  value = value.toString().replace(/\D/g, '');
  value = decimal(value, float);
  value = value * 1;
  var number = value.toLocaleString(locale && locale.trim() != 'en-EN' ? 'de-DE' : 'en-EN', {
    minimumFractionDigits: float
  });
  return number;
};

function decimal(number, size = 2) {
  let numberString = (number + '');
  let regex = new RegExp('([0-9]{' + size + '})$', 'g');
  function zeros() {
    zeros = '';
    let l = (size + 1) - numberString.length;
    for (let i = 0; i < l; i++) zeros += '0';
    return zeros;
  }
  numberString = zeros() + numberString;
  numberString = numberString.replace(regex, '.' + '$1');
  return numberString;
};
