import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css'

import App from './App.tsx'
import Produtos from './pages/Produtos.tsx';
import Home from './pages/Home.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path='/' element={<Home />}/>
          <Route path='produtos' element={<Produtos />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
