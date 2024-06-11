import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo1 = () => {
    const {register,handleSubmit} = useForm();
    const [output, setoutput] = useState({});
    const [color, setcolor] = useState("black");
    const [isFormSubmitted, setisFormSubmitted] = useState(false)

    const submitHandler = (data) => {
        console.log("Data..",data);
        setoutput(data);
        setcolor(data.color);
        setisFormSubmitted(true);
    }
  return (
    <div>
        <h1 style={{color:"red"}}>FormDemo1</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>FirstName</label>
                <input type='text' {...register("fname")}/>
            </div>
            <div>
                <label>LastName</label>
                <input type='text' {...register("lname")}/>
            </div>
            <div>
                <label>Gender</label>
                <br/>Male : <input type='radio' value="male" name='gender' {...register("gender")}/>
                <br/>Female : <input type='radio' value="female" name='gender' {...register("gender")}/>
            </div>
            <div>
                <label>Hobbies</label>
                <br/>Cricket : <input type='checkbox' value="cricket" name='hobbies' {...register("hobbies")}/>
                <br/>Football : <input type='checkbox' value="football" name='hobbies' {...register("hobbies")}/>
                <br/>Table-Tennis : <input type='checkbox' value="tableTennis" name='hobbies' {...register("hobbies")}/>
            </div>
            <div>
                <label>Select Country</label>
                <select {...register("country")}>
                    <option value="select">SELECT</option>
                    <option value="india">INDIA </option>
                    <option value="usa">USA</option>
                    <option value="germany">Germany</option>
                </select>
            </div>
            <div>
                <label>Color</label>
                <input type='color' {...register("color")}/>
            </div>
            <div>
                <input type='submit' value="submit"/>
            </div>
        </form>
        {
            isFormSubmitted && (
                <div style={{color:color}}>
                    <h2>Ouput:</h2>
                    <p>First Name : {output.fname}</p>
                    <p>Last Name : {output.lname}</p>
                    <p>Gender : {output.gender}</p>
                    <p>Country : {output.country}</p>
                </div>
            )
        }
    </div>
  )
}
