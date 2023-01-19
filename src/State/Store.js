//1)scriviamo legacy_createStore e direttamente ci importera lo Store da redux
//2)all interno dello Store mettiamo il nostro Reducer
//3)mettiamo lo store dentro export const che possiamo exportare dove vogliamo

import { legacy_createStore } from "redux";
import {
  counterReducer,
  decrementCounter,
  incrementCounter,
  ResetCounter,
} from "./CounterState";

export const store = legacy_createStore(counterReducer);

//4)adesso andiamo ad utilizzare lo store. lo store è un oggetto e ha diversi metodi
//5)uno di questi metodi è il Dispatch  method che riceve un azione e la manda allo Store stesso
//6)richiamando lo store ed il suo metodo posso assegnare l'action che avevo definito nel counterReducer
store.dispatch(incrementCounter(2)); //altra cosa che posso fare è assegnare il valore della action
//in questo modo aumenterà di 2
store.dispatch(decrementCounter(5));
//in questo modo diminuirà di 5
store.dispatch(ResetCounter());
//cosi invece il counter si resetterà

//7)Come faccio a sapere lo stato dello Store ? devo richiamare il metodo getState() dello store.
//8)ma affinche veda il cambio di stato ad ogni aggiornamento dello state devo utilizzare un altro metodo
//il subscribe() questo metodo permette di esaminare e crendere in considerazione ogni cambio dello State
//molto importante la subscribe va sempre con una call back ()=>{}

store.subscribe(() => {
  console.log(store.getState());
});

//9)andiamo a creare un nuovo Reduce che formerà un array di utenti =>
