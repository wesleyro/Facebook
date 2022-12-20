import { Home } from './pages/Home';
import { GlobalStyle } from './Styles/global';
import {
  BrowserRouter as Router,
  Routes,
  Route
}from"react-router-dom";

import {Esqueceu} from "./pages/Esqueceu";
import {CriarPagina} from "./pages/CriarPagina"

function App() {
  return (<>
  <Router>
  <GlobalStyle/>
    <Routes>
      <Route path="/"element={<Home/>}/>
      <Route path="/Esqueceu"element={<Esqueceu/>}/>

      <Route path="/Criar-Pagina"element={<CriarPagina/>}/>
    </Routes>
  </Router>


    </>);
}

export default App;
