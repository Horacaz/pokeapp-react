import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PokeAppProvider } from "./context/PokeAppContext";
import PokemonAbility from "./routes/PokemonAbility";
import PokemonGeneration from "./routes/PokemonGeneration";
import PokemonMove from "./routes/PokemonMove";
import PokemonType from "./routes/PokemonType";
import PokemonPage from "./routes/PokemonPage";
import PokemonList from "./routes/PokemonList";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
