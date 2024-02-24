
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import { Home } from './components/Home';
import { Shooy } from './components/Shooy';
import { Helio } from './components/Helio';
import { CreateButton } from './components/CreateButton';
import { CreateEntry } from './components/CreateEntry';


function App() {
  
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Shooy" element={<Shooy />}/>
        <Route path="/Helio" element={<Helio />}/>
        <Route path="/Create" element={<CreateEntry />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
