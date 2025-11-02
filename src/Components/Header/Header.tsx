import { useEffect, useRef , useState } from "react";
import CommonButton from "../Common/CommonButton";
import { useMediaQuery } from "react-responsive";
import { useAuth } from "../../Context/AuthContext";
import { IMAGES } from "../../Constants/images";
import "./Header.scss";
export default function Header() {
    const headerRef = useRef<HTMLElement | null>(null);
    const { user, isLoggedIn } = useAuth()
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef<HTMLLIElement>(null);
    const isMobile = useMediaQuery({ maxWidth: 768 });

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
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const toggleDropdown = () => setOpen((prev) => !prev);

    return (
        <header ref={headerRef} className="header" id="hd1">
            <div className="container hd1-container pad-x-80">
                <div className="hd1r1 pad-y-33">
                    <a href="/" className="hd1r1c1 header__logo">
                        <img src={IMAGES.Logo} alt="DJUBO logo" />
                    </a>

                    <nav className="hd1r1c2 header__nav">
                        <div className="header__menu ">
                            { !isMobile ? 
                                <li ref={dropdownRef} className={`dropdown ${open ? "is-open" : ""}`}>
                                    <button onClick={toggleDropdown} className="dropdown__btn font-16 lh-24 font-fm-pr">
                                        Section entreprise
                                        <span className="dropdown__icon" />
                                    </button>

                                    {open && (
                                        <ul className="dropdown__list radius-8 pad-y-8">
                                            <li><a className="pad-y-1 pad-x-16 font-16 lh-24 font-fm-pr" href="/taxi">Société de taxi</a></li>
                                            <li><a className="pad-y-1 pad-x-16 font-16 lh-24 font-fm-pr" href="/enterprise">Entreprise & Corporate</a></li>
                                            <li><a className="pad-y-1 pad-x-16 font-16 lh-24 font-fm-pr" href="/partner">Devenir partenaire</a></li>
                                        </ul>
                                    )}
                                </li> :
                                <ul className="dropdown__list radius-8 pad-y-8">
                                    <li><a className="pad-y-1 pad-x-16 font-16 lh-24 font-fm-pr" href="/taxi">Société de taxi</a></li>
                                    <li><a className="pad-y-1 pad-x-16 font-16 lh-24 font-fm-pr" href="/enterprise">Entreprise & Corporate</a></li>
                                    <li><a className="pad-y-1 pad-x-16 font-16 lh-24 font-fm-pr" href="/partner">Devenir partenaire</a></li>
                                </ul>
                            }
                        </div>

                        <div className="header__language pad-x-2 mg-l-32">
                            <img src={IMAGES.Globe} alt="icon globe" />
                            <select className="header__languageSelect mg-l-2 font-14 lh-20">
                                <option>FR</option>
                                <option>EN</option>
                            </select>
                        </div>

                        <CommonButton text={!isLoggedIn ? "Connexion" : "Driver List"} href={!isLoggedIn ? "/login" : "/driver-list"} type="button" className="primary pad-x-32 mg-l-32" />
                    </nav>
                </div>
            </div>
        </header>
    );
}