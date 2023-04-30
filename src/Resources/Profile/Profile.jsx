import NavbarSigned from "../Navbar-SignedIn/NavbarSignedIn"
import Sidebar from "../Sidebar/Sidebar"
import { profileinfo } from "../SignUp/SignUp1"
import "./style.css"
export default function Profile(){
    console.log(profileinfo)
    return(
        <div>
        <NavbarSigned />
        <Sidebar />
        <div className="Profile">
        
        <div className="maintext">
            Name: {profileinfo.name}<br /><br />
            {profileinfo.address}<br /><br />
            Age: {profileinfo.age}<br />

        </div>
        </div>
        </div>
    )
}