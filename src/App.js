import { Welcome } from "./Welcome";
import { Container } from "./Container";
import { LoginForm } from "./LoginForm";
import { Link, Route, Routes } from "react-router-dom";
import { Catalogue } from "./Catalogue";
import { Products } from "./Products";
// in questa lezione vedremo u tool che rende l ' utilizzo diredux molto piu facile
//andiamo all'interno del NewCounterState =>
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
