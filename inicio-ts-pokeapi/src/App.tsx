import React, { useEffect, useState } from "react";
import "./App.css";
import { pokeSearchAdvanced } from "./Pokemon/PokemonService";
import BuscadorPokemon from "./Pokemon/Buscador";
import MUIDataTable from "mui-datatables";

function App() {
  const [filtro, setFiltro] = useState("b");
  const [buscar, setBuscar] = useState(true);
  const [pokes, setPokes] = useState([]);

  useEffect(() => {
    if (!buscar) return;

    pokeSearchAdvanced(filtro).then((p) => setPokes(p));
  }, [filtro, buscar]);

  return (
    <div className="App">
      {console.log(pokes)}
      <BuscadorPokemon
        filtro={filtro}
        setFiltro={setFiltro}
        setBuscar={setBuscar}
      />
      {pokes && <MUIDataTable columns={[]} data={[]} title={undefined} />}
    </div>
  );
}

export default App;
