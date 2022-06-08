import React from 'react'

import { Route, Routes } from "react-router-dom";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import ShowUser from "./components/ShowUser";

const App = () => {
  return (
    <>
    <h1 className='text-center' style={{ marginTop: 20 }}>Servicios</h1>
    <div className="d-flex flex-row mb-3">
      <div className="p-2">Todos</div>
      <div className="p-2">Autos</div>
      <div className="p-2">Salud</div>
      <div className="p-2">Hogar</div>
    </div>
  
    <Routes>
      <Route path="/" element={ <ShowUser />} />
      <Route path="/add-user" element={ <AddUser />} />
      <Route path="/edit-user/:id" element={ <EditUser />} />
    </Routes>
  </>
  );
}

export default App;
