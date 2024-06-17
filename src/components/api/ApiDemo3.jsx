import axios from 'axios'
import React from 'react'

export const ApiDemo3 = () => {

    const postData = async () => {

        const objToSubmit ={
            name:"ash",
            email:"ash@gmail.com",
            status:"active",
            gender:"male"
        }

        try{
        const res = await axios.post("https://gorest.co.in/public/v2/users",objToSubmit,{
            headers:{
                "Authorization":"Bearer 38980a262bce4a7639f24ddab09c3ace2f6772563690f4342038b3571aed5870"
            }
        })
        console.log(res.data)
        }catch(e){
            console.log("error...",e)
        }

    }
  return (
    <div>
        ApiDemo3
        <button onClick={()=>{postData()}}>Post Data</button>
    </div>
  )
}