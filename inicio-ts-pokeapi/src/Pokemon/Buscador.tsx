import { useState } from "react";
import { useFormik } from "formik";
import {
  alpha,
  AppBar,
  IconButton,
  styled,
  TextField,
  Toolbar,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  filtro: yup
    .string()
    .required("Necesita un nombre para comenzar la busqueda"),
});
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(TextField)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const BuscadorPokemon = (props: any) => {
  const formik = useFormik({
    initialValues: { filtro: props.filtro },
    validationSchema: validationSchema,
    onSubmit: (values: any) => {
      props.setFiltro(values.filtro);
      props.setBuscar(true);
      setShowSearch(false);
    },
  });

  const [showSearch, setShowSearch] = useState(false);
  const enterPress = (key:any) => {
    if (key.key === "Enter") formik.handleSubmit();
  };

  return (
    <AppBar position="static">
      <Toolbar>
        {!showSearch ? (
          <IconButton
            onClick={() => setShowSearch(true)}
            size="medium"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            style={{ marginRight: 2 }}
          >
            <SearchIcon />
          </IconButton>
        ) : (
          <Search onKeyDown={(key:any) => enterPress(key)}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              name="filtro"
              placeholder="Search…"
              value={formik.values.filtro}
              onChange={formik.handleChange}
              error={formik.touched.filtro && Boolean(formik.errors.filtro)}
              //helperText={formik.touched.filtro && formik.errors.filtro}
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default BuscadorPokemon;
