import { Fields, Property } from '../types';

const reduceFieldsToValues = (fields: Fields): Property => {
  const data: Property = {};

  Object.keys(fields).forEach((key) => {
    if (fields[key].value !== undefined) {
      data[key] = fields[key].value;
    }
  });

  return data;
};

export default reduceFieldsToValues;
