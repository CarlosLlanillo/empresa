import { useEffect, useRef, useState } from 'react';
import { Box, Button, Grid, makeStyles, TextField } from '@material-ui/core';
import { Field, Form, Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import { Loader } from 'components/Loader/Loader';
import Map from './Map';

export default function MapView() {
  const classes = useStyles();

  const [selectedMarker, setSelectedMarker] = useState(null);

  return (
    <Box width={1} height={1} px={2} py={1}>
      <Grid container direction="row" className={classes.grid}>
        <Grid item xs={12} md={3} className={classes.options}>
          {selectedMarker && <AddEditForm selectedMarker={selectedMarker} />}
        </Grid>
        <Grid item xs={12} md={9} className={classes.content}>
          <Box width={1} height={1} display="flex" flexDirection="column" className={classes.container}>
            <Map setSelectedMarker={setSelectedMarker} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

const AddEditForm = (props) => {
  const { selectedMarker } = props;

  useEffect(() => {
    if (selectedMarker) {
      console.log(selectedMarker);
      formik.setValues({
        name: selectedMarker.name,
        position: {
          lat: selectedMarker.position.lat,
          lng: selectedMarker.position.lng,
        },
      });
    }
  }, [selectedMarker]);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Este campo es obligatorio'),
    position: Yup.object().shape({
      lat: Yup.number().typeError('Debe ser numerico'),
      lng: Yup.number().typeError('Debe ser numerico'),
    }),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      position: { lat: 0, lng: 0 },
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            name="name"
            label="Name"
            type="text"
            variant="standard"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            name="lng"
            label="lng"
            type="text"
            variant="standard"
            value={formik.values.position.lng}
            onChange={formik.handleChange}
            error={formik.touched.position && formik.touched.position.lng && Boolean(formik.errors.position?.lng)}
            helperText={formik.touched.position && formik.touched.position.lng && formik.errors.position?.lng}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            name="lat"
            label="lat"
            type="text"
            variant="standard"
            value={formik.values.position.lat}
            onChange={formik.handleChange}
            error={formik.touched.position && formik.touched.position.lat && Boolean(formik.errors.position?.lat)}
            helperText={formik.touched.position && formik.touched.position.lat && formik.errors.position?.lat}
          />
        </Grid>
      </Grid>
      <Button type="submit">Aceptar</Button>
    </form>
  );
};

const useStyles = makeStyles((theme) => ({
  grid: {
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  options: {
    backgroundColor: '#fff',
    borderRadius: '4px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      paddingTop: 24,
      paddingBottom: 24,
    },
    [theme.breakpoints.up('md')]: {
      paddingLeft: 16,
    },
  },
  container: {
    width: '100%',
    height: '100%',
  },
  paper: {
    width: '100%',
    height: '100%',
  },
  version: {
    color: '#FFF',
  },
}));
