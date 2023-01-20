import { createSlice } from "@reduxjs/toolkit";
//andiamo ad importare createSlice e creiamo
//il nostro nuovo state .
//per utilizzare Immer alla action add possiamo
//invece di fare cosi add: (state, action) => [...state, action.payload],
//possiamo direttamente mutare lo state pushando all'interno
//quello che vogliamo in questo caso la action
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
