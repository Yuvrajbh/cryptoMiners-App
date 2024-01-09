import './App.css';
import Header from './Components/Header';
import Homepge from './Pages/Homepge';
import Coinpg from './Pages/Coinpg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './Components/Footer';




function App() {
  return (
    <BrowserRouter>

  <div className="App">
    <Header/>
    <Routes>
      <Route exact path='/' element={<Homepge/>}></Route>
      <Route exact path='/coins/:id' element={<Coinpg/>}></Route>
      
      

    </Routes>
 
    </div>
    
    </BrowserRouter>
  );
}

export default App;
