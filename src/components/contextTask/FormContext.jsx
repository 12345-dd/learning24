import React, { useState } from 'react'
import { AppContext } from '../../Context';
import { DisplayName } from './DisplayName';


export const FormContext = () => {
    const [name, setname] = useState("");
    const [message,setmessage] = useState("");
    const [submittedName, setSubmittedName] = useState("");
    const [submittedMessage, setSubmittedMessage] = useState("");
    const displayName = () => {
        setSubmittedName(name);
        setSubmittedMessage(message);
    }
  return (
    <div>
        <h1 style={{color:"green"}}>Form</h1>
        <div className='text-field'>
            <input type='text' placeholder='Enter Name' onChange={(event)=>{setname(event.target.value)}}/>
        </div>
        <div className='text-field text-center'>
            <textarea type='text' placeholder='Enter Message' rows={3} cols={53} style={{padding:"10px",borderRadius:"8px"}} onChange={(event)=>{setmessage(event.target.value)}}/>
        </div>
        <button className='btn btn-success' onClick={()=>{displayName()}}>Submit</button>
        <AppContext.Provider value={{submittedName,submittedMessage}}>
            <DisplayName/>
        </AppContext.Provider>
    </div>
  )
}
