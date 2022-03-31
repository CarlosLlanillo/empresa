import React, { useEffect, useState } from "react";
import "./App.css";
import { pokeInfo, pokeSearch } from "./Pokemon/PokemonService";
import BuscadorPokemon from "./Pokemon/Buscador";
import MUIDataTable from "mui-datatables";
import { string } from "yup";
import {
  capitalize,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import { useQuery } from "react-query";

const columns = [
  {
    name: "img",
    label: "Imagen",
    options: {
      filter: false,
      sort: true,
      customBodyRender: (value: string) => <img src={value}></img>,
    },
  },
  {
    name: "name",
    label: "Nombre",
    options: {
      filter: false,
      sort: true,
    },
  },
  {
    name: "weight",
    label: "Peso",
    options: {
      filter: false,
      sort: true,
    },
  },
  {
    name: "height",
    label: "Altura",
    options: {
      filter: false,
      sort: true,
    },
  },
  {
    name: "types",
    label: "Tipos",
    options: {
      filter: false,
      sort: false,
      customBodyRender: (value: []) => (
        <div>
          {value.map((t: any, i: number) => (
            <div
              style={{
                height: 45,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {capitalize(t.type.name)}
            </div>
          ))}
        </div>
      ),
    },
  },
];

function App() {
  const [filtro, setFiltro] = useState("");
  // const [pokes, setPokes] = useState([]);

  const [rows, setRows] = useState(10);
  const [page, setPage] = useState(0);
  // const [count, setCount] = useState(0);

  const { isLoading, error, data, isFetching } = useQuery(
    ["pokes", filtro, rows, page],
    () => {
      if (filtro) return pokeSearch(filtro);

      return pokeInfo(page, rows);
    },
    { keepPreviousData: true }
  );

  const handleSearch = (searchText: string | null) => {
    if (searchText) {
      setPage(0);
      setFiltro(searchText);
    } else {
      setPage(0);
      setFiltro("");
    }
  };

  // useEffect(() => {
  //   if (!filtro) return;

  //   pokeSearchAdvanced(filtro).then((p: any) => setPokes(p));
  // }, [filtro]);

  return (
    <>
      {isLoading && "cargando"}
      {console.log("render", data)}
      {data && (
        <MUIDataTable
          options={{
            searchText: filtro,
            onSearchChange: (searchText: string | null) => {
              handleSearch(searchText);
            },
            serverSide: !data.search,
            count: data.count,
            filter: true,
            filterType: "multiselect",
            responsive: "standard",
            pagination: true,
            onChangePage: (currentPage) => {
              setPage(currentPage);
            },
            onChangeRowsPerPage: (numberRows) => {
              setPage(0);
              setRows(numberRows);
            },
            rowsPerPageOptions: [5, 10, 20],
            rowsPerPage: rows,
            page: page,
          }}
          columns={columns}
          data={data.pokes}
          title="Pokemons"
        />
      )}
    </>
  );
}

export default App;
