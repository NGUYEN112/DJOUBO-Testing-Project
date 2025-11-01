import "./CommonButton.scss";
import { IMAGES } from "../../../Constants/images";

interface CommonButtonProps {
  text: string;
  className?: string; 
  href?:string
  onClick?: () => void;
  type?: "button" | "submit";
}

export default function CommonButton({
  text,
  className = "",
  onClick,
  href = "javascript:void(0);",
  type = "button",
}: CommonButtonProps) {
  return (
    <a
      type={type}
      className={`btn font-16 lh-24 pad-y-16 font-fm-se ${className}`}
      onClick={onClick}
      href={href}
    >
      {text}
      <img src={IMAGES.ArrowRightLight} alt="icon arrow" className="mg-l-8"/>
    </a>
  );
}