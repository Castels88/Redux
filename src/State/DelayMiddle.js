export const delayMiddle = (store) => (next) => (action) => {
  // quelllo che vogliamo fare è : creare una delay action ma solo
  //se la azione ha una delay key .

  //quindi se non ho un delay mi vai alla prossima action
  if (!action.delay) {
    return next(action);
  }

  //se ho un delay mi setti un timeOut con quel delay e mi prosegui
  //alla prossima action
  setTimeout(() => {
    next(action);
  }, action.delay);
};

//adesso quello che dobbiamo fare è creare una function
//che implementi l'azione e il delay
export function delayAction(action, delay) {
  return {
    ...action,
    delay,
  };
}

//andiamo ad importare nello Store=>
