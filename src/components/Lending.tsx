import React from "react";
import { Table } from "react-bootstrap";

export const Lending = () => {
  const tHeadings: string[] = [
    "Lending Id",
    "Member",
    "Lending Date",
    "Return Date",
    "Is Active",
    "Overdue",
    "Fine Amount",
  ];

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            {tHeadings.map((headings) => (
              <th>{headings}</th>
            ))}
          </tr>
        </thead>
        <tbody></tbody>
      </Table>
    </>
  );
};
