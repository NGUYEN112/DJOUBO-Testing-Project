import "./CommonButton.scss";
import { IMAGES } from "../../../Constants/images";

interface CommonButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  href?: string
}

export default function CommonButton({
  text,
  className = "",
  onClick,
  type = "button",
  href,
}: CommonButtonProps) {
  return (
    (!href ?
      <button
        type={type}
        className={`btn font-16 lh-24 pad-y-16 font-fm-se ${className}`}
        onClick={onClick}
      >
        {text}
        <img src={IMAGES.ArrowRightLight} alt="icon arrow" className="mg-l-8" />
      </button> :
      <a
        href={href}
        className={`btn font-16 lh-24 pad-y-16 font-fm-se ${className}`}
        onClick={onClick}
      >
        {text}
        <img src={IMAGES.ArrowRightLight} alt="icon arrow" className="mg-l-8" />
      </a>
    )
  );
}