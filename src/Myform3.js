// se io volessi il checkbox anche in una sola funzione come dovrei fare?
import React from "react";
export class Myform3 extends React.Component{
    state = {
        username : "",
        password : "",
        remember : false 
    }
    // come ho utilizzato la value, il name posso anche utilizzare il type dato che ora ho un checkbox ma
    //devo anche inserire l'attributo checked dell'input checkbox che è fondamentale
    handleInputChange=(event)=>{
        const value = event.target.value
        const name = event.target.name
        const type = event.target.type
        const checked = event.target.checked
        //adesso come faccio a dire alla funzione come distinguere il tipo degli input tra di loro?
        // come fargli capire se utilizzare il checkbox o il password input o il text input?
        this.setState({
            [name] : type === "checkbox" ? checked : value
            //con questa espressione sto dichiarando che
            //se type é uguale a checkbox allora flegga la checkbox senno usa il valore degli altri 2 input
        })
    }
    //in questo semplice modo posso resettare i parametri dei miei imput con un solo bottone 
    //ho semplicemente settato il setState come risulta all'inizio 
    resetState= ()=>{
        this.setState({
            username: "",
            password:"",
            remember: false
        })
    }
    // se volessi un tasto che inserisce dei dati precompilati la stessa cosa sarebbe all'interno
    // dei setState posso inserire gia i dati che desidero ricereve al onClick
    PrefillText=()=>{
        this.setState({
            username:"elio",
            password:"123456",//anche se la password non si mette mai prefill 
            remember: true
        })
    } 
    //se volessi vedere tutti gli state che vengono effettuati posso usare i componet life cycling delle 
    //precedenti lezioni 
    componentDidUpdate(){
        console.log(this.state)
    }
    render(){
        return (
            
            <div>
                <div>    
                    <h3>Controlled Component</h3>
                    <input type="text" name="username" value={this.state.username} onChange={this.handleInputChange}
                    />
                    <input type="password" name="password" value={this.state.password} onChange={this.handleInputChange} />
                    <input type="checkbox" name="remember" checked={this.state.remember} onChange={this.handleInputChange} />
                </div>
                {/* adesso creo un bottone per resettare tutti i parametri e gli associo l evento onclick con la sua */}
                {/* funzione */}
                <div>
                    <button onClick={this.resetState}> Reset</button>
                </div>
                {/* adesso creo un bottone che mi va ad inserire dati a mio piacimento nei campi e gli assegno 
                la funzione */}
                <div>
                    <button onClick={this.PrefillText}> Prefill form</button>
                </div>
            </div>
        )
    }
}