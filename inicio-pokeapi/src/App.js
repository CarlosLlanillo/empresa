import "./App.css";
import BuscadorPokemon from "./Pokemon/Buscador";
import TablaPokemon from "./Pokemon/Tabla";
import { useEffect, useState } from "react";
import { pokeSearchAdvanced } from "./Pokemon/PokemonService";

function App() {
  const [filtro, setFiltro] = useState("b");
  const [buscar, setBuscar] = useState(true);
  const [pokes, setPokes] = useState([]);

  useEffect(() => {
    if (!buscar) return;

    pokeSearchAdvanced(filtro).then((p) => setPokes(p));
    console.log(pokes);
  }, [pokes, filtro, buscar]);

  return (
    <div className="App">
      {console.log(pokes)}
      <BuscadorPokemon
        filtro={filtro}
        setFiltro={setFiltro}
        setBuscar={setBuscar}
      />
      <TablaPokemon filtro={filtro} buscar={buscar} setBuscar={setBuscar} />
    </div>
  );
}

export default App;
