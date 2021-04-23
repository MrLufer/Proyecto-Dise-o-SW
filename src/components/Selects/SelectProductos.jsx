import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const SelectProveedor = (props) => {
  const { data,setProduct } = props;

  return (
    <>
      <Autocomplete
        id="combo-box-demo"
        options={data}
        getOptionLabel={(option) => option.code_product + " - " + option.name_product}
        style={{ width: 300 }}
        onChange={(event, newValue) => {
          setProduct(newValue);
        }}
        renderInput={(params) => (
          <TextField {...params} label="Producto" variant="outlined" />
        )}
      />
    </>
  );
};

export default SelectProveedor;
