const defaultState = [];

const ADD = "USER&ADD";
const REMOVE = "USER&REMOVE";
const EDIT = "USER&EDIT";
const CLEAR = "USER&CLEAR";

export function add(user) {
  return {
    type: ADD,
    payload: user,
  };
}
export function remove(id) {
  return {
    type: REMOVE,
    payload: id,
  };
}
export function edit(id, data) {
  return {
    type: EDIT,
    payload: {
      id,
      data,
    },
  };
}
export function clear() {
  return {
    type: CLEAR,
  };
}

export function userReducer(state = defaultState, action) {
  switch (action.type) {
    case ADD: {
      return [...state, action.payload];
    }
    case REMOVE: {
      return state.filter((user) => user.id !== action.payload);
    }
    case EDIT: {
      return state.map((user) => {
        if (user.id === action.payload.id) {
          return { ...user, ...action.payload.data };
        }
        return user;
      });
    }
    case CLEAR: {
      return defaultState;
    }
    default: {
      return state;
    }
  }
}
