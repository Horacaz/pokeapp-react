import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokemonAbility from "./components/PokemonAbility/PokemonAbility";
import PokemonGeneration from "./components/PokemonGeneration/PokemonGeneration";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/ability/:id" element={<PokemonAbility />} />
          <Route path="/generation/:id" element={<PokemonGeneration />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
