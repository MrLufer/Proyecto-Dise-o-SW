import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function DenseTable(props) {
  const {data} = props;
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell >CODIGO</TableCell>
            <TableCell >NOMBRE DEL PRODUCTO</TableCell>
            <TableCell >EXISTENCIAS</TableCell>
            <TableCell >EXISTENCIAS EN PEDIDO</TableCell>
            <TableCell >PRECIO DE COMPRA</TableCell>
            <TableCell >PRECIO DE VENTA</TableCell>
            <TableCell >ESTADO</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.name}>
            
              <TableCell>{row.code_product}</TableCell>
              <TableCell>{row.name_product}</TableCell>
              <TableCell>{row.stock}</TableCell>
              <TableCell>{row.units_order}</TableCell>
              <TableCell>{row.purchase_price}</TableCell>
              <TableCell>{row.sale_price}</TableCell>
              <TableCell>{row.discontinued?"DESHABILITADO":"HABILITADO"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
