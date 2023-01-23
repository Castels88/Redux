import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
//lo importiamo cosi e lo aggiungiamo nei middleWare nel mio store
import thunkMiddleware from "redux-thunk";
import { middleWare } from "./MiddleWare";
import { newCounter } from "./NewCounterState";
import { newUsers } from "./NewUserState";
import { delayMiddle } from "./DelayMiddle";
import { loadingState } from "./LoadingState";
import { errorState } from "./ErrorState";

const rootReducer = combineReducers({
  counter: newCounter.reducer,
  user: newUsers.reducer,
  //lo chiamo UI perche sono i processi che si avranno
  //nella gestione dell user UI
  ui: combineReducers({
    loading: loadingState.reducer,
    error: errorState.reducer,
  }),
});

export const store = legacy_createStore(
  rootReducer,
  applyMiddleware(middleWare, delayMiddle, thunkMiddleware)
  //2)adesso che lo importato i thunk funziona cosi : ogni volta che
  //dispatchio un action questa action e correttamente usata nello store
  //passa attraverso i middleWare e raggiunge i reducer.
  //ma se il thunk riceve un azione che non è un oggetto ma un altra
  //function invece di mandarla ai reducer direttamente la applica
  //con il dispatch e getState method .
);
//3)proviamo a creare una action creator nell index.js=>
