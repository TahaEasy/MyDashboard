"use client";

import { LuPlus, LuRefreshCw } from "react-icons/lu";
import Card from "../../Card";
import { projects } from "@/app/_lib/neededArrays";
import Table from "../../Table";
import { useModal } from "@/app/_components/contexts/ModalContext";
import Button from "../../../Button";

const TableSection = () => {
  const { modal } = useModal();
  return (
    <Card>
      <Card.Header>
        <Card.Header.StartSide>
          <Card.Title>پروژه ها</Card.Title>
          <div>
            <Button onClick={() => modal("createProject")}>
              پروژه جدید
              <LuPlus />
            </Button>
          </div>
        </Card.Header.StartSide>
        <Card.Header.EndSide>
          <button>
            <LuRefreshCw />
          </button>
        </Card.Header.EndSide>
      </Card.Header>
      <Card.Body>
        <Table className="mt-4">
          <thead>
            <tr>
              <Table.Th>#</Table.Th>
              <Table.Th>نام پروژه</Table.Th>
              <Table.Th>اهمیت</Table.Th>
              <Table.Th>وضعیت</Table.Th>
              <Table.Th>مدیر پروژه</Table.Th>
              <Table.Th>تاریخ شروع</Table.Th>
              <Table.Th>تاریخ پایان</Table.Th>
            </tr>
          </thead>
          <tbody>
            {projects.map(
              ({
                id,
                projectName,
                importance,
                projectManager,
                status,
                startDate,
                endDate,
              }) => (
                <Table.Tr key={id}>
                  <Table.Td>{id}</Table.Td>
                  <Table.Td>{projectName}</Table.Td>
                  <Table.Td>{importance}</Table.Td>
                  <Table.Td>{status}</Table.Td>
                  <Table.Td>{projectManager}</Table.Td>
                  <Table.Td>{startDate}</Table.Td>
                  <Table.Td>{endDate}</Table.Td>
                </Table.Tr>
              )
            )}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default TableSection;
