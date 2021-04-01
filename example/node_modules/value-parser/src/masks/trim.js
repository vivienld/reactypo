export default function trim(data) {

  if (!data) return;
  if (typeof data !== 'string') return;
  data = data.replace(/\s/g, '');
  if (data == '') return;
  return data;

} // trim
