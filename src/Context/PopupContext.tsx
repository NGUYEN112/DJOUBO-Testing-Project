import React, { createContext, useState, useContext } from "react";
import type { ReactNode } from "react";

type PopupContextType = {
  isOpen: boolean;
  content: ReactNode | null;
  openPopup: (content: ReactNode) => void;
  closePopup: () => void;
};

const PopupContext = createContext<PopupContextType | undefined>(undefined);

export const PopupProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState<ReactNode | null>(null);

  const openPopup = (content: ReactNode) => {
    setContent(content);
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
    setContent(null);
  };

  return (
    <PopupContext.Provider value={{ isOpen, content, openPopup, closePopup }}>
      {children}
    </PopupContext.Provider>
  );
};

export const usePopup = () => {
  const context = useContext(PopupContext);
  if (!context) {
    throw new Error("Error");
  }
  return context;
};