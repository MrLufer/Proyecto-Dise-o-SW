import React from "react";
import { useState } from "react";
import { TextField, DialogContent, Grid } from "@material-ui/core";
import { useForm } from "react-hook-form";
import Dialog from "@material-ui/core/Dialog";
import { addEmployee } from "../../api/api.core";

const ModalPedido = (props) => {
  const { setVisible, open, getlistProducts } = props;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    let res = await addEmployee(data);
    setVisible(false);
    getlistProducts();
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
                    USUARIO
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    name="code_product"
                    {...register("user", { required: true })}
                  />
                </div>
                <div className="col-lg-6">
                  <label for="exampleInputEmail1" class="form-label">
                    NOMBRES
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    name="name_product"
                    {...register("f_name", { required: true })}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <label for="exampleInputEmail1" class="form-label">
                    APELLIDOS
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    step=".01"
                    name="sale_price"
                    {...register("l_name", { required: true })}
                  />
                </div>

                <div className="col-lg-6">
                  <label for="exampleInputEmail1" class="form-label">
                    CONTRASEÑA
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    step=".01"
                    name="sale_price"
                    {...register("password", { required: true })}
                  />
                </div>
              </div>
              <br />

              <div className="row">
                <div className="col-lg-6">
                  <button type="submit" class="btn btn-primary">
                    GUARDAR TRABAJADOR
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
