
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbars from './components/Navbar';
import Home from './components/Home';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbars/>
          <Routes>
            <Route  path="/" exact element={<Home/>}/>
          </Routes> 
    </BrowserRouter>
    </div>
  );
}

export default App;
