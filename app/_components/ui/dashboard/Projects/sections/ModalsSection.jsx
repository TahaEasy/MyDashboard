"use client";

import Modal from "../../Modal";
import CreateDomainForm from "../CreateDomainForm";
import CreateProjectForm from "../../Analytics/CreateProjectForm";

const ModalsSection = () => {
  return (
    <>
      <Modal id="createProject">
        <Modal.Header>
          <Modal.Title>ساخت پروژه جدید</Modal.Title>
          <Modal.Close />
        </Modal.Header>
        <Modal.Body>
          <CreateProjectForm />
        </Modal.Body>
      </Modal>

      <Modal id="createDomain">
        <Modal.Header>
          <Modal.Title>ساخت دامنه جدید</Modal.Title>
          <Modal.Close />
        </Modal.Header>
        <Modal.Body>
          <CreateDomainForm />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalsSection;
