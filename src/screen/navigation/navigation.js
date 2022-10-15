import "./navigation.css";
import Facebook from "../../assets/logo/facebook.svg";

function App() {
  return (
    <div className="Navigation">
      <div className="navWrapper">
        <div className="reseaux">
          <img src={Facebook}></img>
        </div>
        <div className="menu">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default App;
