import React, { useState } from 'react';
import '../assets/css/form.css';
import { useForm } from 'react-hook-form';

export const FormTask2 = () => {
    const { register, handleSubmit } = useForm();
    const [submittedData, setsubmittedData] = useState({})
    const [isFormSubmitted, setisFormSubmitted] = useState(false)

    const submitHandler = (data) => {
        setsubmittedData(data);
        setisFormSubmitted(true);
    }

    return (
        <div>
            <h1 style={{ color: "greenyellow" }}>University Registration Form</h1>
            <br />
            <form onSubmit={handleSubmit(submitHandler)}>
                <div>
                    <div className="form-group">
                        <input type="text" placeholder="Full Name" {...register("fullName")}  />
                    </div>
                    <div className="form-group">
                        <input type="email" placeholder="Email" {...register("email")}  />
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Mobile Number" {...register("mobile")}  />
                    </div>
                    <div className='form-group'>
                        <input type='text' placeholder='Age' {...register("age")}/>
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Address" {...register("address")} />
                    </div>
                    <div className="form-group">
                        <select {...register("course")}>
                            <option value="">Select Course</option>
                            <option value="computerScience">Computer Science</option>
                            <option value="business">Business</option>
                            <option value="engineering">Engineering</option>
                            <option value="arts">Arts</option>
                            <option value="science">Science</option>
                        </select>
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