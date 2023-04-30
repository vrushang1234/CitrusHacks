import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Intro from "../Intro/Intro"
import Families from "../Families/Families"
export default function Homepage(){
    return(
        <div>
            <Navbar />
            <Sidebar />
            <Intro />
            <Families />
        </div>
    )
}