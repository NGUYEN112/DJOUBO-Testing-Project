import "./CommonInput.scss";
import { IMAGES, type ImageKey } from "../../../Constants/images";

interface CommonInputProps {
  groupClassName?: string;
  inputClassName?: string; 
  inputType:string;
  iconImg?:ImageKey;
  label?:string;
  placehoder?: string;
}

export default function CommonInput({
    groupClassName = "",
    inputClassName = "",
    inputType,
    iconImg,
    label,
    placehoder=""
}: CommonInputProps) {
    return(
        <div className={`input-group radius-50 ${groupClassName}`}>
            {iconImg ? <span className="mg-r-12"><img width={24} src={IMAGES[iconImg]} alt="icon" /></span> : "" }
            {label ? <label>{label}</label> : null}
            <input className={inputClassName} type={inputType} placeholder={placehoder} />
        </div>
    )
}