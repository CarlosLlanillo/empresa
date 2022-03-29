import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
//import { DataGrid } from "@mui/x-data-grid";
import { pokeSearch } from "./PokemonService";
import React, { useEffect, useState } from "react";
import FormDialog from "./FormDialog";

const columns = [
  { id: "name", label: "Nombre" },
  { id: "url", label: "URL" },
];

const TablaPokemon = (props) => {
  //Actualizado del pokemon buscado
  useEffect(() => {
    pokeSearch(props.filtro).then((p) => {
      setPokemons(p);
    });
    props.setBuscar(false);
  }, [props]);
  const [pokemons, setPokemons] = useState([]);
  //Pokemon seleccionado
  const [selectedPoke, setSelectedPoke] = useState(null);

  //Pagina actual
  const [page, setPage] = useState(0);
  const handleChangePage = (e, newPage) => {
    setPage(newPage);
  };

  //Filas por pagina
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const handleChangeRowsPerPage = (e) => {
    setRowsPerPage(+e.target.value);
    setPage(0);
  };
  //Manejo del formdialog de los pokemons
  const [open, setOpen] = useState(false);
  const hadleClickRow = (poke) => {
    setSelectedPoke(poke);
    setOpen(true);
  };
  /*const dataCol = [
    { field: "name", headerName: "Name", width: 200 },
    { field: "url", headerName: "Url", width: "auto" },
  ];*/

  const removePoke = (poke) => {
    let p = pokemons.filter((p) => p.name !== poke.name);
    setPokemons(p);
  };
  return (
    <Paper
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      {/*pokemons.length > 0 && (
        <DataGrid
          pageSize={5}
          rowsPerPageOptions={[5]}
          columns={dataCol}
          rows={pokemons}
          style={{ height: 300 }}
        />
      )*/}
      <div style={{ width: "60%" }}>
        <TableContainer>
          <Table stickyHeader size="small">
            <TableHead>
              <TableRow>
                {columns.map((c, i) => (
                  <TableCell key={i} style={{ textAlign: "center" }}>
                    {c.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {pokemons
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((poke, i) => (
                  <TableRow key={i} hover>
                    {columns.map((col, i) => (
                      <TableCell onClick={() => hadleClickRow(poke)} key={i}>
                        {poke[col.id]}
                      </TableCell>
                    ))}
                    <TableCell>
                      <Button
                        color="error"
                        variant="contained"
                        onClick={() => removePoke(poke)}
                      >
                        Borrar
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          SelectProps={{
            inputProps: {
              "aria-label": "per page",
            },
            native: true,
          }}
          page={page}
          rowsPerPage={rowsPerPage}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={[5, 10, 25, 50, { value: -1, label: "Todos" }]}
          count={pokemons.length}
          component="div"
        />
      </div>
      {open ? (
        <FormDialog open={open} setOpen={setOpen} poke={selectedPoke} />
      ) : null}
    </Paper>
  );
};

export default TablaPokemon;
