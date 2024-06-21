import React, { useState } from 'react'
import { Android } from './Android'
import { AppContext } from '../Context'

export const Google = () => {
    const [companyName, setcompanyName] = useState("Facebook");
    const pingGoogle = () => {
        alert("You submitted");
    }
  return (
    <div>
        <h1 style={{color:"green"}}>Google</h1>
        <AppContext.Provider value={{companyName,pingGoogle}}>
            <Android/>
        </AppContext.Provider>
    </div>
  )
}
