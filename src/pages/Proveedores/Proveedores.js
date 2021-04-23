import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Wrapper } from "../../components";
import TablePedidos from "./TablePedidos";
import ModalProveedor from "./ModalProveedor"
import { useState ,useEffect} from "react";
import { listSupplier } from "../../api/api.core";
const Blank = () => {

  const [visible, setVisible] = useState(false)
  const [data, setdata] = useState([])

  const getlistSupplier = async () => {
     let res =  await listSupplier()
     setdata(res.data)
  }
  

  useEffect(() => {
    getlistSupplier()
  }, [])
  return (<Wrapper>
    <Card>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          Sistema de gestión de pedidos y ventas G6FISI
        </Typography>
        <Typography variant="h5" component="h2">
          PROVEEDORES
        </Typography>

        <Button variant="contained" onClick={()=>setVisible(true)} color="primary">
          REGISTRAR
        </Button>
      
      </CardContent>
    </Card>
    <ModalProveedor open={visible}  getlistSupplier={getlistSupplier}  setVisible={setVisible}/>
    <br />

    <TablePedidos  data={data}/>
  </Wrapper>)
  
  }

export default Blank;
