import React from 'react'

export const WhiteLayout = ({ children }) => {
  return (
    <div style = {{
        backgroundColor: 'gray',
        paddin:'5px',
        borderRadius: '10px',
    }}>

        <h3>White-Layout</h3>
        <div>
          { children }
        </div>
    </div>
  )
}
