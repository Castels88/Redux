import { Link, useParams } from "react-router-dom"

export function Products (){
    //estraiamo il parametro della route
    const {id} = useParams()
    return(
        <div>
            <h3>Product {id}</h3>
            <Link to="/products">back</Link>
        </div>
    )
}