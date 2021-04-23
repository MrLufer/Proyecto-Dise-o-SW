import React from "react";
import { useState } from "react";
import { TextField, DialogContent, Grid } from "@material-ui/core";
import { useForm } from "react-hook-form";
import Dialog from "@material-ui/core/Dialog";
import { createProduct } from "../../api/api.core";

const ModalPedido = (props) => {
  const { setVisible, open,getlistProducts } = props;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();


  const onSubmit = async (data) => {
   
    let res = await createProduct(data)
    setVisible(false)
    getlistProducts()
    
  };
  return (
    <>
      <Dialog
        onClose={() => setVisible(false)}
        aria-labelledby="simple-dialog-title"
        open={open}
      >
        <DialogContent>
          <div>
            <form autocomplete="off" onSubmit={handleSubmit(onSubmit)}>
              <div className="row">
                <div className="col-lg-6">
                  <label for="exampleInputEmail1" class="form-label">
                    CODIGO DE PRODUCTO
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    name="code_product"
                    {...register("code_product", { required: true })}
                  />
                </div>
                <div className="col-lg-6">
                  <label for="exampleInputEmail1" class="form-label">
                    NOMBRE DE PRODUCTO
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    name="name_product"
                    {...register("name_product", { required: true })}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <label for="exampleInputEmail1" class="form-label">
                    PRECIO DE VENTA
                  </label>
                  <input
                    type="number"
                    class="form-control"step=".01"
                    name="sale_price"
                    {...register("sale_price", { required: true })}
                  />
                </div>
              </div>
              <br/>

              <div className="row">
                <div className="col-lg-6">
                  <button type="submit" class="btn btn-primary">
                    GUARDAR PRODUCTO
                  </button>
                </div>
              </div>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ModalPedido;
