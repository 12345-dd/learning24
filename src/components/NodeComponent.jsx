import axios from 'axios'
import React, { useEffect } from 'react'

export const NodeComponent = () => {

    const getUser = async() => {
        const res = await axios.get("http://localhost:4000/product/product");
        console.log(res.data);
    }

    useEffect(() => {
    
        getUser();

    },[]);
    
  return (
    <div>Api Calling in Console..</div>
  )
}
