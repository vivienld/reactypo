export default function decimals(number, max, separator) {
  separator = separator.replace(/\'/g, '');
  if (separator === 'comma') separator = '.';
  else separator = '.';
  let regex1 = new RegExp(`^[0-9]+(${separator})?[0-9]{1,${max ? max : 2}}$`);
  let regex2 = new RegExp(`[0-9]`);
  if (number && (number.match(regex1) || number.match(regex2))) {
    return true;
  }
  return false;
} // decimals
