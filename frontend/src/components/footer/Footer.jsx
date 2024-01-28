import { footer_logo, insta, pinterest, whatsapp } from "../../assets";
import "./footer.scss";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="Footer Logo" />
        <p>ZenCartify</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Producst</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icons">
        <div className="footer-icons-container">
          <img src={insta} alt="Instagram Icon" />
        </div>
        <div className="footer-icons-container">
          <img src={pinterest} alt="Pinterest Icon" />
        </div>
        <div className="footer-icons-container">
          <img src={whatsapp} alt="Whatsapp Icon" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - All Rights Reserved</p>
      </div>
    </div>
  );
};
