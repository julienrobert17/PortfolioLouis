import "./index.scss";
import { svgs, imgs } from "../../assets";

const Component = ({ label, secondStyle = false, demoRef}) => {
  return (
    <div className={'wrapper'} ref={demoRef}>
      <div className={`background-slide${secondStyle ? " second" : ""}`}>
        {secondStyle && (
          <ul>
            <li className={"resume-btn"}>
              <span>CINEMA</span>
            </li>
            <li className={"resume-btn"}>
              <span>THEATRE</span>
            </li>
            <li className={"resume-btn"}>
              <span>PUBLICITE</span>
            </li>
          </ul>
        )}
      </div>
      {!secondStyle && (<p id="name">{label}</p>)}
    </div>
  );
};

export default Component;
