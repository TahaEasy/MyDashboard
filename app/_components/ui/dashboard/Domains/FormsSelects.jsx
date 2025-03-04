"use client";

import { keywords } from "@/app/_lib/neededArrays";
import Dropdown from "../Dropdown";
import { useState } from "react";

const FormsSelects = () => {
  const [region, setRegion] = useState("ایران");
  const [language, setLanguage] = useState("فارسی");

  return (
    <div className="grid grid-cols-2 py-4">
      <div className="flex justify-start items-center gap-2 text-text">
        <span>ریجن:</span>
        <Dropdown
          value={region}
          setValue={setRegion}
          className="block text-center w-16"
        >
          {keywords.map(({ region }, i) => (
            <Dropdown.Option key={i} value={region}>
              {region}
            </Dropdown.Option>
          ))}
        </Dropdown>
      </div>
      <div className="flex justify-start items-center gap-2 text-text">
        <span>زبان:</span>
        <Dropdown
          value={language}
          setValue={setLanguage}
          className="block text-center w-16"
        >
          {keywords.map(({ language }, i) => (
            <Dropdown.Option key={i} value={language}>
              {language}
            </Dropdown.Option>
          ))}
        </Dropdown>
      </div>
    </div>
  );
};

export default FormsSelects;
