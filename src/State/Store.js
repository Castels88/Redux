//importiamo il nuovo reducer e lo inseriamo nel CombineReuducer
//function in modo da poterli utilizzare entrambi

import { legacy_createStore, combineReducers } from "redux";
import { newCounter } from "./NewCounterState";
import { newUsers } from "./NewUserState";

const rootReducer = combineReducers({
  counter: newCounter.reducer,
  user: newUsers.reducer,
});

export const store = legacy_createStore(rootReducer);
