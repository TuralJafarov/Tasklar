import React from "react";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
} from "@mui/material";

const MUTable = ({children}) => {
  const tableHeaders=["Todo","Tesvir","Tarix","Prioritet","Tarix","Status"]
  return (
    <div>
      <TableContainer
        sx={{ marginTop: "20px", maxWidth: "900px", margin: "0 auto" }}
      >
        <Table>
          <TableHead>
            <TableRow>
             {
                tableHeaders.map((header) =>(
                  <TableCell>{header}</TableCell>
                ))
             }
            </TableRow>
          </TableHead>
          <TableBody>{children}</TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default MUTable;
