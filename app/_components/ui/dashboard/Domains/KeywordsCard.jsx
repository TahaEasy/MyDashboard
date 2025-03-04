"use client";

import { LuDot, LuEye, LuKey, LuLanguages, LuPlus } from "react-icons/lu";
import Card from "../Card";
import Link from "next/link";
import { domains, keywords } from "@/app/_lib/neededArrays";
import { useModal } from "@/app/_components/contexts/ModalContext";
import Button from "../../Button";

const KeywordsCard = () => {
  const { modal } = useModal();
  return (
    <Card className="bg-transparent shadow-transparent">
      <Card.Header>
        <Card.Header.StartSide>
          <Card.Title>کیورد ها</Card.Title>
        </Card.Header.StartSide>
        <Card.Header.EndSide>
          <div>
            <Button onClick={() => modal("createKeyword")}>
              کیورد جدید
              <LuPlus />
            </Button>
          </div>
        </Card.Header.EndSide>
      </Card.Header>
      <Card.Body>
        <div className="flex flex-col justify-start items-start">
          {keywords.map(({ placeholder, region, language }, i) => (
            <div
              key={i}
              className="flex justify-between items-center w-full my-2 py-2 px-4 bg-dash-fore rounded-md transition-all duration-200"
            >
              <div className="flex flex-col justify-center items-start gap-2">
                <div>
                  <span className="flex justify-start items-center gap-2 text-text">
                    <LuDot />
                    {placeholder}{" "}
                    <span className="text-sm text-grayish">({region})</span>
                  </span>
                </div>
                <span className="flex justify-start items-center gap-2 text-xs text-grayish">
                  <span className="text-sm text-text">
                    <LuLanguages />
                  </span>{" "}
                  زبان: {language}
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

export default KeywordsCard;
