import "./App.css";
import { Button } from "@mui/material";
import BuscadorPokemon from "./Pokemon/Buscador";
import TablaPokemon from "./Pokemon/Tabla";
import { useState } from "react";

function App() {
  const [buscar, setBuscar] = useState("b");

  const [showResults, setShowResults] = useState(false);
  const buscador_onClick = () => setShowResults(!showResults);

  return (
    <div className="App">
      <Button variant="text" onClick={buscador_onClick}>
        Mostrar Buscador
      </Button>
      {showResults ? (
        <BuscadorPokemon buscar={buscar} setBuscar={setBuscar} />
      ) : null}
      <TablaPokemon filtro={buscar}/>
    </div>
  );
}

export default App;
