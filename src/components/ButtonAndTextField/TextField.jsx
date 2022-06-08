import React from 'react'

const TextField = ({label, inputProps, onChange, value}) => (
  <div style={{display: 'flex', 
  flexDirection:'column',
  width:'100%',
  alignItems: 'center',
  margin: '42px 0px 0px'}}>
    <div style={{
       width: 500,
       maxWidth: '100%',
    }}>
      <input type="text" name={label} id='fullwidth' {...inputProps} onChange={onChange} value={value} />
    </div>
  </div>
)

export default TextField