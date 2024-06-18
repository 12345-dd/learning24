import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { CustomLoader } from '../CustomLoader';
import { Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export const ApiDemo1 = () => {
    const [users, setusers] = useState([]);
    const [isLoading, setisLoading] = useState(false);
    const [show, setshow] = useState(false);
    const [user, setuser] = useState({})

    const handleClose = () => {
        setshow(false);
    }

    const handleShow = async(id) => {
        try{
        const res = await axios.get(`https://node5.onrender.com/user/user/${id}`);
        setuser(res.data.data);
        }catch(e){
            console.log(e);
        }

        setshow(true);
    }

    const getApiCalled = async() => {
        setisLoading(true);
        const res = await axios.get("https://node5.onrender.com/user/user");
        console.log(res.data.message); // It is used to print message from the Api
        console.log(res.data.data); // It is used to print data from the api
        setusers(res.data.data);
        setisLoading(false);
    }

    const deleteApi = async(id) => {
        const res = await axios.delete(`https://node5.onrender.com/user/user/${id}`);
        if(res.status === 204){
            getApiCalled();
        } else{
            console.log("Error in Deleting User");
        }
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
                   <th>Action</th>
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
                                <td>
                                    <button onClick={()=>{deleteApi(d._id)}} className='btn btn-primary'>Delete</button>
                                    <button onClick={()=>{handleShow(d._id)}}className='btn btn-secondary'>Detail</button>
                                    <Link to ={`/updateUser/${d._id}`} className="btn btn-warning">UPDATE</Link>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        
       )}
        <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>USER DETAIL</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>Name -- {user.name}</p>
            <p>E-mail -- {user.email}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}