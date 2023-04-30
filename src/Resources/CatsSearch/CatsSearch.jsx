import "./style.css"
import NavbarSigned from "../Navbar-SignedIn/NavbarSignedIn"
import cats from "../../Data/Cats"
import Sidebar from "../Sidebar/Sidebar"

export default function CatSearch(){
    return(
        <div className="CatSearch">
            <NavbarSigned />
            <Sidebar />
            {cats.map((prop)=>{
                return(
                    <div className="each_animal">
            <img alt="animal_pic" src={require(`../../Data/Pics/Cats/${prop.picture}`)} className="animal-pic"/>
            <div className="animal_attributes">
                <center><b>{prop.name}</b></center>
                <div className="other_attributes">
                    Breed: {prop.breed}<br />
                    Age: {prop.age}<br />
                    Size: {prop.size}<br />
                    Color: {prop.color}<br />
                    Nature: {prop.nature}<br />
                </div>
            </div>
        </div>
                )
            })}
        </div>
    )
}