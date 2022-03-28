import React from "react";
import { useFormik } from "formik";
import { Button, TextField } from "@mui/material";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  buscar: yup
    .string("Introduce el nombre de un pokemon")
    .required("Necesita un nombre para comenzar la busqueda"),
});

const BuscadorPokemon = (props) => {
  const formik = useFormik({
    initialValues: { buscar: props.buscar },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      props.setBuscar(values.buscar);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        id="buscar"
        name="buscar"
        label="Buscar"
        value={formik.values.buscar}
        onChange={formik.handleChange}
        error={formik.touched.buscar && Boolean(formik.errors.buscar)}
        helperText={formik.touched.buscar && formik.errors.buscar}
      />
      <Button color="primary" variant="contained" type="submit">
        Buscar
      </Button>
    </form>
  );
};

export default BuscadorPokemon;
