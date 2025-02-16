import React from "react";
import { Table } from "react-bootstrap";

export const Book = () => {
  const tHeadings: string[] = [
    "BookId",
    "Title",
    "Publisher",
    "Isbn",
    "Author",
    "Edition",
    "Price",
    "Total Qty",
    "Avilable Qty",
    "Last Updated Date",
    "Last Updated Time",
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
