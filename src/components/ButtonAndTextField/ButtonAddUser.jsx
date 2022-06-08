import React from 'react'

const ButtonAddUser = ({onClick, children}) => (
    <div>
        <button onClick={onClick}>{children}</button>
    </div>
)

export default ButtonAddUser