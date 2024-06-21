import React, { useContext } from 'react'
import { Os11 } from './Os11'
import { AppContext } from '../Context';

export const Android = () => {
    const {companyName} = useContext(AppContext);
  return (
    <div>
        <h1 style={{color:"red"}}>Android -- {companyName}</h1>
        <Os11></Os11>
    </div>
  )
}
