import React from "react";
import { useState, useEffect } from "react";
import {
  TextField,
  DialogContent,
  Grid,
  Button,
  DialogTitle,
  makeStyles,
} from "@material-ui/core";
import { useForm } from "react-hook-form";
import SelectProductos from "../../components/Selects/SelectProductos";
import Dialog from "@material-ui/core/Dialog";
import { listProductsActives, addOrder } from "../../api/api.core";
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

const ModalPedido = (props) => {
  const classes = useStyles();
  const { setVisible, open, getListOrders } = props;
  const { register, handleSubmit, watch, errors } = useForm();
  const [product, setProduct] = useState(null);
  const [products, setproducts] = useState([]);
  const getProductsA = async () => {
    let res = await listProductsActives();
    setproducts(res.data);
  };

  useEffect(() => {
    getProductsA();
  }, []);

  const onSubmit = async (data) => {
    if (product) {
      let newOrder = data;
      newOrder.product = product._id;
      newOrder.user= user.getId();
      let res = await addOrder(newOrder);
      setVisible(false);
      getListOrders();
    }
  };

  return (
    <>
      <Dialog
        onClose={() => setVisible(false)}
        aria-labelledby="simple-dialog-title"
        open={open}
      >
        <DialogTitle id="form-dialog-title">Agregar Pedido</DialogTitle>
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
                    CREAR PEDIDO
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

export default ModalPedido;
