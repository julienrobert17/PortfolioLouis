import "./index.scss";
import { Navigation, BackgroundSlide, Gallery } from "../../components";
import { imgs, svgs } from "../../assets";
import { useRef } from "react";
const menu = [];
const Component = () => {
  const mainRef = useRef(null);
  const aboutRef = useRef(null);
  const demoRef = useRef(null);
  const galleryRef = useRef(null);
  const contactRef = useRef(null);

  const handleScroll = (ref) => {
    window.scrollTo({
      top: ref.offsetTop-75,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div id={"main"} ref={mainRef}>
      <div id={"navigation"}>
        <div className={"logos"}>
          <a>
            <svgs.Facebook />
          </a>
          <a href="https://www.facebook.com">
            <svgs.Insta />
          </a>
          <a href="https://www.facebook.com">
            <svgs.Twitter />
          </a>
          <a href="https://www.facebook.com">
            <svgs.Youtube />
          </a>
        </div>
        <div className={"menus"}>
          <p
            onClick={() => {
              handleScroll(mainRef.current);
            }}
          >
            Acceuil
          </p>
          <p
            onClick={() => {
              handleScroll(aboutRef.current);
            }}
          >
            A propos
          </p>
          <p
            onClick={() => {
              handleScroll(demoRef.current);
            }}
          >
            Démos
          </p>
          <p
            onClick={() => {
              handleScroll(galleryRef.current);
            }}
          >
            Gallerie
          </p>
          <p>CV</p>
          <p
            onClick={() => {
              handleScroll(contactRef.current);
            }}
          >
            Contactez-moi
          </p>
        </div>
      </div>
      <BackgroundSlide label={"Louis Teurnier"} />
      <div className={"band"} ref={aboutRef}>
        <div className={"image"}></div>
        <div className={"about-me"}>
          <span> ABOUT ME ! </span>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. I’m a
            great place for you to tell a story and let your users know a little
            more about you.
          </p>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. I’m a
            great place for you to tell a story and let your users know a little
            more about you.
          </p>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. I’m a
            great place for you to tell a story and let your users know a little
            more about you.
          </p>
          <div className={"resume-btn"}>
            <span>See Resume</span>
          </div>
        </div>
      </div>
      <BackgroundSlide
        label={"Louis Teurnier"}
        secondStyle={true}
        demoRef={demoRef}
      />
      <Gallery photos={imgs} galleryRef={galleryRef} />
      <div className={"contact"} ref={contactRef}>
        <div className={"headband"}>CONTACTEZ-MOI</div>
        <div className={"wrapper"}>
          <div className={"contact-text"}>
            <span>Contact</span>
            <p>Adresse</p>
            <p> Telephone: </p>
            <p> info@mysite.com</p>
          </div>
          <div className={"contact-form"}>
            <div className={"field"}>
              <label htmlFor="fname">First Name</label>
              <input type="text" id="fname" name="firstname" />
            </div>
            <div className={"field"}>
              <label htmlFor="lname">Last Name</label>
              <input type="text" id="lname" name="lastname" />
            </div>
            <div className={"field"}>
              <label htmlFor="email">Email</label>
              <input type="text" id="email" name="Email" />
            </div>
            <div className={"field"}>
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="Subject" />
            </div>
            <div className={"field"}>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="8" cols="63" />
            </div>
            <div className={"btn-submit"}>
              <p>Submit</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component;
