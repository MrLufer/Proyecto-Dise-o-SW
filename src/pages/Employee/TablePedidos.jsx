import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function DenseTable(props) {
  const { data, setvisibleDetails, setemployee } = props;
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>USUARIO</TableCell>
            <TableCell>NOMBRES</TableCell>
            <TableCell>APELLIDOS</TableCell>

            <TableCell>ESTADO</TableCell>
            <TableCell>OPERACIONES</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.name}>
              <TableCell>{row.user}</TableCell>
              <TableCell>{row.f_name}</TableCell>
              <TableCell>{row.l_name}</TableCell>
              <TableCell>
                {row.discontinued ? "DESHABILITADO" : "HABILITADO"}
              </TableCell>
              <TableCell>
                <Button variant="contained" color="primary">
                  CAMBIAR ESTADO
                </Button>
                <Button
                  onClick={() => {
                    setemployee(row._id);
                    setvisibleDetails(true);
                  }}
                  style={{ marginLeft: "5px" }}
                  variant="contained"
                  color="secondary"
                >
                  VER DETALLES
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
