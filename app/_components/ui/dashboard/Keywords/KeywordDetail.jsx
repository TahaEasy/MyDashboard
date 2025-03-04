"use client";

import Card from "../Card";
import EditKeywordForm from "./EditKeywordForm";

const KeywordDetail = ({ keyword }) => {
  return (
    <Card className="h-auto">
      <Card.Header>
        <Card.Header.StartSide>
          <Card.Title>ویرایش اطلاعات کیورد</Card.Title>
        </Card.Header.StartSide>
      </Card.Header>
      <Card.Body>
        <EditKeywordForm keyword={keyword} className="w-full" />
      </Card.Body>
    </Card>
  );
};

export default KeywordDetail;
