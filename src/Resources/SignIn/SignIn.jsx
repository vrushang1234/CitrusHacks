import "./style.css"
import React from "react"
import NavbarNothing from "../Navbar-nothing/Navbar-nothing"
import { useNavigate } from "react-router-dom"
export default function SignIn(){
    const navigate=useNavigate()
    function submitted(){
        navigate("/signedin")
    }
    return(
        <div>
        <NavbarNothing />
        <div className="SignIn">
           <form className="form" onSubmit={submitted}>
            <label>
                Email Address:<br />
                <input className="textinput" type="text" />
                <br /> <br />
                Password:
                <br />
                <input className="textinput" type="password" />
                <br /><br />
                <center><input className="signinsubmit" type="submit" /></center>
            </label>
           </form>
        </div>
        </div>
    )
}