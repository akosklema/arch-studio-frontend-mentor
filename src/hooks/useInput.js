import { useReducer } from 'react';

function inputReducer(state, { type, payload }) {
  switch (type) {
    case 'SET_VALUE':
      return {
        ...state,
        value: payload.value,
        errorMessage: null
      };
    
    case 'SET_ERROR_MESSAGE':
      return {
        ...state,
        errorMessage: payload.errorMessage
      }
      
    case 'RESET_INPUT_FIELD':
      return {
        ...state,
        value: '',
        errorMessage: null
      }

    default:
      return state;
  }
};

function useInput() {
  const [state, dispatch] = useReducer(inputReducer, { value: '', errorMessage: null });

  const handleInput = (event) => {
    dispatch({ type: 'SET_VALUE', payload: { value: event.target.value } })
  };

  const checkInputEmpty = (inputName) => {
    if (state.value.trim() === '') {
      dispatch({ type: 'SET_ERROR_MESSAGE', payload: { errorMessage: `${inputName} is required` } })
      return true;
    }

    return false;
  };

  const resetField = () => {
    dispatch({ type: 'RESET_INPUT_FIELD' })
  };


  return { state, handleInput, checkInputEmpty, resetField, dispatch  }
};

export default useInput;