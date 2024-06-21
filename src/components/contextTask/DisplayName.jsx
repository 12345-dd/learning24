import React, { useContext } from 'react'
import { AppContext } from '../../Context'
import { DisplayMessage } from './DisplayMessage';

export const DisplayName = () => {
    const {submittedName} = useContext(AppContext);
  return (
    <div className='text-center'>
        <hr style={{border:"1px solid #000",margin:"50px"}}/>
        <div style={{margin:"10px"}}>

            {<h1 style={{color:"red"}}> Welcome {submittedName} </h1>}
        </div>
        <hr style={{border:"1px solid #000",margin:"50px"}}/>
        <DisplayMessage/>
    </div>
  )
}
