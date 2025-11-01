import { useState } from "react";
import { IMAGES } from "../../../Constants/images";
import CommonButton from "../../../Components/Common/CommonButton";
export default function TimeAndAddressForm() {
    const [currentLocation, setCurrentLocation] = useState("");
    const [destination, setDestination] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Submitted:", { currentLocation, destination, date, time });
    };
    return (
        <form onSubmit={handleSubmit} className="form max-w800 pad-x-10">
            <div className="form__group location">
                <div className="input-group mg-b-16 pad-x-24 pad-y-16 radius-50">
                    <span className="mg-r-12"><img width={24} src={IMAGES.CurrentLocationIcon} alt="icon current location" /></span>
                    <label>De:</label>
                    <input className="w-100 ln-24 font-18" type="text" placeholder="Adresse, aeroport, hotel" />
                </div>

                <div className="input-group mg-b-16 pad-x-24 pad-y-16 radius-50">
                    <span className="mg-r-12"><img width={24} src={IMAGES.MapPinIcon} alt="icon map pin" /></span>
                    <label>A:</label>
                    <input className="w-100 ln-24 font-18" type="text" placeholder="Adresse, aeroport, hotel" />
                </div>
            </div>
            <div className="form__group dateAndTime">
                <div className="input-group pad-x-24 pad-y-16 radius-50 max-w270">
                    <span className="mg-r-12"><img src={IMAGES.CalendarIcon} alt="icon calendar" /></span>
                    <label>Date:</label>
                    <input className="ln-24 font-18" type="text" placeholder="Sam.14.dec" />
                </div>
                <div className="input-group mg-l-16 pad-x-24 pad-y-16 radius-50">
                    <span className="mg-r-12"><img src={IMAGES.ClockIcon} alt="icon clock" /></span>
                    <label>Heure:</label>
                    <input className="ln-24 font-18" type="text" placeholder="11:00" />
                </div>
                <CommonButton type="submit" text="Commandez" className="btn primary pad-x-47 mg-l-16" />
            </div>
        </form>
    );
}