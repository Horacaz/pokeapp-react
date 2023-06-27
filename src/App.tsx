import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokemonAbility from "./components/PokemonAbility/PokemonAbility";
import PokemonGeneration from "./components/PokemonGeneration/PokemonGeneration";
import PokemonMoves from "./components/PokemonMoves/PokemonMoves";
import PokemonTypes from "./components/PokemonTypes/PokemonTypes";
import PokemonPage from "./components/PokemonPage/PokemonPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/ability/:id" element={<PokemonAbility />} />
          <Route path="/generation/:id" element={<PokemonGeneration />} />
          <Route path="/move/:id" element={<PokemonMoves />} />
          <Route path="/type/:id" element={<PokemonTypes />} />
          <Route path="/pokemon/:id" element={<PokemonPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
