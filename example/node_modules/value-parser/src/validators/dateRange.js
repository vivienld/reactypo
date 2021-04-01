import Moment from 'moment';
import { extendMoment } from 'moment-range';

const moment = extendMoment(Moment);

export default function dateRange(date, min, max) {

  function clear(string) {
    string = string + '';
    return string.replace(/\'/g, '');
  }

  function isValidDate(dateString) {
    var regEx = /^\d{4}-\d{2}-\d{2}$/;
    return dateString.match(regEx) != null;
  }

  if (isValidDate(max)) {
    let transformMaxDate = max.split('-');
    max = clear(transformMaxDate[2]) + '/' + clear(transformMaxDate[1]) + '/' + clear(transformMaxDate[0]);
  }

  let parsedDate = null;
  let newMinDate = null;
  if (/^((\d{4})-(\d{2})-(\d{2}))$/.test(min)) {
    parsedDate = min.split('-');
    newMinDate = new Date(clear(parsedDate[0]), clear(parsedDate[1]-1), clear(parsedDate[2]));
  } else {
    parsedDate = min.split('/');
    newMinDate = new Date(clear(parsedDate[2]), clear(parsedDate[1]-1), clear(parsedDate[0]));
  }

  let newMaxDate = null;
  if (/^((\d{4})-(\d{2})-(\d{2}))$/.test(max)) {
    parsedDate = max.split('-');
    newMaxDate = new Date(clear(parsedDate[0]), clear(parsedDate[1]-1), clear(parsedDate[2]));
  } else {
    parsedDate = max.split('/');
    newMaxDate = new Date(clear(parsedDate[2]), clear(parsedDate[1]-1), clear(parsedDate[0]));
  }

  let start = moment(newMinDate);
  let end = moment(newMaxDate);
  let check = null;
  let range = null;

  if (date.length == 10) {
    let parsedDate = date.split('/');
    let newDate = new Date(clear(parsedDate[2]), clear(parsedDate[1]-1), clear(parsedDate[0]));
    check = moment(newDate);
    range = moment.range(start, end);
    return range.contains(check);
  }

  return false;

} // function dateRange
