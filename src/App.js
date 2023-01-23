import { Welcome } from "./Welcome";
import { Container } from "./Container";
import { LoginForm } from "./LoginForm";
import { Link, Route, Routes } from "react-router-dom";
import { Catalogue } from "./Catalogue";
import { Products } from "./Products";
import { Provider } from "react-redux";
import { store } from "./State/Store";
import { useEffect } from "react";
import { fetchUser } from "./State/NewUserState";
//in questa lezione vedremo come implementare adesso redux in react
//come prima cosa dobbiamo installare react redux con npm
//rimuoviamo tutti i dispatch dello store dal file index =>
//come prima cosa dobbiamo richiamare il Provider di react redux
//e inserire la nostra app dentro il Provider e passargli
//lo store come props in modo che il nostro store
//funzioni per ogni components
//per poter selezione ogni singolo state dello store si utilizza
//lo useSelector che prendera il singolo state che vogliamo
//e ritornera la funzione annessa andiamo a creare un nuovo
//componente => ReduxReactCounter
export function App() {
  useEffect(() => {
    store.dispatch(fetchUser("castels88"));
  }, []);
  return (
    <Provider store={store}>
      <div className="container">
        <Routes>
          <Route path="/:name" element={<Welcome />} />
          <Route path="/" element={<Welcome />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="products" element={<Catalogue />}>
            <Route index element={<p>please select a product</p>}></Route>
            <Route path=":id" element={<Products />}></Route>
          </Route>
          <Route
            path="*"
            element={
              <div>
                {" "}
                <p>not fount Route</p>
                <Link to="/">Go Home</Link>
              </div>
            }
          />
        </Routes>
      </div>
    </Provider>
  );
}
