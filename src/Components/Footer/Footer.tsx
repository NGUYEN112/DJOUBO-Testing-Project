import { IMAGES } from "../../Constants/images";
import "./Footer.scss";
export default function Footer() {
    return (
        <footer className="footer" id="ft1">
            <div className="container ft1-container pad-t-56 pad-x-80">
                <div className="ft1r1 mg-b-56">
                    <div className="ft1r1c1 footer__logo max-w285">
                        <img src={IMAGES.Logo} alt="DJOUBO Logo" width={285} className="mg-b-30"/>
                        <p className="font-16 lh-24">Réservez votre trajet depuis l'aéroport vers la destination de votre choix avec Djoubo. Service rapide, confortable,et sécurisé</p>
                    </div>
                    <div className="ft1r1c2 footer__about">
                        <ul>
                            <li className="mg-b-24 font-w600">À propos de Djoubo</li>
                            <li className="mg-b-16"><a className="font-16 lh-24" href="/cgu">CGU</a></li>
                            <li className="mg-b-16"><a className="font-16 lh-24" href="/cgv">CGV</a></li>
                            <li className="mg-b-16"><a className="font-16 lh-24" href="/legal">Mentions légales</a></li>
                            <li className="mg-b-16"><a className="font-16 lh-24" href="/privacy">Politique de confidentialité</a></li>
                        </ul>
                    </div>
                    <div className="ft1r1c3 footer__about">
                        <ul>
                            <li className="mg-b-24 font-w600">À propos de nous</li>
                            <li className="mg-b-16"><a className="font-16 lh-24" href="/faq">FAQ</a></li>
                            <li className="mg-b-16"><a className="font-16 lh-24" href="/contact">Contact</a></li>
                            <li className="mg-b-16"><a className="font-16 lh-24" href="/help">Aide</a></li>
                            <li className="mg-b-16"><a className="font-16 lh-24" href="/company">Entreprises</a></li>
                        </ul>
                    </div>
                    <div className="ft1r1c4 footer__social">
                        <div className="footer__appDownload mg-b-40">
                            <h3 className="font-20 lh-24 font-w600 font-fm-se mg-b-16">Retrouvez nous sur les stores</h3>
                            <div className="downloadLinks">
                                <a href="#"><img width={120} className="mg-r-16" src={IMAGES.AppStoreIcon} alt="App Store Icon" /></a>
                                <a href="#"><img width={120} src={IMAGES.GooglePlayIcon} alt="Google Play Icon" /></a>
                            </div>
                        </div>
                        <div className="footer__socialMedia">
                            <h3 className="font-20 lh-24 font-w600 font-fm-se mg-b-16">Retrouvez nous sur les réseaux sociaux</h3>
                            <div className="socialLinks">
                                <a href="#"><img className="mg-r-16" width={32} src={IMAGES.FacebookIcon} alt="Facebook Icon" /></a>
                                <a href="#"><img className="mg-r-16" width={32} src={IMAGES.InstagramIcon} alt="Instagram Icon" /></a>
                                <a href="#"><img className="mg-r-16" width={32} src={IMAGES.LinkedInIcon} alt="LinkedIn Icon" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ft1r2 pad-y-24">
                    <p className="font-16 lh-24 font-fm-se text-center">Djoubo - @2024 Tous droit réservés</p>
                </div>
            </div>
        </footer>
    );
}