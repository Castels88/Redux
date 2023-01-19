// vediamo come si creano le liste non ordinate in react 
// di base per creare queste liste come prima cosa si crea una
// ul in cui vi va a mettere un props.il nome delle lista che voglio creare in qiesto caso "names"
// poi si usa il metodo degli array map per ciclare quello che sara all'interno dell'array.
// per far si che tutto funziona al componenete Mylist mettero il props names={{"elio","gaia","luca"}} 

//ora facendo cosi nel console avro un errore "Each child in a list should have a unique "key" prop."
// per evitare tale errore dobbiamo assegnare agli li il props "key"
//ora per far si che ogni elemento degli array sia unico e meglio aggiungere il tag index nel metodo map cosi
//ogni elemento dell'array avra un suo indice e nell'attributo key={name + index} diciamo che aggiundiamo ad ogni nome il suo indice 
//cosi l'errore sparirà

//in futuro dovremmo sicuro renderizzzare una lista di Oggetti che avranno diverse prorietà ed ognuna unica per se stessi
//ad esempio dobbiamo rendereizzare un array di oggetti e ogni oggetto è un to do e ogni to do ha in id.
//come facciamo cio?
//andiamo nella nostra APP.js


import React from "react";
export class Mylist extends React.Component{
    render(){
        
        return (
            <div>
                <ul>
                    {
                        this.props.names.map((name, index) => <li key={name + index} >{name}</li> )
                    }
                </ul>
            </div>
        )
    }
}