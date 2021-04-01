import * as validators from './validators';

const Validator = (value, validator) => {

  let isValid = null;

  let validations = [];
  let checkValidations = () => validations.filter((item) => item === false);

  if (!validator) return isValid;

  validator.forEach((item) => {
    let validatorResponse = null;
    if (typeof item == 'object') {
      const key = Object.keys(item)[0];
      if (!validators.hasOwnProperty(key)) return;
      validatorResponse = validators[key](value, item[key]);
    }
    if (typeof item == 'string') {
      if (!validators.hasOwnProperty(item)) return;
      validatorResponse = validators[item](value);
    }
    validations.push(validatorResponse);
  });

  isValid = validations.length ? checkValidations().length < 1 : null;

  return isValid;

};

export default Validator;
