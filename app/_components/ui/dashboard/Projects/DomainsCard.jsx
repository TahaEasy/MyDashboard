"use client";

import { LuDot, LuEye, LuKey } from "react-icons/lu";
import Card from "../Card";
import Link from "next/link";
import { domains } from "@/app/_lib/neededArrays";

const DomainsCard = () => {
  return (
    <Card className="bg-transparent shadow-transparent">
      <Card.Header>
        <Card.Title>دامنه ها</Card.Title>
      </Card.Header>
      <Card.Body>
        <div className="flex flex-col justify-start items-start">
          {domains.map(({ placeholder, domain, keywords }, i) => (
            <div
              key={i}
              className="flex justify-between items-center w-full my-2 py-2 px-4 bg-dash-fore rounded-md transition-all duration-200"
            >
              <div className="flex flex-col justify-center items-start gap-2">
                <div>
                  <span className="flex justify-start items-center gap-2 text-text">
                    <LuDot />
                    {placeholder}{" "}
                    <span className="text-sm text-grayish">({domain})</span>
                  </span>
                </div>
                <span className="flex justify-start items-center gap-2 text-xs text-grayish">
                  <span className="text-sm text-text">
                    <LuKey />
                  </span>{" "}
                  {keywords.length} کلمه کلیدی
                </span>
              </div>
              <Link
                href="/"
                className="p-2 bg-bluey hover:bg-bluey/75 text-white rounded-md transition-all duration-200"
              >
                <LuEye />
              </Link>
            </div>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
};

export default DomainsCard;
