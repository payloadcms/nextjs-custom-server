import { Fields, Action } from '../types';

function fieldReducer(state: Fields, action: Action): Fields {
  switch (action.type) {
    case 'REPLACE_STATE': {
      return action.state || {};
    }

    case 'REMOVE': {
      const newState = { ...state };
      delete newState[action.path];
      return newState;
    }

    default: {
      const newField = {
        value: action.value,
        valid: action.valid,
        errorMessage: action.errorMessage,
        initialValue: action.initialValue,
      };

      return {
        ...state,
        [action.path]: newField,
      };
    }
  }
}

export default fieldReducer;
