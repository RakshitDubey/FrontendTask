import React from 'react'

function Button({text,onClick,color}) {
    const buttonStyle = {
        backgroundColor: color || '#007bff', // default color is blue
        color: '#fff',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
        border: 'none',
        outline: 'none',
      };

  return (
    <div>
        <button onClick={onClick} style={buttonStyle}>
            {text}
        </button>
    </div>
  )
}

export default Button