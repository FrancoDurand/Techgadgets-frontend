import './App.css'
import { Productos } from './components/features/productos';
import { NavbarDemo } from './components/features/navbar';
import { Route, Routes } from 'react-router-dom';
import { ProductosCategoria } from './components/features/productos-categoria';
import Integrantes from './components/features/integrantes';
import { Hero } from './components/features/hero';
import { ProductosId } from './components/features/productos-id';
import { FormRegistro } from './components/features/form-registro';
import { FormLogin } from './components/features/form-login';
import { CarritoDetalleInfo } from './components/features/carrito-detalle';
import { Repositorio } from './components/features/repo-card';

function App() {
  return (
    <>
      <NavbarDemo />
      <Routes>
        <Route path="/" element={<><Hero /><Productos /></>} />
        <Route path="/categoria/:categoria" element={<ProductosCategoria />} />
        <Route path="/producto/:id" element={<ProductosId />} />
        <Route path="/iniciar-sesion" element={<FormLogin />} />
        <Route path="/registrar" element={<FormRegistro />} />
        <Route path="/integrantes" element={<Integrantes />} />
        <Route path="/repositorio" element={<Repositorio />} />
        <Route path="/carrito" element={<CarritoDetalleInfo />} />
      </Routes>
    </>
  )
}

export default App