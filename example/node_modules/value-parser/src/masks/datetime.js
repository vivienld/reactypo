export default function value(value, locale = 'pt-BR') {

  if (locale == 'pt-BR') {
    const split = value.split('-');
    value = split[2] + '/' + split[1] + '/' + split[0];
  }

  if (locale == 'en-EN') {
    const split = value.split('/');
    value = split[2] + '-' + split[1] + '-' + split[0];
  }

  value = value.toString();
  value = value.replace(/\D/g, '');

  if (locale && locale.trim() == 'pt-BR') {
    if (value.length > 2) value = value.substring(0, 2) + '/' + value.substring(2);
    if (value.length > 5) value = value.substring(0, 5) + '/' + value.substring(5, 15);
    if (value.length > 10) value = value.substring(0, 10) + ' ' + value.substring(10, 15);
    if (value.length > 12) value = value.substring(0, 13) + ':' + value.substring(13, 15);
  }

  if (locale && locale.trim() == 'en-EN') {
    if (value.length > 4) value = value.substring(0, 4) + '-' + value.substring(4);
    if (value.length > 7) value = value.substring(0, 7) + '-' + value.substring(7, 9);
    if (value.length > 10) value = value.substring(0, 10) + ' ' + value.substring(10, 15);
    if (value.length > 12) value = value.substring(0, 13) + ':' + value.substring(13, 15);
  }

  return value;
};
