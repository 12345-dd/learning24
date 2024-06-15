import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { CustomLoader } from '../components/CustomLoader';

export const ApiDemo1 = () => {
    const [users, setusers] = useState([]);
    const [isLoading, setisLoading] = useState(false);
    const getApiCalled = async() => {
        setisLoading(true);
        const res = await axios.get("https://node5.onrender.com/user/user");
        console.log(res.data.message); // It is used to print message from the Api
        console.log(res.data.data); // It is used to print data from the api
        setusers(res.data.data);
        setisLoading(false);
    }

    useEffect(() => {
        getApiCalled();
    }, [])

    //CallBack function
    //Dependency Array
    
  return (
    <div>
        <h1 style={{color:"green"}}>Api Demo 1</h1>
        <br/>
        {isLoading ? (
            <div>
                <CustomLoader/>
            </div>
        ):(
        <table className='table'>
            <thead>
                <tr>
                   <th>ID</th> 
                   <th>Name</th>
                   <th>E-mail</th>
                   <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {
                    users?.map((d) => {
                        return(
                            <tr>
                                <td>{d._id}</td>
                                <td>{d.name}</td>
                                <td>{d.email}</td>
                                <td>{d.age}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
       )}
    </div>
  )
}
