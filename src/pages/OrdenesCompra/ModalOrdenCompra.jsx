import React from "react";
import { useState, useEffect } from "react";
import {
  TextField,
  DialogContent,
  DialogTitle,
  Grid,
  makeStyles,
  Button,
} from "@material-ui/core";
import { useForm } from "react-hook-form";
import Dialog from "@material-ui/core/Dialog";
import SelectProveedor from "../../components/Selects/SelectProveedor";
import SelectProductos from "../../components/Selects/SelectProductos";
import {
  createPurchaseOrder,
  listProductsActives,
  listSupplierAtives,
} from "../../api/api.core";
import user from "../../config/user";
const useStyles = makeStyles((theme) => ({
  textfields: { marginBottom: "10px" },
  textarea: { height: "300px", border: "1px solid green" },
  container: { padding: "20px 0", maxWidth: "1024px" },
  paper: { padding: "20px 40px" },
  subtitle: { margin: "20px 0" },
  button: { margin: "20px", padding: "13px" },
  margin: { margin: theme.spacing(1) },
  bold: { fontWeight: "bold", textTransform: "uppercase" },
  chip: { padding: "0px", color: "red", marginTop: "-17px" },
  empty: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "rgba(0,0,0,.75)",
  },
}));
const ModalOrdenCompra = (props) => {
  const classes = useStyles();
  const { register, handleSubmit, watch, errors } = useForm();
  const { setVisible, open, getlistOrders } = props;
  const [suppliers, setsuppliers] = useState([]);
  const [supplier, setSupplier] = useState(null);
  const [product, setProduct] = useState(null);
  const [products, setproducts] = useState([]);
  const getSuppliersA = async () => {
    let res = await listSupplierAtives();
    setsuppliers(res.data);
  };
  const getProductsA = async () => {
    let res = await listProductsActives();
    setproducts(res.data);
  };

  useEffect(() => {
    getSuppliersA();
    getProductsA();
  }, []);

  console.log(user.getId())

  const onSubmit = async (data) => {
    if (product && supplier) {
      let newOrderPurchase = data;
      newOrderPurchase.product = product._id;
      newOrderPurchase.supplier = supplier._id;
      newOrderPurchase.user= user.getId();
      let res = await createPurchaseOrder(newOrderPurchase);
      setVisible(false);
      getlistOrders();
    }
  };

  return (
    <>
      <Dialog
        onClose={() => setVisible(false)}
        aria-labelledby="simple-dialog-title"
        open={open}
      >
        {" "}
        <DialogTitle id="form-dialog-title">
          Agregar Orden de Compra
        </DialogTitle>
        <DialogContent style={{ padding: "30px" }}>
          <form autocomplete="off" onSubmit={handleSubmit(onSubmit)}>
            <Grid container direction="row" spacing={1}>
              <Grid container spacing={2}>
                <Grid item sm={6}>
                  <TextField
                    className={classes.textfields}
                    id="outlined-basic"
                    label="Codigo"
                    variant="outlined"
                    type="text"
                    {...register("code", {
                      required: true,
                    })}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item sm={6}>
                  <SelectProveedor
                    className={classes.textfields}
                    data={suppliers}
                    setSupplier={setSupplier}
                  />
                </Grid>
              </Grid>
              <br />
              <br />
              <br />
              <Grid container spacing={2}>
                <Grid item sm={6}>
                  <SelectProductos
                    className={classes.textfields}
                    data={products}
                    setProduct={setProduct}
                  />
                </Grid>

                <Grid item sm={8}></Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item sm={6}>
                  <TextField
                    className={classes.textfields}
                    id="outlined-basic"
                    label="Cantidad"
                    variant="outlined"
                    type="number"
                    {...register("quantity", {
                      required: true,
                    })}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item sm={6}>
                  <TextField
                    className={classes.textfields}
                    id="outlined-basic"
                    label="Precio Unitario"
                    variant="outlined"
                    type="number"
                    {...register("unit_price", {
                      required: true,
                    })}
                  />
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item sm={6}>
                  <Button type="submit" variant="contained" color="primary">
                    GUARDAR ORDEN DE COMPRA
                  </Button>
                </Grid>
              </Grid>
            </Grid>{" "}
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ModalOrdenCompra;
