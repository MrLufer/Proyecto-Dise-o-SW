import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Wrapper } from "../../components";
import TablePedidos from "./TablePedidos";
import ModalPedido from "./ModalPedido";
import ModalDetails from "./ModalDetails";
import { useState, useEffect } from "react";
import { getEmployees, listProducts } from "../../api/api.core";

const Employee = () => {
  const [visible, setVisible] = useState(false);
  const [visibleDetails, setvisibleDetails] = useState(false);
  const [loading, setloading] = useState(true);
  const [data, setdata] = useState([]);
  const [employee, setemployee] = useState(null);
  const getlistProducts = async () => {
    let res = await getEmployees();
    setdata(res.data);
  };

  useEffect(() => {
    getlistProducts();
  }, []);
  return (
    <Wrapper>
      <Card>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            Sistema de gestión de pedidos y ventas G6FISI
          </Typography>
          <Typography variant="h5" component="h2">
            TRABAJADORES
          </Typography>

          <Button
            variant="contained"
            onClick={() => setVisible(true)}
            color="primary"
          >
            REGISTRAR
          </Button>
        </CardContent>
      </Card>
      <ModalPedido
        open={visible}
        getlistProducts={getlistProducts}
        setVisible={setVisible}
      />
      {employee && (
        <ModalDetails
          open={visibleDetails}
          employee={employee}
          getlistProducts={getlistProducts}
          setVisible={setvisibleDetails}
        />
      )}
      <br />

      <TablePedidos
        data={data}
        setemployee={setemployee}
        setvisibleDetails={setvisibleDetails}
      />
    </Wrapper>
  );
};

export default Employee;
