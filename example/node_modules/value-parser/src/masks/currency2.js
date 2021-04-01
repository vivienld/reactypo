export default function currency(number, type) {

  if (!number) return '';

  let clearSeparators = (value) => {
    value = value.toString();
    return parseFloat(value.replace(/,/g, '.').replace(/\.(?![^.]*$)/g, ''));
  }

  let toIntCents = (number) => Math.abs(parseInt(clearSeparators(number) * 100));

  let toFloatString = (number) => number.toFixed(2);

  function formatDecimal(number, separator) {
    let value = number + '';
    if (separator !== '.,' || separator !== ',.') separator = '.,';
    value = value.replace(/\D/g,'');
    value = value.replace(/([0-9])([0-9]{14})$/, '$1' + separator[0] + '$2');
    value = value.replace(/([0-9])([0-9]{11})$/, '$1' + separator[0] + '$2');
    value = value.replace(/([0-9])([0-9]{8})$/, '$1' + separator[0] + '$2');
    value = value.replace(/([0-9])([0-9]{5})$/, '$1' + separator[0] + '$2');
    value = value.replace(/([0-9])([0-9]{2})$/, '$1' + separator[1] + '$2');
    return value;
  }

  if (type === 'Real') {
    return 'R$ ' + formatDecimal(toIntCents(number));
  }

} // currency
