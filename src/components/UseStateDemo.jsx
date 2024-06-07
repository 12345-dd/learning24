import React, { useState } from 'react'

export const UseStateDemo = () => {
    const [count, setcount] = useState(0);
    const increment = () => {
        setcount(count+1);
    }
  return (
    <div>
        <h1>Use State Demo</h1>
        <h2>Count : {count}</h2>
        <button onClick={()=>{increment()}}>Increment</button>

    </div>
  )
}
