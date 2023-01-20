//con redux toolkit possiamo utilizzare adesso la funzione createSlice
//questa funzione ci permette di creare il nostro reducer senza piu dover
//costruire le action type , poi le funzioni e poi il reducer .
//tutto va inserito direttamente dentro la createSlice function che è
//un oggetto a cui passero come key and value le proprieta del reducer
import { createSlice } from "@reduxjs/toolkit";
//le key fondamentali sono il nome : che voglio dare
//l'initialState che è fondamentale senno redux crashia
//i reducers ossia le azioni del mio Counter
// in fine rendiamo la createSlice esportabile
export const newCounter = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: (state, action) => state + action.payload,
    decrement: (state, action) => state - action.payload,
    reset: (state, action) => 0,
  },
});
//andiamo ad importare questo nuovo reducer nello store =>
