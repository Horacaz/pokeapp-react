import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokemonAbility from "./components/PokemonAbility/PokemonAbility";

function App() {
  return (
    <>
      <h1>PokeApp</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/ability/:id" element={<PokemonAbility />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
