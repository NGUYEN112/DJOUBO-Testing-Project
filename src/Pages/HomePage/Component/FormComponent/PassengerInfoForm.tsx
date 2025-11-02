import { useForm } from "react-hook-form"
import CommonButton from "../../../../Components/Common/CommonButton";
import CommonInput from "../../../../Components/Common/CommonInput";
import "./FormComponent.scss";

type FormDataPassengerType = {
    passengerNumber: number;
    childrenNumber: number;
    packageNumber: number; 
    seatNumber: number; 
};

const DatePattern = /^(0?[1-9]|[12]\d|3[01])\.(0?[1-9]|1[0-2])\.\d{4}$/;
const TimePattern = /^([01]\d|2[0-3]):[0-5]\d$/;

export default function PassengerInfoForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormDataPassengerType>();

    const onSubmit = (data: FormDataPassengerType) => {
        //move to journey step 3
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="form max-w800 pad-x-10">
            <div className="form__group pasenger">
                <CommonInput
                    name="passengerNumber"
                    groupClassName="mg-b-16 pad-x-24 pad-y-16"
                    inputClassName="ln-24 font-18"
                    inputType="number"
                    placeholder="Nombre de passagers"
                    register={register}
                    rules={{
                        required: "Required field.",
                    }}
                    error={errors.passengerNumber?.message}
                />
                <CommonInput 
                    name="childrenNumber" 
                    groupClassName="mg-b-16 mg-l-16 pad-x-24 pad-y-16" 
                    inputClassName="ln-24 font-18" 
                    inputType="number" 
                    placeholder="Nombre d'enfants" 
                    register={register}
                    rules={{
                        required: "Required field.",
                    }}
                    error={errors.childrenNumber?.message}
                />
            </div>
            <div className="form__group pasenger mg-b-20">
                <CommonInput 
                    name="packageNumber" 
                    groupClassName="pad-x-24 pad-y-16" 
                    inputClassName="ln-24 font-18" 
                    inputType="number" 
                    placeholder="Nombre de bagages" 
                    register={register}
                    rules={{
                        required: "Required field.",
                    }}
                    error={errors.packageNumber?.message}
                />
                <CommonInput 
                    name="seatNumber" 
                    groupClassName="mg-l-16 pad-x-24 pad-y-16" 
                    inputClassName="ln-24 font-18" 
                    inputType="number" 
                    placeholder="Siège auto" 
                    register={register}
                    rules={{
                        required: "Required field.",
                    }}
                    error={errors.seatNumber?.message}
                />
            </div>
            <div className="form__group button-group">
                <CommonButton type="submit" text="Commandez" className="btn primary pad-x-47 mg-l-16" />
            </div>
        </form>
    );
}