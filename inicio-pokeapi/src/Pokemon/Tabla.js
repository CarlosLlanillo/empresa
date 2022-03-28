import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
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
  }, [props.filtro]);
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

  //Filas vacias
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - pokemons.length) : 0;

  //Manejo del formdialog de los pokemons
  const [open, setOpen] = useState(false);
  const hadleClickRow = (poke) => {
    setSelectedPoke(poke);
    setOpen(true);
    console.log("cambio", open, poke);
  };

  return (
    <Paper sx={{ width: "100%" }}>
      <TableContainer>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>{columns[0].label}</TableCell>
              <TableCell>{columns[1].label}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pokemons
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((poke, i) => {
                return (
                  <TableRow key={i} hover onClick={() => hadleClickRow(poke)}>
                    {columns.map((col) => {
                      const value = poke[col.id];
                      return (
                        <TableCell key={col.id}>
                          {col.format && typeof value === "number"
                            ? col.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        SelectProps={{
          inputProps: {
            "aria-label": "rows per page",
          },
          native: true,
        }}
        page={page}
        rowsPerPage={rowsPerPage}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[5, 10, 25, 50, { value: -1, label: "Todos" }]}
        count={pokemons.length}
      />
      {open ? (
        <FormDialog open={open} setOpen={setOpen} poke={selectedPoke} />
      ) : null}
    </Paper>
  );
};

export default TablaPokemon;