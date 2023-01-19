import { Welcome } from "./Welcome";
import { Container } from "./Container";
import { LoginForm } from "./LoginForm";
import { Link, Route, Routes } from "react-router-dom";
import { Catalogue } from "./Catalogue";
import { Products } from "./Products";

export function App() {
  //in questa lezione vedremo un primo approccio a redux . come prima cosa andiamo ad installare redux con npm i redux
  //2)adesso che lo abbiamo installato dobbiamo creare un Reducer il quale raccoglierà lo state che gli mandiamo e la conseguente azione
  //ritornando un nuovo State .
  //3)Come best practice andiamo a creare una cartella con tutti gli eventuali State che vogliamo passare al Reducer => State al cui
  //interno mettere ad esempio un couter component andiamo nel componente =>

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
