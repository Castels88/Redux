import ReactDOM from "react-dom/client";
import React from "react";
import "./Style/index.css";
import { Root } from "./Root";
import { store } from "./State/Store";
import { newCounter } from "./State/NewCounterState";
import { newUsers } from "./State/NewUserState";
import { delayAction } from "./State/DelayMiddle";
const root = document.querySelector("#root");
// root.render(<Root />);
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(newCounter.actions.increment(2));
store.dispatch(newCounter.actions.decrement(5));
store.dispatch(newCounter.actions.increment(10));
store.dispatch(newUsers.actions.add({ id: 1, name: "Elio", age: 34 }));
store.dispatch(newCounter.actions.decrement(3));
store.dispatch(
  delayAction(newUsers.actions.add({ id: 2, name: "luca", age: 17 }), 5000)
);
store.dispatch(newCounter.actions.reset());
