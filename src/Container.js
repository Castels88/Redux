// in react posso anche creare dei componenti che andranno ad avere al loro interno altri 
// componenti che saranno chiamati child, ad esempio questo componente andra a sostiture 
// il precedente div che contaneva tutta l'applicazione

// ora se io volessi rimuovere l h2 che c'era allinizio della ia app e volessi inserire 
// il titiolo come props del componente container che contiene tutta l'app 
// dovro fare cosi 

// all'interno del container andro a crare un altro div che servira per il titolo al quale assegnero 
// // il props titolo che mi serve
// la cosa figa e che questo componente al suo interno e come se avesse gia tutta la mia app 
// infatti il props.childer corrisponde a tutti gli altri componenti che sono all' interno
// infatti se metto la separazione con HR si andra a piazzare direttamente sotto il titolo 

import React from "react"
export class Container extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="container-title">
                {this.props.title}
                </div>
                <hr />
                <div>
                {this.props.children}
                </div>   
            </div>
        )
    }
}