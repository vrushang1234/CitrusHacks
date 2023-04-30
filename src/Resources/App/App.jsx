import "./style.css"

import { Route, Routes } from "react-router-dom"
import SignIn from "../SignIn/SignIn"
import Homepage from "../HomePage/HomePage"
import HomepageSigned from "../HomePageSigned/HPSigned"
import SignUp1 from "../SignUp/SignUp1"
import SignUp2 from "../SignUp/SignUp2"
import DogSearch from "../DogsSearch/DogSearch"
import Profile from "../Profile/Profile"
import CatSearch from "../CatsSearch/CatsSearch"
export default function App(){
    return(
        <div>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="signin" element={<SignIn />} />
                <Route path="signedin" element={<HomepageSigned />} />
                <Route path="signup1" element={<SignUp1/>} />
                <Route path="signup2" element={<SignUp2/>} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/dogsearch" element={<DogSearch />} />
                <Route path="/catsearch" element={<CatSearch />} />
            </Routes>
        </div>
    )
}