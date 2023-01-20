import { createSlice } from "@reduxjs/toolkit";

export const newCounter = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: (state, action) => state + action.payload,
    decrement: (state, action) => state - action.payload,
    reset: (state, action) => 0,
  },
});
