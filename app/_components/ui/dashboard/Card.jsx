"use client";

import { createContext } from "react";

const CardContext = createContext();

const Card = ({ children, className = "" }) => {
  return (
    <CardContext.Provider value={{}}>
      <div
        className={`h-full bg-dash-fore shadow-md dark:shadow-transparent p-4 rounded-2xl transition-all duration-200 ${className}`}
      >
        {children}
      </div>
    </CardContext.Provider>
  );
};

const Header = ({ children }) => {
  return (
    <div className="flex justify-between items-center gap-2 p-2">
      {children}
    </div>
  );
};

const Title = ({ children }) => {
  return <h1 className="text-text text-xl">{children}</h1>;
};

const StartSide = ({ children }) => {
  return (
    <div className="flex justify-start items-center gap-2">{children}</div>
  );
};

const EndSide = ({ children }) => {
  return (
    <div>
      <span className="flex justify-center items-center text-text">
        {children}
      </span>
    </div>
  );
};

const Count = ({ children }) => {
  return <span className="block text-text text-4xl mb-4">{children}</span>;
};

const CountDesc = ({ children }) => {
  return (
    <span className="flex justify-start items-center gap-2 text-grayish text-xs">
      {children}
    </span>
  );
};

const Body = ({ children }) => {
  return <div className="py-2">{children}</div>;
};

Card.Header = Header;
Card.Title = Title;
Card.Header.StartSide = StartSide;
Card.Header.EndSide = EndSide;
Card.Count = Count;
Card.CountDesc = CountDesc;
Card.Body = Body;

export default Card;
