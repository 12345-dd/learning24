import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deposit, withdraw } from '../redux/BankSlice'

export const BankComponent = () => {
  const dispatch = useDispatch()
  const [depamount, setdepamount] = useState(0)
  const withdrawHandler = ()=>{
    dispatch(withdraw(parseInt(depamount)))
  }
  const depositHandler = ()=>{
    console.log("deposit",depamount)
    dispatch(deposit(parseInt(depamount)))
  }
  return (
    <div>
        <h1>Bank Component</h1>
        <div>
            <h1>Deposit</h1>
            <div>
            <label>Amount:</label>
            <input type='text' style={{margin:"10px"}} onChange={(e)=>{setdepamount(e.target.value)}}></input>
            <button className='btn btn-primary' onClick={()=>{depositHandler()}}>Deposit</button>
            </div>
        </div>
        <div>
            <h1>Withdraw</h1>
            <div>
            <label>Amount:</label>
            <input type='text' style={{margin:"10px"}} onChange={(e)=>{setdepamount(e.target.value)}}></input>
            <button className='btn btn-primary' onClick={()=>{withdrawHandler()}}>Withdraw</button>
            </div>
        </div>
    </div>
  )
}
