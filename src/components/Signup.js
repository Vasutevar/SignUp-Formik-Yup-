import React from 'react';
import { Formik, Form } from 'formik';
import TextField from './TextField';
import * as Yup from 'yup';

const Signup = () => {
    const validate = Yup.object({
        firstName: Yup.string()
            .max(10, "Must be 10 characters or less")
            .required("First name is required"),
        lastName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Last name is required"),
        Birthdate: Yup.date()
            .required("Birth Date is required"),
        email: Yup.string()
            .email("Email is invalid")
            .required("Email is required"),
        password: Yup.string()
            .min(8, " Password must be atleast 8 characters or less")
            .required("Password is required"),
        confirmpassword: Yup.string()
            .oneOf([Yup.ref('password'), null ] , 'Password must match')
            .required("Confirm password is required"),
    })
    return (
        <Formik
            initialValues={{
                firstName: '',
                lastname: '',
                BirthDate: '',
                Email: ' ',
                password: '',
                confirmpassword: '',
            }}
            validationSchema={validate}
            onSubmit={values=>
            {
               console.log(values)
            }}
        >

            {formik => (
                <div>
                    <h1 className="my-3 font-weight-bold-display-4 " style={{ color: "#0039e6" }}> Sign Up</h1>
                  
                    <Form>
                        <TextField label="First Name" name="firstName" type="text" />
                        <TextField label="Last Name" name="lastName" type="text" />
                        <TextField label="Birth-Date" name="birthdate" type="date" />
                        <TextField label="Email" name="email" type="email" />
                        <TextField label="Password" name="password" type="password" />
                        <TextField label="Confirm Password" name="confirmpassword" type="password" />
                        <button className="btn btn-primary mt-3" type="submit" >Submit</button>
                        <button className="btn btn-danger mt-3 ml-3" type="reset">Reset</button>

                    </Form>
                </div>
            )}
        </Formik>
    )
}

export default Signup;