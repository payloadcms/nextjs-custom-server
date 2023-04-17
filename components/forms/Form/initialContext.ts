import { IContext } from '../types';

const initialContext: IContext = {
  initialState: {},
  fields: {},
  validateForm: () => false,
  setModified: () => false,
  setProcessing: () => false,
  setSubmitted: () => false,
  dispatchFields: () => false,
  getFields: () => ({}),
  getField: () => undefined,
};

export default initialContext;
