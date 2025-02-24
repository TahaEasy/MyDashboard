"use client";

import { createContext, useState, useContext } from "react";

const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [currentModal, modal] = useState("");

  return (
    <ModalContext.Provider value={{ currentModal, modal }}>
      {children}
    </ModalContext.Provider>
  );
};

const useModal = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("please use the modal context inside its provider!");
  }

  return context;
};

export { ModalProvider, useModal };
