import ReactDOM from "react-dom/client";
import React from "react";
import "./Style/index.css";
import { Root } from "./Root";
import { store } from "./State/Store";
import { newCounter } from "./State/NewCounterState";
import { fetchUser, newUsers } from "./State/NewUserState";
import { delayAction } from "./State/DelayMiddle";
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<Root />);
// store.subscribe(() => {
//   console.log(store.getState());
// });
//andiamo a creare una function che ritorna un altra function
//con un incremento del counter dopo 3 sec
function waitBeforeIncrementing(by = 1) {
  console.log("waiting befor increment");
  return function (dispatch, getState) {
    setTimeout(() => {
      dispatch(newCounter.actions.increment(by));
    }, 3000);
  };
}
//invece di chiamare il reducer increment passiamo direttamente la
//function
store.dispatch(waitBeforeIncrementing(2));

//adesso andiamo a vedere come possiamo gestire le chiamate API
//con redux thunk, andiamo dentro l'userReducer e creiamo una function
//per fetcher dei dati => NewUserState

//una volta qui andiamo ad inserire la nostra fetch
store.dispatch(fetchUser("castels88"));
//adesso nel console vedremo i dati dell utente aggiunto
//dal fetch dei dati.
//andiamo ad aggiungere ulteriori funzioni al nostro fetch tipo
//aggiungere un loading status quando facciamo il fetch
//creiamo un nuovo state LoadingState.js=>
//e per gestire gli errori creiamo un ErrorState=>
