import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Wrapper } from "../../components";
import TablePedidos from "./TablePedidos";
import Paper from "@material-ui/core/Paper";
const Blank = () => (
  <Wrapper>
    <Card>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          Sistema de gestión de pedidos y ventas G6FISI
        </Typography>
        <Typography variant="h5" component="h2">
          PEDIDOS
        </Typography>

        <Button variant="contained" color="primary">
          REGISTRAR
        </Button>
      
      </CardContent>
    </Card>

    <br />

    <TablePedidos />
  </Wrapper>
);

export default Blank;
