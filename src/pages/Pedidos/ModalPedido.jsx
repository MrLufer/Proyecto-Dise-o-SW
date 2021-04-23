import React from "react";
import { useState } from "react";
import { TextField, DialogContent,Grid } from "@material-ui/core";

import Dialog from "@material-ui/core/Dialog";


const ModalPedido = (props) => {
  const { setVisible, open } = props;
  const [selectedDate, setSelectedDate] = useState(new Date('2014-08-18T21:11:54'));
  const handleDateChange = (date) => {
    setSelectedDate(date);
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
            <div className="row">
              <div className="col-lg-6">
                <label for="exampleInputEmail1" class="form-label">
                   PRODUCTO
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="col-lg-6">
                <label for="exampleInputEmail1" class="form-label">
                  FECHA DE INICIO 
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <label for="exampleInputEmail1" class="form-label">
                  FECHA LIMITE
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="col-lg-6">
                <label for="exampleInputEmail1" class="form-label">
                 CANTIDAD
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <label for="exampleInputEmail1" class="form-label">
                 PRECIO
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
            
            </div>
            <div className="row">
              <div className="col-lg-6">
              <button type="button" class="btn btn-primary">GUARDAR ORDEN DE COMPRA</button>
              </div>
           
            </div>


          </div>
        
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ModalPedido;
