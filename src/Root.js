import {BrowserRouter} from "react-router-dom"
import { App } from "./App"
//dentro il componenete andiamo a mettere il BrowserRouter e attenzione se non viene importato 
// da react lo dobbiamo importare noi
// secondo step è importare la nostra App dentro il root component
// ora devo fare in modo che venga renderizzato il Root component 
// quindi vado sul mio index.js file => e invece di App metto il Root componente
//torniamo alla nostra App.jsc=>


export function Root(){
    return(
        <BrowserRouter>
        <App/>
        </BrowserRouter>
    )
}