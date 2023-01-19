import { Link, Outlet } from "react-router-dom";

export function Catalogue (){
    return (
        <div>
            <h2>All products</h2>
            {/* // immaginiamo di avere un lista di prodotti mettimao degli UL  */}
            <ul>
                {/* inserendo dentro gli li il componente Link a assegando al to questa route "/products/1"
                quando cliccherò sul prodotto 1 verro reindirizzato nella pagina del prodotto 1 */}
                <li><Link to="/products/1">Product 1</Link></li>
                <li><Link to="/products/2">Product 2</Link></li>                
                <li><Link to="/products/3">Product 3</Link></li>            
            </ul>
            <hr />
            {/* qui inseriro il componente Outlet in modo che il component Product venga renderizzato dentro al padre */}
            <Outlet/>        
        </div>
        
    )
}