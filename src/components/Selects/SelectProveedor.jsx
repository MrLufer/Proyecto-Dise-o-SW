import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const SelectProveedor = (props) => {
  const { data,setSupplier } = props;

  return (
    <>
      <Autocomplete
        id="combo-box-demo"
        options={data}
        getOptionLabel={(option) => option.name_business}
        style={{ width: 300 }}
        onChange={(event, newValue) => {
          setSupplier(newValue);
        }}
        renderInput={(params) => (
          <TextField {...params} label="Proveedor" variant="outlined" />
        )}
      />
    </>
  );
};

export default SelectProveedor;
