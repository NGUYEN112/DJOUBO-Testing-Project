import { IMAGES } from "../../Constants/images";
import "./Header.scss";
import CommonButton from "../Common/CommonButton";
import EnterpriseDropdown from "./EnterpriseDropdown";
export default function Header() {
    return (
        <header className="header" id="hd1">
            <div className="hd1-container">
                <div className="hd1r1">
                    <div className="hd1r1c1 header__logo">
                        <img src={IMAGES.Logo} alt="DJUBO logo" className="header__logo" />
                    </div>

                    <nav className="hd1r1c2 header__nav">
                        <div className="header__menu">
                            <EnterpriseDropdown />
                        </div>
                        
                        <div className="header__language">
                            <img src={IMAGES.Globe} alt="icon globe" />
                            <select className="header__languageSelect">
                                <option>FR</option>
                                <option>EN</option>
                            </select>
                        </div>
                        
                        <CommonButton text="Connexion" />
                    </nav>
                </div>
            </div>
        </header>
    );
}