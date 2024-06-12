import React, { useState } from 'react';
import '../assets/css/counter.css'

export const CounterApp = () => {
    const [count, setcount] = useState(0);
    const increment = () => {
        setcount(count+1);
    }

    const decrement = () => {
        setcount(count-1);
    }

    const reset = () => {
        setcount(0);
    }

    const boxStyle =  {
        color : count > 0 ? "green" : "red"
    }

  return (
    <div className='back'>
        <div className='container'>
            <h1 className='heading'>Counter App</h1>
            <div className='sub-container'>
                <h3 className='text-center' style={boxStyle}>{count}</h3>
            </div>
            <div className='button-container'>
                <button className='btn btn-success' onClick={()=>{increment()}}>Increment</button>
                <button className='btn btn-primary' onClick={()=>{reset()}}>Reset</button>
                <button className='btn btn-danger' onClick={()=>{decrement()}}>Decrement</button>
            </div>
        </div>
    </div>
  )
}
