import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Wrapper } from "../../components";
import TablePedidos from "./TablePedidos";
import ModalPedido from "./ModalPedido"
import { useState } from "react";
import axios from "axios"
const Blank = () => {

  const [visible, setVisible] = useState(false)
  const [loading, setloading] = useState(true)

  return (<Wrapper>
    <Card>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          Sistema de gestión de pedidos y ventas G6FISI
        </Typography>
        <Typography variant="h5" component="h2">
          PEDIDOS
        </Typography>

        <Button variant="contained" onClick={()=>setVisible(true)} color="primary">
          REGISTRAR
        </Button>
      
      </CardContent>
    </Card>
    <ModalPedido open={visible}   setVisible={setVisible}/>
    <br />

    <TablePedidos />
  </Wrapper>)
  
  }

export default Blank;
