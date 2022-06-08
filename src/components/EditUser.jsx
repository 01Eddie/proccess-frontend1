import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import { editUser } from '../reducer'
import { getUsers } from '../selectors'

const EditUser = () => {
  const params = useParams()
  const dispatch = useDispatch()
  const users = useSelector(getUsers)
  const exintingUsers = users.filter(user => user.id === params.id)
  const navigate = useNavigate()
  const {name, description} = exintingUsers[0]
  const [values, setValues] = useState({name, description})

  const _handleEditUser = () => {
    setValues({name:'',description:'' })
    dispatch(editUser({
      id: params.id,
      name: values.name,
      description: values.description
    }));

    navigate('/');
  }

  const _handleChangeName = (e) => setValues({ ...values, name: e.target.value })

  const _handleChangeDescription = (e) => setValues({ ...values, description: e.target.value })

  const _handleCancel = () => {
    setValues({name: '', description: ''})
    navigate('/')
  }

  return(
    <div className="card p-3" style={{ width: '18rem' }}>
    <div className="mb-3">
        <label htmlFor="name" className="form-label">Nombre</label>
        <input type="text" className="form-control" id="name" placeholder="name" value={values.name} onChange={_handleChangeName} />
    </div>
    <div className="mb-3">
        <label htmlFor="description" className="form-label">Descripcion</label>
        <input type="text" className="form-control" id="description" placeholder="description" value={values.description} onChange={_handleChangeDescription} />
    </div>
    <div className="card-footer p-3 bg-secondary bg-opacity-25">
      <button className="btn btn-outline-success" onClick={_handleEditUser}>Grabar</button>
      <button type="button" className="btn btn-outline-danger" onClick={_handleCancel}>Cancelar</button>
    </div>
  </div>
  )
}

export default EditUser