import { useNavigate } from "react-router-dom"
import "./style.css"
export default function Sidebar(){
    const navigate=useNavigate()
    return(
        <div className="Sidebar">
            <b className="sidetext">I want to foster a:</b>
            <button className="sidebutton" onClick={()=>{navigate("/dogsearch")}}>Dog</button>
            <button className="sidebutton" onClick={()=>{navigate("/catsearch")}}>Cat</button>
            <button className="sidebutton">Hamster</button>
            <button className="sidebutton">Bird</button>
            <button className="sidebutton">Rabbit</button>
            <button className="sidebutton">Turtle</button>
            <button className="sidebutton">Lizard</button>
            <button className="sidebutton">Snake</button>
        </div>
    )
}