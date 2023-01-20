import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import { middleWare } from "./MiddleWare";
import { newCounter } from "./NewCounterState";
import { newUsers } from "./NewUserState";
import { delayMiddle } from "./DelayMiddle";

const rootReducer = combineReducers({
  counter: newCounter.reducer,
  user: newUsers.reducer,
});
//5)per passare ilnostro middleware dentro il create store come
//secondo paramatro andiamo ad utilizzare la function appluMiddleware al
//quale passemo il nostro middlaware creato
//6)adesso tornando nel index js e rimuovendo il subscribe method
//ritorniamo nel middleware =>
export const store = legacy_createStore(
  rootReducer,
  applyMiddleware(middleWare, delayMiddle)
);
//andiamo a ritardare l aggiunta di un uetente => index.js
