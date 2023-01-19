import { useState } from "react"
import { Link } from "react-router-dom"

export function LoginForm(){
    
    const [data, setData] = useState({
        username: "",
        password: "",
        remember: false
    })
    function handleInputChange(event){
        const {name, type, value, checked} = event.target
        
        setData((data)=>{
            return{
            ...data,
            [name]: type === "checkbox" ? checked : value
            }
        })
        
    }
    console.log(data)
    return(
        <form>
            <input onChange={handleInputChange} type="text" name="username" value={data.username} />
            <input onChange={handleInputChange} type="password" name="password" value={data.password} />
            <input onChange={handleInputChange} type="checkbox" name="remember" checked={data.remember} />
            <Link to="/">Back to Homepage</Link>
        </form>
    )
}