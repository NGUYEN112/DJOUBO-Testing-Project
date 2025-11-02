import { useState } from "react";
import { IMAGES } from "../../Constants/images";
import TimeAndAddressForm from "./Component/FormComponent/TimeAndAddressForm";
import PassengerInfoForm from "./Component/FormComponent/PassengerInfoForm";
import InfoExplanComponent from "./Component/InfoExplanComponent/InfoExplanComponent";
import FeatureComponent from "./Component/FeatureComponent/FeatureComponent";
import CommonQuestionForm from "../../Components/Common/CommonQuestionForm";

export default function HomePage() {
    const [journeyStep, setJourneyStep] =  useState(1);

    return(
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
                                    <img src={journeyStep === 1 ? IMAGES.MilesStoneActiveIcon : IMAGES.MilesStoneIcon} alt="icon milestone" width={34} className="mg-b-12" />
                                    <p className="font-18 lh-24 font-w500 font-fm-se">Ou et quand?</p>
                                </div>
                                <div className="journeyPoint">
                                    <img src={journeyStep === 2 ? IMAGES.MilesStoneActiveIcon : IMAGES.MilesStoneIcon} alt="icon milestone" width={34} className="mg-b-12"/>
                                    <p className="font-18 lh-24 font-w500 font-fm-se">Personnalisation</p>
                                </div>
                                <div className="journeyPoint">
                                    <img src={journeyStep === 3 ? IMAGES.MilesStoneActiveIcon : IMAGES.MilesStoneIcon} alt="icon milestone" width={34} className="mg-b-12" />
                                    <p className="font-18 lh-24 font-w500 font-fm-se">Valider</p>
                                </div>
                            </div>
                        </div>
                        <div className="ss1r2c2">
                            { journeyStep === 1 ? (<TimeAndAddressForm />) : journeyStep === 2 ? (<PassengerInfoForm />) : null}
                        </div>
                    </div>
                </div>
            </section>
            <section id="ss2" className="section">
                <div className="container ss2-container">
                    <div className="ss2r1">
                        <div className="ss2r1c1">
                            <span className="font-14 lh-24 font-upper font-fm-se pad-l-13">Concept</span>
                        </div>
                        <div className="ss2r1c2 section__intro max-w600 pad-l-15 pad-r-25 mg-r-72 pad-t-50">
                            <h3 className="font-48 lh-56 font-w500 mg-b-10"><span>Djoubo</span> est une application innovante qui redéfinit le transport depuis l'aéroport.</h3>
                            <p className="font-18 lh-24 mg-b-24">Nous avons compris que votre voyage ne se termine pas lorsque vous atterrissez.</p>
                            <p className="font-18 lh-24 mg-b-24">Souvent, l'étape la plus stressante est <span>celle du transport entre l'aéroport et votre destination finale</span>, que ce soit un hôtel, une réunion professionnelle ou votre domicile.</p>
                            <p className="font-18 lh-24 mg-b-24">C'est pourquoi nous avons créé Djoubo, une solution sur mesure qui vous <span>garantit un transport fluide et sans tracas dès la sortie de l'aéroport.</span></p>
                        </div>
                        <div className="ss2r1c3 section__introImage mg-l-7">
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
                    <CommonQuestionForm />
                </div>
            </div>
        </>
    )
}

