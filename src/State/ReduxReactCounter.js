//come prima cosa andiamo a richiamare lo state del nostro counter

import { useSelector, useDispatch } from "react-redux";
import { newCounter } from "./NewCounterState";

//con lo useSelector. voglio che ritorni uno state
//e il valore del mio counter
//se io voglio usare il classico dispatch method in react esiste
//lo useDispatch in questo modo posso richiamare le azioni del
//mio state
const ReduxReactCounter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  //mettiamo caso io volessi incrememtare il counter ed
  //utilizzare la azione del vecchio counterState
  function handleIncrement() {
    dispatch(newCounter.actions.increment(1));
  }
  function handledecrement() {
    dispatch(newCounter.actions.decrement(1));
  }
  function handleReset() {
    dispatch(newCounter.actions.reset());
  }

  return (
    <div>
      <h3>current value:{counter}</h3>
      <button onClick={handleIncrement}>increment</button>
      <button onClick={handledecrement}>decrement</button>
      <button onClick={handleReset}>reset</button>
    </div>
  );
};

export default ReduxReactCounter;
