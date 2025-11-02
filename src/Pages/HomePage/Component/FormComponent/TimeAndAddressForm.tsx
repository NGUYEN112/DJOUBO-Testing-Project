import { useState } from "react";
import { IMAGES } from "../../../../Constants/images";
import CommonButton from "../../../../Components/Common/CommonButton";
import CommonInput from "../../../../Components/Common/CommonInput";
import "./FormComponent.scss";

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
                <CommonInput iconImg="CurrentLocationIcon" label="De:" groupClassName="mg-b-16 pad-x-24 pad-y-16" inputClassName="w-100 ln-24 font-18" inputType="text" placehoder="Adresse, aeroport, hotel"/>
                <CommonInput iconImg="MapPinIcon" label="A:" groupClassName="mg-b-16 pad-x-24 pad-y-16" inputClassName="w-100 ln-24 font-18" inputType="text" placehoder="Adresse, aeroport, hotel"/>
            </div>
            <div className="form__group dateAndTime">
                <CommonInput iconImg="CalendarIcon" label="Date:" groupClassName="pad-x-24 pad-y-16 max-w270" inputClassName="w-100 ln-24 font-18" inputType="text" placehoder="Sam.14.dec"/>
                <CommonInput iconImg="ClockIcon" label="Heure:" groupClassName="mg-l-16 pad-x-24 pad-y-16" inputClassName="w-100 ln-24 font-18" inputType="text" placehoder="11:00"/>
                <CommonButton type="submit" text="Commandez" className="btn primary pad-x-47 mg-l-16" />
            </div>
        </form>
    );
}