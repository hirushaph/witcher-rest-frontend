import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Home from "./pages/Home";
import { IconContext } from "react-icons";
import { CharacterContextProvider } from "./context/CharacterContext";

function App() {
  return (
    <CharacterContextProvider>
      <IconContext.Provider value={{ className: "react-icons" }}>
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="/" element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </IconContext.Provider>
    </CharacterContextProvider>
  );
}

export default App;
