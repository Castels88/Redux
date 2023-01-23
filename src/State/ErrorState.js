import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

export const errorState = createSlice({
  name: "error",
  initialState: [],
  reducers: {
    //in questo modo aggiungo un errore
    add: (state, action) => [...state, action.payload],
    //in questo modo pulisce l'array
    clear: (state, action) => [],
  },
});
//aggiungiamolo allo store
