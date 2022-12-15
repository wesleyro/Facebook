import { Home } from './pages/Home';
import { GlobalStyle } from './Styles/global';
import {
  BrowserRouter as Router,
  Routes,
  Route
}from"react-router-dom";

import {Esqueceu} from "./pages/Esqueceu";

function App() {
  return (<>
  <Router>
  <GlobalStyle/>
    <Routes>
      <Route path="/"element={<Home/>}/>
      <Route path="/Esqueceu"element={<Esqueceu/>}/>
    </Routes>
  </Router>


    </>);
}

export default App;
