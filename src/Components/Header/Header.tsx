import { IMAGES } from "../../Constants/images";
import "./Header.scss";
import CommonButton from "../Common/CommonButton";
import CompaniesDropdown from "./CompaniesDropdown";
export default function Header() {
    return (
        <header className="header" id="hd1">
            <div className="container hd1-container pad-x-80">
                <div className="hd1r1 pad-y-33">
                    <div className="hd1r1c1 header__logo">
                        <img src={IMAGES.Logo} alt="DJUBO logo"width={251} />
                    </div>

                    <nav className="hd1r1c2 header__nav">
                        <div className="header__menu ">
                            <CompaniesDropdown />
                        </div>
                        
                        <div className="header__language pad-x-2 mg-l-32">
                            <img src={IMAGES.Globe} alt="icon globe" />
                            <select className="header__languageSelect mg-l-2">
                                <option>FR</option>
                                <option>EN</option>
                            </select>
                        </div>
                        
                        <CommonButton text="Connexion" href="/login" className="primary font-16 lh-24 pad-y-16 pad-x-32 mg-l-32"/>
                    </nav>
                </div>
            </div>
        </header>
    );
}