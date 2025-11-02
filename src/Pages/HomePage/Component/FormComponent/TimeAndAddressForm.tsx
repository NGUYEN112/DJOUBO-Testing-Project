import { useForm } from "react-hook-form"
import CommonButton from "../../../../Components/Common/CommonButton";
import CommonInput from "../../../../Components/Common/CommonInput";
import "./FormComponent.scss";

export type FormDataDateAndAddressType = {
    from: string;
    to: string;
    date: string;
    time: string;
};

const DatePattern = /^(0?[1-9]|[12]\d|3[01])\.(0?[1-9]|1[0-2])\.\d{4}$/;
const TimePattern = /^([01]\d|2[0-3]):[0-5]\d$/;

export default function TimeAndAddressForm({onValid,}: {
  onValid: (data: FormDataDateAndAddressType) => void;
}) {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormDataDateAndAddressType>();

    const submit = (data: FormDataDateAndAddressType) => onValid(data);

    return (
        <form onSubmit={handleSubmit(submit)} className="form max-w800 pad-x-10">
            <div className="form__group location">
                <CommonInput
                    name="from"
                    iconImg="CurrentLocationIcon"
                    label="De:"
                    groupClassName="mg-b-16 pad-x-24 pad-y-16"
                    inputClassName="w-100 ln-24 font-18"
                    inputType="text"
                    placeholder="Adresse, aeroport, hotel"
                    register={register}
                    rules={{
                        required: "Required field.",
                    }}
                    error={errors.from?.message}
                />
                <CommonInput 
                    name="to" 
                    iconImg="MapPinIcon" 
                    label="A:" 
                    groupClassName="mg-b-16 pad-x-24 pad-y-16" 
                    inputClassName="w-100 ln-24 font-18" 
                    inputType="text" 
                    placeholder="Adresse, aeroport, hotel" 
                    register={register}
                    rules={{
                        required: "Required field.",
                    }}
                    error={errors.to?.message}
                />
            </div>
            <div className="form__group dateAndTime">
                <CommonInput 
                    name="date" 
                    iconImg="CalendarIcon" 
                    label="Date:" 
                    groupClassName="pad-x-24 pad-y-16 max-w270" 
                    inputClassName="w-100 ln-24 font-18" 
                    inputType="text" 
                    placeholder="Sam.14.dec" 
                     register={register}
                    rules={{
                        required: "Required field.",
                        pattern: {value: DatePattern , message: "wrong format"}
                    }}
                    error={errors.date?.message}
                />
                <CommonInput 
                    name="time" 
                    iconImg="ClockIcon" 
                    label="Heure:" 
                    groupClassName="mg-l-16 pad-x-24 pad-y-16" 
                    inputClassName="w-100 ln-24 font-18" 
                    inputType="text" 
                    placeholder="11:00" 
                     register={register}
                    rules={{
                        required: "Required field.",
                        pattern: {value: TimePattern , message: "wrong format"}
                    }}
                    error={errors.time?.message}
                />
                <CommonButton type="submit" text="Commandez" className="btn primary pad-x-47 mg-l-16" />
            </div>
        </form>
    );
}