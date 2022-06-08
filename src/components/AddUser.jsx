import React, { useState } from 'react'

import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { addUser } from "../reducer";


const AddUser = () => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const navigate = useNavigate()

    
  const dispatch = useDispatch()
    
  const _handleAddUser = () => {
    setName('')
    setDescription('')
    dispatch(addUser({
      id: uuidv4(),
      name: name,
      description: description
    }))
    navigate('/')
  }

  const _handleChangeName = (e) => {
    setName(e.target.value)
  }

  const _handleChangeDescription = (e) => {
    setDescription(e.target.value)
  }

  const _handleCancel = () => {
    setName('')
    setDescription('')
    navigate('/')
  }

  return (
    <div className="card p-3" style={{ width: '18rem' }}>
    <h1>Servicio</h1>
    <div className="mb-3">
      <label htmlFor="name" className="form-label">Nombre</label>
      <input type="text" className="form-control" id="name" placeholder="name" value={name} onChange={_handleChangeName} />
    </div>
    <div className="mb-3">
      <label htmlFor="description" className="form-label">Descripcion</label>
      <input type="text" className="form-control" id="description" placeholder="description" value={description} onChange={_handleChangeDescription} />
    </div>
    <div className="card-footer p-3 bg-secondary bg-opacity-25">
      <button className="btn btn-outline-success" onClick={_handleAddUser}>Grabar</button>
      <button type="button" className="btn btn-outline-danger" onClick={_handleCancel}>Cancelar</button>
    </div>
  </div>
  )
}

export default AddUser