//come prima cosa andiamo  a creare lo state di default che sarà un array vuoto
//2) quali azioni verranno fatte ? -aggiungere utenti, rimuovere utenti, modificare gli utenti, pulire gli utenti
//3) andiamo a creare queste azioni
const defaultState = [];

const ADD = "USER&ADD";
const REMOVE = "USER&REMOVE";
const EDIT = "USER&EDIT";
const CLEAR = "USER&CLEAR";

//4) adesso che ho stabilito le azioni devo creare le funzioni che svolgeranno queste azioni

export function add(user) {
  return {
    type: ADD,
    payload: user,
  };
}
export function remove(id) {
  return {
    type: REMOVE,
    payload: id,
  };
}
export function edit(id, data) {
  return {
    type: EDIT,
    payload: {
      id,
      data,
    },
  };
}
export function clear() {
  return {
    type: CLEAR,
  };
}
