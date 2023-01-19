import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
export function Welcome() {
  //affinche il parametro della route venga inserito nel componente devo utilizzare UseParams
  // lo useParams ritorna un oggetto quindi nella costante dentro {}andro a mettere il mio
  //parametro che associerò all h2 che visualizzara il nome
  //per vedere che funzione nell'address bar mettero http://localhost:3000 normale address piu "/elio" in cui elio è
  // riconosciuto come il parametro
  //2 step noteremo che non inserendo /elio il welcome non e renderizzato come facciamo a renderizzarlo?
  //react route non acceta optional parametri quindi per far si che venga visualizzato il welcome senza parametro
  //basta semplicemente ricreare una seconda route welcome senza parametro
  // cosi per il mio Welcome avra solo la scritta Hello possiamo stabilire un parametro di default
  // aggiungendo alla const di usePrames che name è uguale a cio che vogliamo
  const navigate = useNavigate();
  const { name = "World" } = useParams();
  function handleLoginButton() {
    navigate("/login");
  }
  return (
    <div>
      <h2>Hello {name}</h2>
      {/* andiamo ad inserire il componente link al quale dobbiamo dare l'attributo "to" al path che vogliamo dove finisca
            in questo caso al login form e possiamo anche aggiungerci del testo  */}
      <Link to="/login">Login to the App</Link>
      <div>
        {/* prima cosa creiamo il bottone che associeremo ad una funzione
                seconda cosa come lo useState vado ad inserire lo useNavigate
                terza cosa associo lo useNavigate ad una const navigate
                quarta cosa all'interno della funzione richiamo la costante
                e all'interno delle ("metto la posizione in cui voglio che vada la pagina") */}
        <button onClick={handleLoginButton}>Enter the App</button>
      </div>
    </div>
  );
}
