//andiamo a creare un middleWare per loggare le azioni nello store
//la sintassi nel middleWare è molto strana un insime di arrow function
export const middleWare = (store) => (next) => (action) => {
  console.log("received action ", action);
  //7)possiamo andare adesso a definire il current state dopo che
  //il middleware è stato inizializzato
  //   console.log("previous state", store.getState());

  const result = next(action);
  //   console.log("current state", store.getState());

  return result;
};
// abbiamo 3 funzioni ed ogniuno di esse è molto specifica
//1) lo store
//2)la next function è la piu interessante, perche essa in teoria
//serve a richiamare il prossimo middleWare nella catena dei middleWare
//perche ne possiamo avere piu di uno o puo muovere l azione
//alla prossima fase
//3) action che sarebbe l'azione che vogliamo venga mandata allo store

//4)andiamo a registrare il middleWare nelnostro Store =>

//8) andiamo a definire un middleware che mi fa un delay di una data
//action creiamo un nuovo middleWare =>
