import {
  Button,
  capitalize,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  InputAdornment,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { useState, useEffect } from "react";
import { pokeInfo, pokeTypes } from "./PokemonService";

//Elemento que genera una tabla de los movimientos que pasemos por parametros
const RenderMoves = (props) => {
  return (
    <TableContainer sx={{ maxHeight: 100 }}>
      <Table stickyHeader size="small">
        <TableHead>
          <TableRow>
            <TableCell>Movimientos:</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.moves.map((move, i) => (
            <TableRow key={i}>
              <TableCell>{move}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const FormPokemon = (props) => {
  const handleClose = () => props.setOpen(false);

  const obtenerPoke = async () => {
    await pokeInfo(props.poke.url).then((p) => {
      formik.setValues({
        name: props.poke.name,
        height: p.height,
        weight: p.weight,
        types: p.types.map((t) => t.type.name),
        stats: p.stats.map((s) => ({
          base_stat: s.base_stat,
          name: s.stat.name,
        })),
        moves: p.moves.slice(0, 5).map((m) => m.move.name),
        sprites: p.sprites,
      });
      props.setOpen(true);
    });
  };

  const [tipos, setTipos] = useState([]);
  const obtenerTipos = async () => {
    await pokeTypes().then((t) => {
      setTipos(t);
    });
  };

  useEffect(() => {
    obtenerTipos();
    obtenerPoke();
  }, []);

  const validationSchema = yup.object().shape({
    height: yup
      .number()
      .positive("Debe ser mayor de 0")
      .required("Este campo es obligatorio")
      .typeError("Debe ser numerico"),
    weight: yup
      .number()
      .positive("Debe ser mayor de 0")
      .required("Este campo es obligatorio")
      .typeError("Debe ser numerico"),
    stats: yup.array().of(
      yup.object().shape({
        base_stat: yup
          .number()
          .required("Son obligatorios")
          .integer()
          .positive("Debe ser mayor que 0")
          .typeError("Debe ser numerico"),
      })
    ),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      height: 0,
      weight: 0,
      types: [],
      stats: [],
      moves: [],
      sprites: {},
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      handleClose();
    },
  });

  const sizeInputProps = {
    endAdornment: <InputAdornment position="end">in</InputAdornment>,
  };

  return (
    props.open === true && (
      <Dialog open={props.open} onClose={handleClose}>
        <form onSubmit={formik.handleSubmit}>
          <DialogTitle>
            <img
              src={`${formik.values.sprites.front_default}`}
              alt={props.poke.name}
              style={{ right: 0, top: 0, position: "absolute" }}
            />
            {capitalize(formik.values.name)}
          </DialogTitle>
          <DialogContent>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  name="height"
                  label="Altura"
                  type="text"
                  variant="standard"
                  value={formik.values.height}
                  onChange={formik.handleChange}
                  error={formik.touched.height && Boolean(formik.errors.height)}
                  helperText={formik.touched.height && formik.errors.height}
                  InputProps={sizeInputProps}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  name="weight"
                  label="Peso"
                  type="text"
                  variant="standard"
                  value={formik.values.weight}
                  onChange={formik.handleChange}
                  error={formik.touched.weight && Boolean(formik.errors.weight)}
                  helperText={formik.touched.weight && formik.errors.weight}
                  InputProps={sizeInputProps}
                />
              </Grid>
              <Grid item xs={12}>
                <label>Estadisticas: </label>
              </Grid>
              {formik.values.stats.map((s, i) => {
                return (
                  <Grid key={i} item xs={4}>
                    <TextField
                      name={`stats[${i}].base_stat`}
                      variant="standard"
                      label={capitalize(s.name)}
                      value={s.base_stat}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.stats &&
                        formik.errors.stats &&
                        Boolean(
                          formik.errors.stats.find((x, index) => index === i)
                        )
                      }
                      helperText={
                        formik.touched.stats &&
                        formik.errors.stats &&
                        formik.errors.stats.find((x, index) => index === i)
                          ? formik.errors.stats.find((x, index) => index === i)
                              .base_stat
                          : ""
                      }
                    />
                  </Grid>
                );
              })}

              <Grid item xs={12}>
                <label>Tipos: </label>
              </Grid>
              {formik.values.types.map((t, i) => (
                <Grid key={i} item xs={5}>
                  <Select
                    name={`types[${i}]`}
                    variant="standard"
                    value={t}
                    onChange={formik.handleChange}
                  >
                    {tipos.map((t, i) => (
                      <MenuItem value={t.name} key={i}>
                        {capitalize(t.name)}
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
              ))}

              <Grid item xs={12}>
                <RenderMoves moves={formik.values.moves} />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button type="submit">Aceptar</Button>
            <Button onClick={handleClose}>Cerrar</Button>
          </DialogActions>
        </form>
      </Dialog>
    )
  );
};

export default FormPokemon;
