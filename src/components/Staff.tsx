import React from "react";
import { Table } from "react-bootstrap";

export const Staff = () => {
  const tHeadings: string[] = [
    "Staff Id",
    "First Name",
    "Last Name",
    "Email",
    "Join Date",
    "Last Updated",
    "Role",
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
