import moment from 'moment';

export default function isValidvalue(value, locale = 'pt-BR') {
  let isValid = null;
  if (locale && locale.trim() == 'pt-BR') {
    value = moment(value, 'DD/MM/YYYY HH:mm');
    return moment(value).isValid();
  }
  if (locale && locale.trim() == 'en-EN') {
    value = moment(value, 'YYYY-MM-DD HH:mm');
    return moment(value).isValid();
  }
};
