import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokemonAbility from "./components/PokemonAbility/PokemonAbility";
import PokemonGeneration from "./components/PokemonGeneration/PokemonGeneration";
import PokemonMoves from "./components/PokemonMoves/PokemonMoves";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/ability/:id" element={<PokemonAbility />} />
          <Route path="/generation/:id" element={<PokemonGeneration />} />
          <Route path="/move/:id" element={<PokemonMoves />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
