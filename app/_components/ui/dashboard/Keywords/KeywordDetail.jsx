"use client";

import { LuDot, LuLanguages, LuPen } from "react-icons/lu";
import Card from "../Card";
import { useModal } from "@/app/_components/contexts/ModalContext";

const KeywordDetail = ({ keyword: { id, region, language } }) => {
  const { modal } = useModal();

  return (
    <Card className="bg-transparent shadow-transparent">
      <Card.Header>
        <Card.Header.StartSide>
          <Card.Title>اطلاعات کیورد</Card.Title>
        </Card.Header.StartSide>
      </Card.Header>
      <Card.Body>
        <div className="flex flex-col justify-start items-start">
          <div className="flex justify-between items-center w-full my-2 py-2 px-4 bg-dash-fore rounded-md transition-all duration-200">
            <div className="flex flex-col justify-center items-start gap-2">
              <div>
                <span className="flex justify-start items-center gap-2 text-text">
                  <LuDot />
                  کیورد شماره {id}{" "}
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
            <button
              onClick={() => modal("editKeyword")}
              className="p-2 bg-bluey hover:bg-bluey/75 text-white rounded-md transition-all duration-200"
            >
              <LuPen />
            </button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default KeywordDetail;
