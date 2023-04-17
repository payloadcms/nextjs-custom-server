import { Validate } from '../types';

const validateText: Validate = (val) => {
  const stringVal = val as string;
  const isValid = stringVal && stringVal.length > 0;

  if (isValid) {
    return true;
  }

  return 'Please enter a value.';
};

export default validateText;
