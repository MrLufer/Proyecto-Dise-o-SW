import React,{useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Wrapper } from "../../components";
import TablePedidos from "./TablePedidos";

import { useState } from "react";
import { getPurchaseOrders } from "../../api/api.core";
import ModalOrdenCompra from "./ModalOrdenCompra";
const Blank = () => {

  const [visible, setVisible] = useState(false)
  const [data, setdata] = useState([])

  const getlistOrders = async () => {
     let res =  await getPurchaseOrders()
     setdata(res.data)
  }
  

  useEffect(() => {
    getlistOrders()
  }, [])

  return (<Wrapper>
    <Card>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          Sistema de gestión de pedidos y ventas G6FISI
        </Typography>
        <Typography variant="h5" component="h2">
          ORDENES DE COMPRA
        </Typography>

        <Button variant="contained" onClick={()=>setVisible(true)} color="primary">
          REGISTRAR
        </Button>
      
      </CardContent>
    </Card>
    <ModalOrdenCompra open={visible}  getlistOrders={getlistOrders} setVisible={setVisible}/>
    <br />

    <TablePedidos data={data} />
  </Wrapper>)
  
  }

export default Blank;
