import { createSlice } from "@reduxjs/toolkit";

export const loadingState = createSlice({
  name: "loading",
  initialState: 0,
  reducers: {
    //in questo modo sto dicendo di aumentare di uno se inizia il loading
    start: (state, action) => state + 1,
    //in questo modo lo diminisce se si ferma
    end: (state, action) => state - 1,
  },
});
//aggiungiamolo allo store
