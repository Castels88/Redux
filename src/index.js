import ReactDOM from "react-dom/client";
import React from "react";
import "./Style/index.css";
import { Root } from "./Root";
import { store } from "./State/Store";
//importo il nuovo Reducer
import { newCounter } from "./State/NewCounterState";
import { newUsers } from "./State/NewUserState";
const root = document.querySelector("#root");
// root.render(<Root />);
store.subscribe(() => {
  console.log(store.getState());
});
//e vado a dichiarare il newCounter.action.la funzione della action
store.dispatch(newCounter.actions.increment(2));
store.dispatch(newCounter.actions.decrement(5));
store.dispatch(newCounter.actions.increment(10));
store.dispatch(newUsers.actions.add({ id: 1, name: "Elio", age: 34 }));
store.dispatch(newCounter.actions.decrement(3));
store.dispatch(newUsers.actions.add({ id: 2, name: "mario", age: 28 }));
store.dispatch(newCounter.actions.reset());
//altra cosa tramite Immer in realta lo state puo essere
//mutato andiamo a creare un nuovo Reducer per gli user =>NewUserState
