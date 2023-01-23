import { createSlice } from "@reduxjs/toolkit";
import { errorState } from "./ErrorState";
import { loadingState } from "./LoadingState";

export const newUsers = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
    remove: (state, action) =>
      state.filter((user) => user.id !== action.payload),
    edit: (state, action) => {
      const { id, data } = action.payload;
      const user = state.find((u) => u.id === id);
      for (let key in data) {
        user[key] = data[key];
      }
    },
    clear: [],
  },
});
//andiamo a creare la nostra fetch user
export function fetchUser(username) {
  return async function (dispatch, getState) {
    try {
      dispatch(loadingState.actions.start());
      const res = await fetch(`http://api.github.com/users/${username}`);
      const json = await res.json();
      //adesso che abbiamo i nostri dati dobbiamo
      //inserirli nello newUser Reduce
      //dobbiamo richiamare il dispatch method e passargli le action
      //del newUsers
      dispatch(newUsers.actions.add(json));
    } catch (error) {
      dispatch(errorState.actions.add(error));
    } finally {
      dispatch(loadingState.actions.end());
    }
  };
}
//adesso andiamo nell index.js =>
