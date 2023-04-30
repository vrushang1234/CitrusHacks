import "./style.css"
export default function Families(){
    return(
        <div className="Families">
            <h1 className="p1header">Families of the month</h1>
            <img className="familypic firstfamily" src={require("./Family 1.jpg")} alt="family1" />
            <img className="familypic secondfamily" src={require("./Family 2.jpg")} alt="family2" />
            <img className="familypic thirdfamily" src={require("./Family 3.png")} alt="family3" />
            <img className="familypic fourthfamily" src={require("./Family 4.jpg")} alt="family4" />
            <img className="familypic fifthfamily" src={require("./Family 5.jpg")} alt="family5" />
            <img className="familypic sixthfamily" src={require("./Family 6.jpg")} alt="family6" />
        </div>
    )
}