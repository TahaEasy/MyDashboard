"use client";

import Modal from "../../Modal";
import CreateKeywordForm from "../CreateKeywordForm";

const ModalsSection = () => {
  return (
    <>
      <Modal id="createKeyword">
        <Modal.Header>
          <Modal.Title>ساخت کیورد جدید</Modal.Title>
          <Modal.Close />
        </Modal.Header>
        <Modal.Body>
          <CreateKeywordForm />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalsSection;
