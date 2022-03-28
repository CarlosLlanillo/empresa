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
        {props.moves.map((move, i) => (
          <TableRow disablePadding key={i}>
            <TableCell>{move.move.name}</TableCell>
          </TableRow>
        ))}
      </Table>
    </TableContainer>
  );
};

const FormPokemon = (props) => {
  const handleClose = () => props.setOpen(false);
  const [tipos, setTipos] = useState([]);

  const obtenerPoke = async () => {
    await pokeInfo(props.poke.url).then((p) => {
      formik.setValues({
        name: props.poke.name,
        height: p.height,
        weight: p.weight,
        types: p.types,
        stats: p.stats.map((s) => ({
          base_stat: s.base_stat,
          name: s.stat.name,
        })),
        moves: p.moves.slice(0, 5),
        sprites: p.sprites,
      });
      console.log(formik.values);
      props.setOpen(true);
    });
  };

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
      .number(0, "Tiene que ser numerico")
      .positive("Debe ser mayor de 0")
      .required("Este campo es obligatorio"),
    weight: yup
      .number("Tiene que ser numerico")
      .positive("Debe ser mayor de 0")
      .required("Este campo es obligatorio"),
    stats: yup.array(
      yup.object().shape({
        base_stat: yup
          .number()
          .required("Son obligatorios")
          .integer()
          .positive("Debe ser mayor que 0")
          .max(100, "Un maximo de 100"),
        name: yup.string(),
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
            />
            {capitalize(formik.values.name)}
          </DialogTitle>
          <DialogContent>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  name="height"
                  label="Altura"
                  type="number"
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
                  type="number"
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
              {formik.values.stats.map((s, i) => (
                <Grid item xs={4}>
                  <TextField
                    id={s.name}
                    name={`stats[${i}].base_stat`}
                    type="number"
                    variant="standard"
                    label={capitalize(s.name)}
                    value={s.base_stat}
                    onChange={formik.handleChange}
                    error={formik.touched.stats && Boolean(formik.errors.stats)}
                    //helperText={formik.touched.stats && formik.errors.stats}
                  />
                </Grid>
              ))}

              <Grid item xs={12}>
                <label>Tipos: </label>
              </Grid>
              {formik.values.types.map((t, i) => (
                <Grid item xs={5}>
                  <Select
                    name={`types[${i}].type.name`}
                    type="text"
                    variant="standard"
                    value={t.type.name}
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
            <Button type="submit" onClick={formik.handleSubmit}>
              Aceptar
            </Button>
            <Button onClick={handleClose}>Cerrar</Button>
          </DialogActions>
        </form>
      </Dialog>
    )
  );
};

export default FormPokemon;
