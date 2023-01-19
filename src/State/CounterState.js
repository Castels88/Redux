// qui dobbiamo andare a definire delle impostazioni per il nostro Counter tipo che partirà da 0
const defaultState = 0;

//2) definiamo delle azioni tipo che il counter può aumentare o diminuire O resettarlo
//queste azioni sono definite action type ed una best practice dare all'azione IL NOME DELLO STATE @ IL TIPODI AZIONE CHE FA
const INCREMENT = "COUNTER@INCREMENT";
const DECREMENT = "COUNTER@DECREMENT";
const RESET = "COUNTER@RESET";

//3) adesso che ho definito action type devo definire le action creators che sono delle function che rappresentano
//le azioni sottoforma di oggetti che aranno un type key che saranno le nostre Type Action => const INCREMENT = 'COUNTER@INCREMENT'
// ed un payload che non è strettamente necessario ma dipende dall utilizzo tipo nel nostro counter può definire l'incremento o decremento
//del nostro counter tipo di 1 o di 2 ecc ecc
//4)altra cosa importante e chiaramente mettere l'export davanti alla nostre function in modo da poterle exportare

export function incrementCounter(by = 1) {
  return {
    type: INCREMENT,
    payload: by,
  };
}

export function decrementCounter(by = 1) {
  return {
    type: DECREMENT,
    payload: by,
  };
}

export function ResetCounter() {
  return {
    type: RESET,
  };
}

//5 adesso che abbiamo stabilito le nostre action possiamo creare il nostro Reducer che sarà una function ed avrà
//uno state che sara uguale a quello che noi abbiamo definito in partenza , e le action che abbiamo definito prima.
//queste action all' interno del reducer verranno prese in considerazione trmitte uno switch and case classico di javascript

//6) al return di ogni case assegnerò lo state iniziale + o - il payload che ho assegnato nelle action
//7) molto IMPORTANTE definire sempre uno defalutState sennò l'applicazione crusherà

//8)adesso che abbiamo finito il nostro Reducer possiamo andare a creare il nostro Store
//creaimo un file Store.js nella cartella State =>

export function counterReducer(state = defaultState, action) {
  switch (action.type) {
    case INCREMENT: {
      return state + action.payload;
    }
    case DECREMENT: {
      return state - action.payload;
    }
    case RESET: {
      return defaultState;
    }
    default: {
      return state;
    }
  }
}
