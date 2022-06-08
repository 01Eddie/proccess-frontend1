import React from 'react'

import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { deleteUser } from "../reducer"
import { getUsers } from "../selectors"
import ButtonAddUser from "./ButtonAndTextField/ButtonAddUser"
import EmptyUser from "./EmptyUser"

const ShowUser = () => {
  const dispatch = useDispatch()
  const users = useSelector(getUsers)
  const _handleRemoveUser = (id) =>{
    dispatch(deleteUser({
      id: id
    })
    )
  }

  const renderCard = () => users.map(user =>
    <div className='card' key={user.id}>
      <div className="card-body">
        <h5 className='card-title'>{user.name}</h5>
        <p className='card-text'>{user.description}</p>
      </div>
      <div className="card-footer p-3">
        <Link to={`/edit-user/${user.id}`} className='btn btn-link'>Editar</Link>
        <button className='btn btn-link' onClick={() => _handleRemoveUser(user.id)}>Eliminar</button>
      </div>
    </div>
  )

  return (
    <>
      <div style={{display:'flex',
          flexDirection: 'row',
          justifyContent:'center',
          height: 100}}>
        <Link to={'/add-user'}>
          <ButtonAddUser>Add User</ButtonAddUser>
        </Link>
      </div>
      {users.length ? 
          <div 
            style={{
              marginLeft: 'auto',
              marginRight: 'auto',
              maxWidth: '1138px',
              padding: '1em 1em',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-evenly'
            }}>{renderCard()}</div> :
          <EmptyUser/>
          }
    </>
  )
}

export default ShowUser