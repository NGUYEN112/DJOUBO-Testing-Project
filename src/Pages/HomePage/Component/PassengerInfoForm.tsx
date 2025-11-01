import { useState } from "react";
import { IMAGES } from "../../../Constants/images";
import CommonButton from "../../../Components/Common/CommonButton";

export default function PassengerInfoForm() {
    const [name, setName] = useState("");
        const [email, setEmail] = useState("");
        const handleSubmit = (e: React.FormEvent) => {
            e.preventDefault();
            console.log("Submitted:", { name, email });
        };
    return (
        <form onSubmit={handleSubmit} className="form max-w800 pad-x-10">
                    <div className="form__group pasenger">
                        <div className="input-group mg-b-16 pad-x-24 pad-y-16 radius-50">
                            <span className="mg-r-12"><img width={24} src={IMAGES.CurrentLocationIcon} alt="icon current location" /></span>
                            <label>De:</label>
                            <input className="ln-24 font-18" type="number" min={1} max={4} placeholder="Adresse, aeroport, hotel" />
                        </div>
        
                        <div className="input-group mg-b-16 mg-l-16 pad-x-24 pad-y-16 radius-50">
                            <span className="mg-r-12"><img width={24} src={IMAGES.MapPinIcon} alt="icon map pin" /></span>
                            <label>A:</label>
                            <input className="ln-24 font-18" type="number" min={1} max={4} placeholder="Adresse, aeroport, hotel" />
                        </div>
                    </div>
                    <div className="form__group pasenger mg-b-20">
                        <div className="input-group pad-x-24 pad-y-16 radius-50">
                            <span className="mg-r-12"><img src={IMAGES.CalendarIcon} alt="icon calendar" /></span>
                            <label>Date:</label>
                            <input className="ln-24 font-18" type="number" min={1} max={3} placeholder="Sam.14.dec" />
                        </div>
                        <div className="input-group mg-l-16 pad-x-24 pad-y-16 radius-50">
                            <span className="mg-r-12"><img src={IMAGES.ClockIcon} alt="icon clock" /></span>
                            <label>Heure:</label>
                            <input className="ln-24 font-18" type="number" min={1} max={4} placeholder="11:00" />
                        </div>
                    </div>
                    <div className="form__group button-group">
                        <CommonButton type="submit" text="Commandez" className="btn primary pad-x-47 mg-l-16" />
                    </div>
                </form>
    );
}