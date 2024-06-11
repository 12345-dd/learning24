import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo1 = () => {
    const {register,handleSubmit} = useForm();

    const submitHandler = (data) => {
        console.log("Data..",data);
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
                <input type='submit' value="submit"/>
            </div>
        </form>
    </div>
  )
}
