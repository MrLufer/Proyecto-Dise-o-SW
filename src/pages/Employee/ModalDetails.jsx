import React from "react";
import { useState, useEffect } from "react";
import { TextField, DialogContent, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";
import Dialog from "@material-ui/core/Dialog";
import { addEmployee, userDetails } from "../../api/api.core";
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
const ModalPedido = (props) => {
  const classes = useStyles();
  const { setVisible, open, getlistProducts, employee } = props;
  const [data, setdata] = useState([]);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const getDetailsEmployee = async () => {
    let res = await userDetails(employee);
    setdata(res.data);
  };

  useEffect(() => {
    getDetailsEmployee();
  }, [employee]);
  return (
    <>
      <Dialog
        onClose={() => setVisible(false)}
        aria-labelledby="simple-dialog-title"
        open={open}
      >
        <DialogContent>
          <div>
            <>
              <h3>DETALLES DEL TRABAJADOR</h3>
              <TableContainer component={Paper}>
                <Table
                  className={classes.table}
                  size="small"
                  aria-label="a dense table"
                >
                  <TableHead>
                    <TableRow>
                      <TableCell>CODIGO</TableCell>
                      <TableCell>PRODUCTO</TableCell>
                      <TableCell>CANTIDAD</TableCell>
                      <TableCell>PRECIO UNITARIO</TableCell>
                      <TableCell>USUARIO</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data.map((row) => (
                      <TableRow key={row.name}>
                        <TableCell>{row.code}</TableCell>
                        <TableCell>{row.product.name_product}</TableCell>
                        <TableCell>{row.quantity}</TableCell>
                        <TableCell>{row.unit_price}</TableCell>
                        <TableCell>{row.user.f_name}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ModalPedido;
