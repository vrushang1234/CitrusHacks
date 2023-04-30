import NavbarSigned from "../Navbar-SignedIn/NavbarSignedIn"
import Sidebar from "../Sidebar/Sidebar"
import Intro from "../Intro/Intro"
import Families from "../Families/Families"
export default function HomepageSigned(){
    return(
        <div>
            <NavbarSigned />
            <Sidebar />
            <Intro />
            <Families />
        </div>
    )
}