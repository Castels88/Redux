// andiamo a creare un form con react 
// creaimao uno state che chiamiamo username e gli diamo un oggetto vuoto che conterra il nostro dato 
// dell'input

//andiamo ad aggiungere un altro campo al nostro form ossia quello della password 
//creiamo un nuovo state password che sara vuoto per contenere il nostro valore

import React from "react";
export class Myform extends React.Component{
    state = {
        username : "",
        password : ""
    }
//nel render andiamo a creare il tag input e gli diamo i valori di name in modo da riconoscerlo 
// e come value "valore" gli diamo lo state in modo da legari tra di loro e il valore che sara dato nello state 
// sara il valore dell'input stesso

//ora molto importante e creare il onchange event nel render in modo da ordinare al render di renderizzare
// ogni cambio che venga fatto nel nostro form
// allo stesso tempo dobbiamo creare una funzione utilizzando sempre la arrow function in modo 
// da poterla richiamare nel render, so che questa function avra un event e per reaccogliere il valore
// che verra dato all'input dobbiamo mettere event.target.value "event.target significa che targettiamo direttamente 
// il componente che desideriamo nello specifico il nostro input"
// molto importante e inserire un setstate nella function in modo da ordinare alla funzione di 
// renderizzare ogni valore che verra dato"infatti se lo levo e vado nel browser e provo a scrivere nel form
// non potro scrivere ninete e il console log mi dira che manca il setstate"
    handleInputChange=(event)=>{
        const value = event.target.value
        console.log(value)//cosi vediamo il valore in console
        this.setState({
            username : value
        })
    }
    //creaiamo un altra funzione con event per la password che sara molto simile alla precedente ma con la piccola
    // differenza che invece di di avre nel setstate username : value avrà password : value perche ci riferiamo al
    // secondo state che abbiamo creato
    handlePasswordChange=(event)=>{
        const value = event.target.value // in questo modo ordino di targettare questo evento
        this.setState({
            password: value,
        })
    }
    render(){
        return (
            <div>
                <h1>My Form</h1>
                <input type="text" name="username" value={this.state.username} onChange={this.handleInputChange}
                />
                {/* creaiamo un nuovo input come il precedente */}
                <input type="password" name="password" value={this.state.password} onChange={this.handlePasswordChange} />
            </div>
        )
    }
}