import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PokeAppProvider } from "./context/PokeAppContext";
import { Header, Footer } from "./components";
import {
  PokemonList,
  PokemonPage,
  PokemonAbility,
  PokemonGeneration,
  PokemonMove,
  PokemonType,
} from "./routes";

function App() {
  return (
    <PokeAppProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<PokemonList />} />
          <Route path="/ability/:id" element={<PokemonAbility />} />
          <Route path="/generation/:id" element={<PokemonGeneration />} />
          <Route path="/move/:id" element={<PokemonMove />} />
          <Route path="/type/:id" element={<PokemonType />} />
          <Route path="/pokemon/:id" element={<PokemonPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </PokeAppProvider>
  );
}

export default App;
