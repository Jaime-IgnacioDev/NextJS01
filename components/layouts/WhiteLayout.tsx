import React, { PropsWithChildren } from 'react'
import { FC } from 'react'

export const WhiteLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div style = {{
        backgroundColor: 'gray',
        padding:'5px',
        borderRadius: '10px',
    }}>

        <h3>White-Layout</h3>
        <div>
            { children }
        </div>
    </div>
  )
}
