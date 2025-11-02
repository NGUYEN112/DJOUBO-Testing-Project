import { useState } from "react";
import { IMAGES } from "../../../../Constants/images";
import CommonButton from "../../../../Components/Common/CommonButton";
import "./FormComponent.scss";
import CommonInput from "../../../../Components/Common/CommonInput";

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
                <CommonInput groupClassName="mg-b-16 pad-x-24 pad-y-16" inputClassName="ln-24 font-18" inputType="number" placehoder="Nombre de passagers"/>
                <CommonInput groupClassName="mg-b-16 mg-l-16 pad-x-24 pad-y-16" inputClassName="ln-24 font-18" inputType="number" placehoder="Nombre d'enfants"/>
            </div>
            <div className="form__group pasenger mg-b-20">
                <CommonInput groupClassName="pad-x-24 pad-y-16" inputClassName="ln-24 font-18" inputType="number" placehoder="Nombre de bagages"/>
                <CommonInput groupClassName="mg-l-16 pad-x-24 pad-y-16" inputClassName="ln-24 font-18" inputType="number" placehoder="Siège auto"/>
            </div>
            <div className="form__group button-group">
                <CommonButton type="submit" text="Commandez" className="btn primary pad-x-47 mg-l-16" />
            </div>
        </form>
    );
}