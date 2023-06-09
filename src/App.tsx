import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokemonAbility from "./components/PokemonAbility/PokemonAbility";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/ability/:id" element={<PokemonAbility />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
