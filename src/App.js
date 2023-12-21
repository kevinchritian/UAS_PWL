import Navigasi from "./components/Navigation";
import Home from "./components/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Filtered from "./components/Filter";
import Menufavorite from "./components/Favorite";
import Films from "./components/Film";
import Deskripsifilm from "./components/Deskripsi";


function App() {
  return (
    <Router>
      <div>
        <Navigasi></Navigasi>
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/favorite" Component={Menufavorite}></Route>
          <Route path="/filter" Component={Filtered}></Route>
          <Route path="/films" Component={Films}></Route>
          <Route path='/deskripsi' Component={Deskripsifilm}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
