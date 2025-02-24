"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import { LuChevronDown } from "react-icons/lu";

const DropdownContext = createContext();

const Dropdown = ({ children, value, setValue, className = "" }) => {
  const [showList, setShowList] = useState(false);
  const dropdown = useRef();

  useEffect(() => {
    addEventListener(
      "click",
      (e) => {
        if (!dropdown?.current?.contains(e.target)) {
          setShowList(false);
        }
      },
      true
    );
  }, [setShowList]);

  const handleSelect = (value) => {
    setValue(value);
    setShowList(false);
  };

  return (
    <DropdownContext.Provider value={{ handleSelect }}>
      <div className="relative" ref={dropdown}>
        <div
          className={`relative flex justify-end items-center gap-1 ${
            showList ? "bg-text/5" : "bg-transparent"
          } rounded-md cursor-pointer select-none`}
          onClick={() => setShowList((s) => !s)}
        >
          <span className={`${showList ? "rotate-180" : null}`}>
            <LuChevronDown />
          </span>
          <span className={className}>{value}</span>
        </div>
        <div
          className={`absolute ${
            showList
              ? "top-[calc(100%+4px)] opacity-100 visible"
              : "top-full opacity-0 invisible"
          } left-0 w-full bg-dash-back rounded-lg overflow-hidden transition-all duration-200 z-10`}
        >
          {children}
        </div>
      </div>
    </DropdownContext.Provider>
  );
};

const useDropdownContext = () => {
  const context = useContext(DropdownContext);

  if (!context) {
    throw new Error("please use the dropdown context inside its provider");
  }

  return context;
};

const Option = ({ children, value, className = "" }) => {
  const { handleSelect } = useDropdownContext();

  return (
    <span
      onClick={() => handleSelect(value)}
      className={`flex justify-center items-center py-1 hover:bg-dash-fore cursor-pointer transition-all duration-200 ${className}`}
    >
      {children}
    </span>
  );
};

Dropdown.Option = Option;

export default Dropdown;
