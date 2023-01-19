//esiste un altro metodo affinche non si vada a riempire di funzioni event il componente 
//invece di creare una funzione event for ogni nuovo input si va ad utilizzare l'attributo name di ogni input
import React from "react";
export class Myform2 extends React.Component{
    state = {
        username : "",
        password : "",
        remember : false //creo lostate della checkbox che corrisponde a un valore di tru o false a secondo
        //se viene cliccato e quindi fleggato o meno
    }

    handleInputChange=(event)=>{
        const value = event.target.value
        const name = event.target.name//una volta che si assegna l'attributo name nell'input possiamo anche richiamarlo
        //nell event.target in questo modo react andra a renderizzare l'input in base all'attributo name
        this.setState({
            [name] : value // in questo modo sto dicendo a react di aggiornare e considerare i diversi input 
            //in base al loro attributo name quindi cosidera un input "name="username" e un input name="password"
            //se aggiungo un altro inpit e gli do un altro nome considerera anche il terzo 
        })
    }
    //andiamo a creare ora un input di checkbox 
    // questa funzione a differenza delle altre oltre alla costante name 
    // avra la costante checked che sara il checkbox e vado a targettare nell'input del 
    // checkbox l'attributo checked={this.state.remember} e nel set state devo anche selezionare
    // l'attributo checked senno non lo flegga la checkbox
    handleCheckbox=(event)=>{
        const name = event.target.name
        const checked = event.target.checked
        this.setState({
            [name]: checked
        })
    }
    render(){
        return (
            <div>
                <h1>My Form2</h1>
                <input type="text" name="username" value={this.state.username} onChange={this.handleInputChange}
                />
                <input type="password" name="password" value={this.state.password} onChange={this.handleInputChange} />
                <input type="checkbox" name="remember" checked={this.state.remember} onChange={this.handleCheckbox} />
                {/* l'input checkbox chiaramente ha il suo type al name gli do lo stesso nome dello state e invece della 
                value per il checkbox si usa l'attributo checked al quale assegnero lo state rispettivo */}
            </div>
        )
    }
}