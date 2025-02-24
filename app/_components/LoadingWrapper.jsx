"use client";

import { useEffect, useState } from "react";

const LoadingWrapper = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    if (document.readyState === "complete") {
      // If the document is already loaded, set isLoading to false immediately
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center w-full h-full min-h-dvh">
          <div className="text-center mb-20">
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-[spin_2s_linear_infinite] border-purple-600 mx-auto"></div>
            <h2 className="text-text mt-4">در حال بارگذاری...</h2>
          </div>
        </div>
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export default LoadingWrapper;
