import  ReactDOM  from "react-dom"
import "./style.css"
import { useNavigate } from "react-router-dom"


function clicked(){
    let bar1=document.getElementsByClassName("bar1")[0]
    let bar2=document.getElementsByClassName("bar2")[0]
    let bar3=document.getElementsByClassName("bar3")[0]

    bar1.classList.toggle("changebar1")
    bar2.classList.toggle("changebar2")
    bar3.classList.toggle("changebar3")

    let sidebar_node=document.getElementsByClassName("Sidebar")[0]
    let sidebar= ReactDOM.findDOMNode(sidebar_node)
    sidebar.classList.toggle("Sidebarslided")
}
export default function Navbar(){
    const navigate=useNavigate()
    return(
        <div className="nav">
            <div className="hamburger-icon" onClick={clicked}>
                <div className="bar1"> </div>
                <div className="bar2"> </div>
                <div className="bar3"> </div>
            </div>
            <img className="logo" alt="logo" src={require("./logo.png")}/>
            <b className="petlook" onClick={()=>{navigate("/")}}>Petlook</b>
            <button className="signin" onClick={()=>{navigate("/signin")}}>Sign In</button>
            <button className="signup" onClick={()=>{navigate("/signup1")}}>Sign Up</button>
        </div>
    )
}