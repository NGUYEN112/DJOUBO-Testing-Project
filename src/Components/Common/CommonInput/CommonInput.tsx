import type { UseFormRegister , RegisterOptions } from "react-hook-form";
import { IMAGES, type ImageKey } from "../../../Constants/images";
import "./CommonInput.scss";

interface CommonInputProps {
    name: string
    groupClassName?: string;
    inputClassName?: string;
    inputType: "text" | "number" | "email" | "textarea" | "date" | "time" | "password";
    iconImg?: ImageKey;
    label?: string;
    placeholder?: string;
    register: UseFormRegister<any>;
    rules?: RegisterOptions;
    error?:string
}

export default function CommonInput({
    name,
    groupClassName = "",
    inputClassName = "",
    inputType,
    iconImg,
    label,
    placeholder = "",
    register,
    rules,
    error
}: CommonInputProps) {

    return (
        <div className={`input-group radius-50 ${groupClassName}`}>
            {iconImg ? <span className="mg-r-12"><img width={24} src={IMAGES[iconImg]} alt="icon" /></span> : ""}
            {label ? <label htmlFor={name}>{label}</label> : null}
            {inputType !== "textarea" ?
                (<><input id={name} className={inputClassName} type={inputType} placeholder={placeholder} {...register(name, rules)}/> {error && <p className="err">{error}</p>} </>) :
                (<><textarea id={name} className={inputClassName} placeholder={placeholder} {...register(name, rules)}></textarea> {error && <p className="err">{error}</p>} </>)
            }
        </div>
    )
}