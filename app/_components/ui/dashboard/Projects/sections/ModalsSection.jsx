"use client";

import Modal from "../../Modal";
import CreateProjectForm from "../CreateProjectForm";

const ModalsSection = () => {
  return (
    <Modal id="createProject">
      <Modal.Header>
        <Modal.Title>ساخت پروژه جدید</Modal.Title>
        <Modal.Close />
      </Modal.Header>
      <Modal.Body>
        <CreateProjectForm />
      </Modal.Body>
    </Modal>
  );
};

export default ModalsSection;
