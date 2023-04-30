import { useNavigate } from "react-router-dom";
import NavbarNothing from "../Navbar-nothing/Navbar-nothing";
import "./style.css"
export default function SignUp2(){
    const navigate=useNavigate()
    return(
        <div>
            <NavbarNothing />
            <div className="Signup">
            <form className="form2" onSubmit={()=>{navigate("/signedin")}}>
            <label>
                Annual Budget available for pet:<br />
                <input className="textinput" type="text" />
                <br /> <br />
                No. of pets till now:
                <br />
                <input className="textinput" type="text" />
                <br /><br />
                No. of people living in the house:
                <br />
                <input className="textinput" type="text" />
                <br /><br />
                No. of kids living in the house:
                <br />
                <input className="textinput" type="text" />
                <br /><br />
                Size of the house (Sq. feet or Sq. meters):
                <br />
                <input className="textinput" type="text" />
                <br /><br />
                Expected number of hours spent in external chores per day:
                <br />
                <input className="textinput" type="text" />
                <br /><br />
                <input className="signinsubmit" type="button" value={"Submit"} onClick={()=>{navigate("/signedin")}}></input>
                </label>
            </form>
            </div>
            
        </div>
    )
}