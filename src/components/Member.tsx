import React from "react";
import { Table } from "react-bootstrap";

export const Member = () => {
  const tHeadings: string[] = [
    "Member Id",
    "First Name",
    "Last Name",
    "Email",
    "Membership Date",
    "Lendings",
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
