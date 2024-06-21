import React, { useContext } from 'react'
import { AppContext } from '../../Context'

export const DisplayMessage = () => {
    const {submittedMessage} = useContext(AppContext);
  return (
    <div style={{margin:"10px"}}>

        {<h1 style={{color:"greenYellow"}}> {submittedMessage} </h1>}
    </div>
  )
}
