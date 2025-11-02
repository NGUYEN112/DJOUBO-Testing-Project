import { useEffect, useRef } from "react";
import CommonButton from "../Common/CommonButton";
import CompaniesDropdown from "./CompaniesDropdown";
import { useAuth } from "../../Context/AuthContext";
import { IMAGES } from "../../Constants/images";
import "./Header.scss";
export default function Header() {
    const headerRef = useRef<HTMLElement | null>(null);
    const { user, isLoggedIn } = useAuth()

    useEffect(() => {
        const handleScroll = () => {
            if (!headerRef.current) return;
            if (window.scrollY > 50) {
                headerRef.current.classList.add("header--scrolled"); 
            } else {
                headerRef.current.classList.remove("header--scrolled");
            }
        };

        window.addEventListener("scroll", handleScroll);

    // cleanup khi component bị unmount
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <header ref={headerRef} className="header" id="hd1">
            <div className="container hd1-container pad-x-80">
                <div className="hd1r1 pad-y-33">
                    <a href="/" className="hd1r1c1 header__logo">
                        <img src={IMAGES.Logo} alt="DJUBO logo"width={251} />
                    </a>

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
                        
                        <CommonButton text={!isLoggedIn ? "Connexion" : "Driver List"} href={!isLoggedIn ? "/login" : "/driver-list"} type="button" className="primary pad-x-32 mg-l-32"/>
                    </nav>
                </div>
            </div>
        </header>
    );
}