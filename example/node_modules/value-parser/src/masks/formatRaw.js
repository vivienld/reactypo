export default function formatRaw(value, type, extra) {

  if (type == 'number') {
    if (value && value.length < 1) return value;
    if (value == undefined) return value;
    value = value.toString();

    if (value.match(/\,/g)) {
      value = value.replace(/\,/g, '!');
      value = value.replace(/\./g, '?');
      value = value.replace(/\!/g, '.');
      value = value.replace(/\?/g, '');
    }

    value = value * 1;
    value = value.toFixed(2);
  }

  if (type == 'date') {
    if (extra == 'pt-BR') {
      const split = value.split('-');
      value = split[2] + '/' + split[1] + '/' + split[0];
    }
    if (extra == 'en-EN') {
      const split = value.split('/');
      value = split[2] + '-' + split[1] + '-' + split[0];
    }
  }

  if (type == 'datetime') {
    if (extra == 'pt-BR') {
      value = value.toString();
      value = value.trim();
      const split = value.split('-');
      const last = split[2].split(' ');
      value = last[0].trim() + '/' + split[1] + '/' + split[0] + ' ' + last[1];
    }
    if (extra == 'en-EN') {
      const split = value.split('/');
      value = split[2] + '-' + split[1] + '-' + time[0] + ' ' + time[1];
    }
  }

  return value;
};
