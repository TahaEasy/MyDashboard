"use client";

import { LuX } from "react-icons/lu";
import { useModal } from "../../contexts/ModalContext";
import { useEffect } from "react";

const Modal = ({ children, id }) => {
  const { currentModal, modal } = useModal();

  const isModalOpen = id === currentModal;

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style = "";
    }
  }, [currentModal]);

  const closeModal = () => {
    modal("");
  };

  return (
    <>
      <div
        className={`flex justify-center items-center fixed top-0 start-0 w-full h-full ${
          isModalOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } transition-all duration-200 z-30`}
      >
        <div
          className="absolute top-0 start-0 w-full h-full bg-dash-back/50 dark:bg-dash-back/75 z-30 transition-all duration-200"
          onClick={closeModal}
        ></div>
        <div
          className={`relative min-h-40 min-w-96 bg-dash-fore shadow-lg dark:shadow-transparent rounded-lg ${
            isModalOpen ? "translate-y-0" : "-translate-y-8"
          } transition-all duration-200 z-40`}
        >
          <div>{children}</div>
        </div>
      </div>
    </>
  );
};

const Header = ({ children }) => {
  return (
    <div className="flex justify-between items-center gap-2 p-4 border-b border-b-grayish/25">
      {children}
    </div>
  );
};

const Title = ({ children }) => {
  return <h1 className="text-lg text-text">{children}</h1>;
};

const Close = () => {
  const { modal } = useModal();

  const closeModal = () => {
    modal("");
  };

  return (
    <button
      onClick={closeModal}
      className="p-2 text-text hover:text-white bg-dash-fore hover:bg-red-600 border border-text hover:border-transparent rounded-full hover:rotate-90 transition-all duration-200"
    >
      <LuX />
    </button>
  );
};

const Body = ({ children }) => {
  return <div className="p-4">{children}</div>;
};

Modal.Header = Header;
Modal.Title = Title;
Modal.Close = Close;
Modal.Body = Body;

export default Modal;
