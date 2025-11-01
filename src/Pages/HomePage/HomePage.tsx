import { useState } from "react";
import { IMAGES } from "../../Constants/images";
import TimeAndAddressForm from "./Component/TimeAndAddressForm";
import PassengerInfoForm from "./Component/PassengerInfoForm";
export default function HomePage() {
    const [journeyStep, setJourneyStep] =  useState(2);

    return(
        <>
            <section id="ss1" className="section">
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
        </>
    )
}

