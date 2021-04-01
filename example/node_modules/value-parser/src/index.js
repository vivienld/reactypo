import Mask from './Mask';
import Validator from './Validator';

const defaultOptions = {
  mask: [],
  validator: []
};

class Parser {

  constructor() {}

  parse(value, options = defaultOptions) {

    let parsedValue = value;
    let isValid = null;

    parsedValue = Mask(value, options.mask);
    isValid = Validator(parsedValue, options.validator);

    return {
      value: parsedValue,
      isValid: isValid,
      isEmpty: value ? value.length < 1 : null
    };

  }

};

let ValueParser = new Parser();

export default ValueParser;
