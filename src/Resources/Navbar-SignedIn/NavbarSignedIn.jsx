import  ReactDOM  from "react-dom"
import "./style.css"
import { useNavigate } from "react-router-dom"



function clicked(){
    let bar1_node=document.getElementsByClassName("bar1")[0]
    let bar2_node=document.getElementsByClassName("bar2")[0]
    let bar3_node=document.getElementsByClassName("bar3")[0]

    let bar1=ReactDOM.findDOMNode(bar1_node)
    let bar2=ReactDOM.findDOMNode(bar2_node)
    let bar3=ReactDOM.findDOMNode(bar3_node)

    bar1.classList.toggle("changebar1")
    bar2.classList.toggle("changebar2")
    bar3.classList.toggle("changebar3")

    const sidebar_node=document.getElementsByClassName("Sidebar")[0]
    const sidebar= ReactDOM.findDOMNode(sidebar_node)
    sidebar.classList.toggle("Sidebarslided")
}
export default function NavbarSigned(){
    const navigate=useNavigate("signedin")
    return(
        <div className="nav">
            <div className="hamburger-icon" onClick={clicked}>
                <div className="bar1"> </div>
                <div className="bar2"> </div>
                <div className="bar3"> </div>
            </div>
            <img className="logo" alt="logo" src={require("./logo.png")}/>
            <b className="petlook" onClick={()=>{navigate("/signedin")}}>Petlook</b>
            <img alt="user" onClick={()=>{navigate("/profile")}} src={require("./usericon.png")} className="usericon"/>

        </div>
    )
}