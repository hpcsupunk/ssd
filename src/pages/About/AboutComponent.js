import RoundedButton from "../../components/RoundedButton/RoundedButton";
import NavBar from "../../components/Navigation/NavBar";
import './About.css';
function AboutComponent() {
    return (
        <div>
            {/* <NavBar navbar='About' /> */}
            <h1 className="head">This is AboutComponents</h1>
            <h2>hi</h2>
            <RoundedButton text="Click to Go Home" />
        </div>
    );
}

export default AboutComponent;