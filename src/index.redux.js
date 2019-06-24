export const ADD = 'ADD';
export const MINUS = 'MINUS';

export default function counter (state=0, action) {
  const {type} = action;
  switch (type) {
    case ADD:
      return state + 1;
    case MINUS:
      return state - 1;
    default:
      return state
  }
}

// action creator
export function add () {
  return {
    type: ADD
  } 
}

export function minus () {
  return {
    type: MINUS
  }
}

export function addAsync () {
  return dispatch => {
    setTimeout(() => {
      dispatch(add()) 
    }, 2000)
  }
}