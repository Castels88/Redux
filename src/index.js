import ReactDOM from "react-dom/client";
import React from "react";
import "./Style/index.css";
import { Root } from "./Root";
import { store } from "./State/Store";
import { add } from "./State/UserState";
import {
  incrementCounter,
  decrementCounter,
  ResetCounter,
} from "./State/CounterState";

const root = document.querySelector("#root");
// root.render(<Root />);
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(incrementCounter(2)); //altra cosa che posso fare è assegnare il valore della action
store.dispatch(decrementCounter(5));
store.dispatch(ResetCounter());
store.dispatch(add({ id: 1, name: "Elio", age: "34" }));
