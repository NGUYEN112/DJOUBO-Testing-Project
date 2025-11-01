import "./CommonButton.scss";
import { IMAGES } from "../../../Constants/images";

interface CommonButtonProps {
  text: string;
  variant?: "primary" | "secondary"; 
  onClick?: () => void;
  type?: "button" | "submit";
}

export default function CommonButton({
  text,
  variant = "primary",
  onClick,
  type = "button",
}: CommonButtonProps) {
  return (
    <button
      type={type}
      className={`btn btn--${variant}`}
      onClick={onClick}
    >
      {text}
      <img src={IMAGES.ArrowRightLight} alt="icon arrow" />
    </button>
  );
}