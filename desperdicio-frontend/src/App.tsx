import "./App.css";
import { theme } from "./theme";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header/header.components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import { Aligner } from "./components/Aligner";
import Relatorio from "./pages/relatorio";
import SobreNos from "./pages/sobre-nos";
import Ajude from "./pages/ajude-alguem";
import Index from "./pages/index";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Aligner>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/doe" element={<Home />} />
            <Route path="/ajude" element={<Ajude />} />
            <Route path="/sobre-nos" element={<SobreNos />} />
            <Route path="/relatorio" element={<Relatorio />} />
          </Routes>
        </Aligner>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
