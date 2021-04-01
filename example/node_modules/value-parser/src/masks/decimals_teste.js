export default function decimals(number, decimalsLength, separator, maxLength=6) {

  if (!number) return '';

  let numberString = (number + '');

  let part1 = '';

  let part2 = '';

  if((numberString.length) > maxLength) {
    if(!numberString.startsWith('0'))
      return numberString.substring(0, maxLength);
    return numberString.substring(1, maxLength);
  }

  let parts = numberString.split('.');

  if (parts.length < 2) return '0.' + parts[0].replace(/\D/g, '');

  part1 = parts[0].replace(/\D/g, '');

  part2 = parts[1].replace(/\D/g, '');

  if (part2.length > decimalsLength) {

    part1 += part2.charAt(0);
    part2 = part2.slice(1);

  }

  let newValue = part1 + '.' + part2;

  return newValue.replace('.', (separator || '.'));

} // decimals
