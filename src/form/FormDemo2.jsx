import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo2 = () => {
    const {register,handleSubmit,formState:{errors}} = useForm();
    console.log("Errors...",errors)

    const submitHandler = (data) => {
        console.log("Data...",data);
    }

    const validationSchema = {
        name : {
            required:{
                value:true,
                message:"Name is Required"
            }
        },
        age : {
            required:{
                value:true,
                message:"Age is Required"
            },
            max:{
                value:40,
                message:"Age Must be less than 40"
            }
        },
        add : {
            required:{
                value:true,
                message:"Address is Required"
            },
            minLength:{
                value:5,
                message:"length must be greater than 5"
            },
            maxLength:{
                value:10,
                message:"length must be lesser than 10"
            }
        }
    }
  return (
    <div>
        <h1 style={{color:"red"}}>Form Demo 2</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div className='form-group'>
                <label>Name</label>
                <input type='text' {...register("name",validationSchema.name)}/>
                <br/>
                {errors.name && <span style={{color:"red"}}>{errors.name.message}</span>} 
            </div>
            <div className='form-group'>
                <label>Age</label>
                <input type='text' {...register("age",validationSchema.age)}/>
                <br/>
                {errors.age && <span style={{color:"red"}}>{errors.age.message}</span>} 
            </div>
            <div className='form-group'>
                <label>Address</label>
                <input type='text' {...register("add",validationSchema.add)}/>
                <br/>
                {errors.add && <span style={{color:"red"}}>{errors.add.message}</span>}
            </div>
            <button type='submit' className='btn btn-success'>Submit</button>
        </form>
    </div>
  )
}
