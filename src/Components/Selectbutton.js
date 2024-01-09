import React from 'react'

function Selectbutton({ children, selected, onClick }) {
  return (
    <div>


     <span  onClick={onClick} style={{ backgroundColor: selected ? "gold" : "",
      color: selected ? "black" : "",}}  className={'selectbutton'}>
      {children}
    </span>
      
    </div>
  )
}

export default Selectbutton
