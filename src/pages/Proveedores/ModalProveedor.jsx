import React from "react";
import { useState } from "react";
import { TextField, DialogContent, Grid } from "@material-ui/core";
import { useForm } from "react-hook-form";
import Dialog from "@material-ui/core/Dialog";
import { createSupplier } from "../../api/api.core";

const ModalPedido = (props) => {
  const { setVisible, open ,getlistSupplier} = props;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    let res = await createSupplier(data);
    setVisible(false);
    getlistSupplier();
  };

  return (
    <>
      <Dialog
        onClose={() => setVisible(false)}
        aria-labelledby="simple-dialog-title"
        open={open}
      >
        <DialogContent>
          <form autocomplete="off" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <div className="row">
                <div className="col-lg-6">
                  <label for="exampleInputEmail1" class="form-label">
                    RUC DEL PROVEEDOR
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    {...register("ruc", { required: true })}
                  />
                </div>
                <div className="col-lg-6">
                  <label for="exampleInputEmail1" class="form-label">
                    NOMBRE DEL CONTACTO
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    {...register("name", { required: true })}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <label for="exampleInputEmail1" class="form-label">
                    NOMBRE DE LA EMPRESA
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    {...register("name_business", { required: true })}
                  />
                </div>
                <div className="col-lg-6">
                  <label for="exampleInputEmail1" class="form-label">
                    DIRECCIÓN
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    {...register("address", { required: true })}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <label for="exampleInputEmail1" class="form-label">
                    CELULAR
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    id="exampleInputEmail1"
                    
                    {...register("phone_number", { required: true })}
                  />
                </div>
                <div className="col-lg-6">
                  <label for="exampleInputEmail1" class="form-label">
                    GIRO
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    {...register("business_line", { required: true })}
                  />
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-lg-6">
                  <button type="submit" class="btn btn-primary">
                    GUARDAR PROVEEDOR
                  </button>
                </div>
              </div>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ModalPedido;
