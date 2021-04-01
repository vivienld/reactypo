import * as masks from './masks';

const Mask = (value, mask) => {

  let newValue = value;

  if (!mask) return newValue;

  mask.forEach((item) => {
    if (typeof item == 'object') {
      const key = Object.keys(item)[0];
      if (!masks.hasOwnProperty(key)) return;
      let params = [];
      params.push(newValue);
      if (item[key].pop) {
        params = params.concat(item[key]);
      } else {
        params.push(item[key]);
      }
      newValue = masks[key].apply(null, params) || '';
    }
    if (typeof item == 'string') {
      if (!masks.hasOwnProperty(item)) return;
      newValue = masks[item](newValue) || '';
    }
  });

  return newValue;

};

export default Mask;
