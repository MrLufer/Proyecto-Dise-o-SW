import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import Button from "@material-ui/core/Button";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { updateOrder } from "../../api/api.core";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function DenseTable(props) {
  const { data } = props;
  const classes = useStyles();

  const changeState = async(id, status) => {
    let res = await updateOrder({id, status});
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>CODIGO</TableCell>
            <TableCell>PRODUCTO</TableCell>
            <TableCell>CANTIDAD</TableCell>
            <TableCell>PROVEEDOR</TableCell>
            <TableCell>PRECIO UNITARIO</TableCell>
            <TableCell>ESTADO</TableCell>
            <TableCell>CAMBIAR ESTADO</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.name}>
              <TableCell>{row.code}</TableCell>
              <TableCell>{row.product.name_product}</TableCell>
              <TableCell>{row.quantity}</TableCell>
              <TableCell>{row.supplier.name_business}</TableCell>
              <TableCell>{row.unit_price}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell>
                <>
                  {row.status == "PROCESO" && (
                    <button
                      onClick={(e) => changeState(row._id, "ACEPTAR")}
                      type="button"
                      class="btn btn-primary"
                    >
                      ACEPTAR
                    </button>
                  )}
                  {row.status == "ACEPTADO" && (
                    <button
                      onClick={(e) => changeState(row._id, "CANCELAR")}
                      type="button"
                      class="btn btn-danger"
                    >
                      CANCELAR
                    </button>
                  )}{" "}
                </>{" "}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
