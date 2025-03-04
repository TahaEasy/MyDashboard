"use client";

import Modal from "../../Modal";
import EditKeywordForm from "../EditKeywordForm";

const ModalsSection = ({ keyword }) => {
  return (
    <>
      <Modal id="editKeyword">
        <Modal.Header>
          <Modal.Title>ویرایش کیورد</Modal.Title>
          <Modal.Close />
        </Modal.Header>
        <Modal.Body>
          <EditKeywordForm keyword={keyword} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalsSection;
