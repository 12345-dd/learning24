import React, { useState } from 'react';
import '../assets/css/form.css';
import { useForm } from 'react-hook-form';

export const FormTask2 = () => {
    const { register, handleSubmit , formState:{errors} } = useForm();
    const [submittedData, setsubmittedData] = useState({})
    const [isFormSubmitted, setisFormSubmitted] = useState(false)

    const submitHandler = (data) => {
        setsubmittedData(data);
        setisFormSubmitted(true);
    }

    const validationSchema = {
        fullName : {
            required:{
                value:true,
                message:"Name must be Required"
            }
        },
        email : {
            required:{
                value:true,
                message:"E-mail must be Required"
            },
            pattern:{
                value:/^[a-zA-Z0-9._%+-]+@gmail\.com$/,
                message:"E-mail must End with gmail.com"
            }
        },
        mobile : {
            required:{
                value:true,
                message:"Mobile Number must be Required"
            },
            pattern:{
                value:/^[6-9]{1}[0-9]{9}$/,
                message:"Number must be start between 6 to 9 and not exceeds more than 10"
            }
        },
        address:{
            required:{
                value:true,
                message:"Address Must be Required"
            }
        },
        age:{
            required:{
                value:true,
                message:"Age must be Required"
            },
            min:{
                value:18,
                message:"Age Must be greater than 18"
            },
            max:{
                value:30,
                message:"Age Must be lesser than 30"
            }
        },
        course:{
            required:{
                value:true,
                message:"Please Select the Course"
            }
        }
    }

    return (
        <div>
            <h1 style={{ color: "greenyellow" }}>University Registration Form</h1>
            <br />
            <form onSubmit={handleSubmit(submitHandler)}>
                <div>
                    <div className="form-group">
                        <input type="text" placeholder="Full Name" {...register("fullName",validationSchema.fullName)}/><br/>
                        {
                            errors.fullName && <span style={{color:"red"}}>{errors.fullName.message}</span>
                        }
                    </div>
                    <div className="form-group">
                        <input type="email" placeholder="Email" {...register("email",validationSchema.email)}/><br/>
                        {
                            errors.email && <span style={{color:"red"}}>{errors.email.message}</span>
                        }
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Mobile Number" {...register("mobile",validationSchema.mobile)}/><br/>
                        {
                            errors.mobile && <span style={{color:"red"}}>{errors.mobile.message}</span>
                        }
                    </div>
                    <div className='form-group'>
                        <input type='text' placeholder='Age' {...register("age",validationSchema.age)}/><br/>
                        {
                            errors.age && <span style={{color:"red"}}>{errors.age.message}</span>
                        }
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Address" {...register("address",validationSchema.address)}/><br/>
                        {
                            errors.address && <span style={{color:"red"}}>{errors.address.message}</span>
                        }
                    </div>
                    <div className="form-group">
                        <select {...register("course",validationSchema.course)}>
                            <option value="">Select Course</option>
                            <option value="computerScience">Computer Science</option>
                            <option value="business">Business</option>
                            <option value="engineering">Engineering</option>
                            <option value="arts">Arts</option>
                            <option value="science">Science</option>
                        </select> <br/>
                        {
                            errors.course && <span style={{color:"red"}}>{errors.course.message}</span>
                        }
                    </div>
                    <button type="submit" className='btn btn-success'>Submit</button>
                </div>
            </form>
            {isFormSubmitted && (
                <div className="submitted-data">
                    <h2>Submitted Data:</h2>
                    <p>Full Name: {submittedData.fullName}</p>
                    <p>Age: {submittedData.age}</p>
                    <p>Email: {submittedData.email}</p>
                    <p>Mobile Number: {submittedData.mobile}</p>
                    <p>Address: {submittedData.address}</p>
                    <p>Course: {submittedData.course}</p>
                </div>
            )}
        </div>
    );
}