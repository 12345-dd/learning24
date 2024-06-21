import React, { useContext } from 'react'
import { AppContext } from '../Context';

export const Os11 = () => {
    const {companyName,pingGoogle} = useContext(AppContext);
  return (
    <div>
        <button onClick={()=>{pingGoogle()}}>ping....</button>
    </div>
  )
}
