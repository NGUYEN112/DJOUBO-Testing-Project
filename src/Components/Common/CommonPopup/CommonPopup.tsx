import React from "react";
import { usePopup } from "../../../Context/PopupContext";
import "./CommonPopup.scss"
export default function CommonPopup() {
    const { isOpen, content, closePopup } = usePopup();

    if (!isOpen) return null;
    return (
        <div className="popup">
            <div className="container popup-container">
                <div className="popup__bg" onClick={() => closePopup()}></div>
                <div className="popup__inner">
                    <p className="popup__message font-24 lh-36 font-w600">{content}</p>
                </div>
            </div>
        </div>
    )
}