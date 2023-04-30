import { useNavigate } from "react-router-dom";
import NavbarNothing from "../Navbar-nothing/Navbar-nothing";
import "./style.css"
import { useState } from "react";

let profileinfo={
    name:"",
    address:"",
    age:"",
}
export default function SignUp1(){
    const[name,setname]=useState("")
    const[address,setaddress]=useState("")
    const[age,setage]=useState("")
    let navigate=useNavigate()
    return(
        <div>
            <NavbarNothing />
            <div className="Signup">
            <form className="form" onSubmit={()=>{
                navigate("/signup2")
                profileinfo.name=name
                profileinfo.age=age
                profileinfo.address=address
                }}>
                <label>
                Full Name: <br />
                <input className="textinput" type="text"  onChange={(event)=>{setname(event.target.value)}}  />
                <br /><br />
                Address:
                <br />
                <input className="textinput" type="text"  onChange={(event)=>{setaddress(event.target.value)}} />
                <br /><br />
                Age
                <br />
                <input className="textinput" type="number"  onChange={(event)=>{setage(event.target.value)}}/>
                <br /> <br />
                <center><input className="signinsubmit" type="submit" value={"Next"} /></center>
                </label>
               
            </form>
            </div>
        </div>
    )
}
export {profileinfo}