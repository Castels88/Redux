import { Welcome } from "./Welcome";
import { Container } from "./Container";
import { LoginForm } from "./LoginForm";
import { Link, Route, Routes } from "react-router-dom";
import { Catalogue } from "./Catalogue";
import { Products } from "./Products";
//in questa lezione vedremo come gestire async function con redux
//tramite uno strumento di redux chiamato thunk
//cosa è un thunk ? è molto simile ad una action creator
// che ritorna un oggetto con un type e un payload
//quando usuamo thunk creiamo anche delle function che
//ritornano altre function che hanno sia il dispatch method che
// il getState method . Inoltre sono molto utili per async await function
//andiamo a vedere come si crea , andiamo nello store=>
export function App() {
  return (
    <Container
      title={
        <div>
          <h1>My amazing App</h1>
          <Link to="/">Home</Link> | <Link to="products">Products</Link>
        </div>
      }
    >
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
    </Container>
  );
}
