import { createSlice } from "@reduxjs/toolkit";

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
