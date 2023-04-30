import "./style.css"
import { useNavigate } from "react-router-dom"

export default function Navbar_nothing(){
    let navigate=useNavigate()
    return(
        <div className="nav">
            <img className="logo" alt="logo" src={require("./logo.png")}/>
            <b className="petlook" onClick={()=>{navigate("/")}}>Petlook</b>
        </div>
    )
}