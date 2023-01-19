//in questa lezione vedremo come aggiungere un evento onclick al counter in modo che aumenti il valore ogni volta 
// che clicchiamo sul bottone
// molto importante e che la funzione che creeremo deve essere inizializzata con un arrow function
// perche solo in questo modo potremo poi richiamare la funzione qui <button onClick={this.IncrementValue} ></button>
// senno ci dara un errore

import React from "react";
export class Button extends React.Component{
    state = {
        count : this.props.InitialValue
    }
    //altra cosa molto importante degli eventi e che posso anche vedere diverse informazioni quando clicco 
    //aggiungendo alla funzione il parametro evento quando clicchero sul bottono nella console
    //mi spunteranno diverse info tipo quante volte ho cliccato, in che posizione era il cursore,
    //se ho utillizzato altri basti del mouse ecc ecc 
    IncrementValue = (event) => {
        console.log(event)
        this.setState((state)=>{
            return{
                count: state.count + 1
            }
        })
    }

    render(){
        return(
            <div>
                <h2>Increment button</h2>
                <h3>{this.state.count}</h3>
                <button onClick={this.IncrementValue}>Incrementa</button>
            </div>
        )
    }
}