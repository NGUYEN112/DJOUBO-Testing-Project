import { useState, useEffect } from "react";
import { IMAGES } from "../../Constants/images";
import TimeAndAddressForm from "./Component/FormComponent/TimeAndAddressForm";
import type { FormDataDateAndAddressType } from "./Component/FormComponent/TimeAndAddressForm";
import PassengerInfoForm from "./Component/FormComponent/PassengerInfoForm";
import InfoExplanComponent from "./Component/InfoExplanComponent/InfoExplanComponent";
import FeatureComponent from "./Component/FeatureComponent/FeatureComponent";
import CommonQuestionForm from "../../Components/Common/CommonQuestionForm";
import { usePopup } from "../../Context/PopupContext";

export default function HomePage() {
    const [journeyStep, setJourneyStep] = useState(1);
    const [questionFormStatus,setQuestionFormStatus] = useState(false)
    const [tempDataTimeAndAddress, setTempDataTimeAndAddress] = useState<FormDataDateAndAddressType | null>(null);
    const { openPopup } = usePopup();
    useEffect(() => {
        const cache = sessionStorage.getItem("temp-data-address-time");
        if (cache) setTempDataTimeAndAddress(JSON.parse(cache));
    }, []);
    useEffect(() => {
        if (tempDataTimeAndAddress) sessionStorage.setItem("temp-data-address-time", JSON.stringify(tempDataTimeAndAddress));
    }, [tempDataTimeAndAddress]);

    const handleFormDateAndAddressValid = (data: FormDataDateAndAddressType) => {
        setTempDataTimeAndAddress(data);
        setJourneyStep(2)
    };

    const handleSendQuestionForm = (status: boolean) => {
        openPopup("Your message has been received")
    }

    return (
        <>
            <section id="ss1" className="section mg-b-134">
                <div className="container ss1-container">
                    <div className="ss1r1 mg-b-45">
                        <h1 className="font-fm-pr font-w700 font-80 lh-80 text-center">Votre trajet <br />commence ici</h1>
                    </div>
                    <div className="ss1r2">
                        <div className="ss1r2c1 mg-b-47">
                            <div className="section__journey max-w600">
                                <div className="journeyPoint">
                                    <img src={journeyStep === 1 ? IMAGES.MilesStoneActiveIcon : IMAGES.MilesStoneIcon} alt="icon milestone" className="mg-b-12" />
                                    <p className="font-18 lh-24 font-w500 font-fm-se">Ou et quand?</p>
                                </div>
                                <div className="journeyPoint">
                                    <img src={journeyStep === 2 ? IMAGES.MilesStoneActiveIcon : IMAGES.MilesStoneIcon} alt="icon milestone" className="mg-b-12" />
                                    <p className="font-18 lh-24 font-w500 font-fm-se">Personnalisation</p>
                                </div>
                                <div className="journeyPoint">
                                    <img src={journeyStep === 3 ? IMAGES.MilesStoneActiveIcon : IMAGES.MilesStoneIcon} alt="icon milestone" className="mg-b-12" />
                                    <p className="font-18 lh-24 font-w500 font-fm-se">Valider</p>
                                </div>
                            </div>
                        </div>
                        <div className="ss1r2c2">
                            {journeyStep === 1 ? (<TimeAndAddressForm onValid={handleFormDateAndAddressValid} />) : journeyStep === 2 ? (<PassengerInfoForm />) : null}
                        </div>
                    </div>
                </div>
            </section>
            <section id="ss2" className="section">
                <div className="container ss2-container">
                    <div className="ss2r1 pad-x-29">
                        <div className="ss2r1c1 section__intro max-w700 pad-l-27 mg-r-41 pad-r-55 pad-t-55">
                            <div className="sideText mg-r-34">
                                <span className="font-14 lh-24 font-upper font-fm-se pad-l-13">Concept</span>
                            </div>
                            <div className="intro-content">
                                <h3 className="font-48 lh-56 font-w500 mg-b-10"><span>Djoubo</span> est une application innovante qui redéfinit le transport depuis l'aéroport.</h3>
                                <p className="font-18 lh-24 mg-b-24">Nous avons compris que votre voyage ne se termine pas lorsque vous atterrissez.</p>
                                <p className="font-18 lh-24 mg-b-24">Souvent, l'étape la plus stressante est <span>celle du transport entre l'aéroport et votre destination finale</span>, que ce soit un hôtel, une réunion professionnelle ou votre domicile.</p>
                                <p className="font-18 lh-24 mg-b-24">C'est pourquoi nous avons créé Djoubo, une solution sur mesure qui vous <span>garantit un transport fluide et sans tracas dès la sortie de l'aéroport.</span></p>
                            </div>
                        </div>
                        <div className="ss2r1c2 section__introImage mg-l-7">
                            <picture>
                                <img src={IMAGES.IPMockup} alt="Iphone Mockup" width={475}/>
                            </picture>
                        </div>
                    </div>
                    <div className="ss2r2">
                        <div className="ss2r2c1 mg-b-93">
                            <h3 className="gradient-to-bot font-56 lh-56 font-w700 text-center">Comment ça fonctionne?</h3>
                        </div>
                        <div className="ss2r2c2">
                            <InfoExplanComponent />
                        </div>
                    </div>
                    <div className="ss2r3 pad-x-100">
                        <div className="ss2r3c1">
                            <h3 className="gradient-to-bot font-56 lh-56 font-w700 text-center">Fonctionnalités</h3>
                        </div>
                        <div className="ss2r3c2 pad-x-14">
                            <FeatureComponent />
                        </div>
                    </div>
                </div>
            </section>
            <div id="ss3" className="section">
                <div className="container ss3-container">
                    <CommonQuestionForm  onSubmitSuccess={handleSendQuestionForm}/>
                </div>
            </div>
            <div id="ss4" className="section">
                <div className="container ss4-container">
                    <div className="ss4r1 mg-r-70">
                        <picture>
                            <img src={IMAGES.PhoneWithBg} alt="Djoubo" />
                        </picture>
                    </div>
                    <div className="ss4r2">
                        <div className="sideText mg-b-80 mg-r-34px">
                            <span className="font-14 lh-24 font-upper font-fm-se">plus d'opportunités</span>
                        </div>
                        <div className="section__downloadApp max-w600">
                            <h4 className="font-48 lh-56 font-w500 mg-b-24"><span>Télécharge</span> notre application <img src={IMAGES.Logo} alt="Djoubo Logo" /></h4>
                            <p className="font-18 lh-24 mg-b-32">Réservez votre trajet depuis l'aéroport vers la destination de votre choix avec Djoubo. Service rapide, confortable, et sécurisé</p>
                            <div className="download-links">
                                <a className="mg-r-16" href=""><img src={IMAGES.AppStoreWhiteIcon} alt="App Store Icon" /></a>
                                <a href=""><img src={IMAGES.GooglePlayWhiteIcon} alt="Google Play Icon" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

