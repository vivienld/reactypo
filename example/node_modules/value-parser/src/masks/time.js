export default function time(date) {

  date = date.toString();
  date = date.replace(/\D/g, '');
  date = date.replace(/[^\dA-Z]+/g, '');
  if (date.length > 2) date = ((parseInt(date.substring(0, 2)) > 23) ? '23' :  date.substring(0, 2))+ ':' + (parseInt(date.substring(2)) > 59 ? '59': date.substring(2));
  if (date.length > 5) date = date.substring(0, 5);
  return date;


//  if (!date) return '';
//  if(date.length === 2) {
//    return date+":";
//  } else if(date.length > 4){
//    return date.slice(0,5);
//  }

} // function time
