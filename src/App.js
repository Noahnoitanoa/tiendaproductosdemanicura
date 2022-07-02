import React from 'react';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import NavBar from './components/Navbar/Navbar.jsx';
import ItemListContainer from './container/itemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import './App.css';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/productos/:id' element={<ItemDetailContainer />} />
        <Route path='/Ecommerce' element={<h1 style={{ textAlign: "center" }}> Este seria el inicio </h1>} />
        <Route path='/productos' element={<ItemListContainer mensaje={"Catalogo de Productos"} />} />
      </Routes>
    </Router>

  );
}

export default App;
