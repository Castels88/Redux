//come prima cosa andiamo  a creare lo state di default che sarà un array vuoto
//) quali azioni verranno fatte ? -aggiungere utenti, rimuovere utenti, modificare gli utenti, pulire gli utenti

//) andiamo a creare queste azioni
const defaultState = [];

const ADD = "USER&ADD";
const REMOVE = "USER&REMOVE";
const EDIT = "USER&EDIT";
const CLEAR = "USER&CLEAR";

//) adesso che ho stabilito le azioni devo creare le funzioni che svolgeranno queste azioni
//in questa andro a settare l'aggiunta di un utente
export function add(user) {
  return {
    type: ADD,
    payload: user,
  };
}
//qui come rimuovere un utente quindi mi serve un id come parametro per rimuoverlo
export function remove(id) {
  return {
    type: REMOVE,
    payload: id,
  };
}
//qui invece andro a settare la modifica dell utente quindi mi serve un id e i dati che metterò
export function edit(id, data) {
  return {
    type: EDIT,
    payload: {
      id,
      data,
    },
  };
}
//quan invece vado a pulire l utente
export function clear() {
  return {
    type: CLEAR,
  };
}

//adesso che ho sviluppato le action posso andare a creare il Reducer

export function userReducer(state = defaultState, action) {
  switch (action.type) {
    case ADD: {
      // cosa facciamo qui diciamo al return di prendere tutto l array e di aggiungere il payload
      return [...state, action.payload];
    }
    case REMOVE: {
      // qui sto dicendo che per rimuovere un utente deve prendere lo state e filtrarlo per user che lo stiamo chiedendo e
      // di tenere solo quello che stiamo filtrando
      return state.filter((user) => user.id !== action.payload);
    }
    case EDIT: {
      // in questo case vado a mappare lo state e quando incontro lo user uguale all id che sto cercando
      // mi riprende l user e aggiunge i dati che gli mando
      return state.map((user) => {
        if (user.id === action.payload.id) {
          return { ...user, ...action.payload.data };
        }
        return user;
      });
    }
    // qui invece faccio tornare lo state di default
    case CLEAR: {
      return defaultState;
    }
    default: {
      return state;
    }
  }
}
//adesso il nostro reducer è pronto e lo possiamo aggiungere al nostro store
//come si aggiunge allo store e fare in modo di aver i 2 reducer insieme andiamo
//nello store =>
