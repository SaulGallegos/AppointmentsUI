import React from 'react'
import {Formik, Form, Field} from 'formik';
import {useNavigate} from 'react-router-dom';

const CreateMedicForm = () => {

    const navigate = useNavigate();
    
    const handleSubmit = async (values) => {

        try{
            const url = 'http://localhost:5000/medics';
    
            const response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify({
                    medic_name: values.medic_name,
                    last_name: values.last_name,
                    gender: values.gender,
                    age: values.age,
                    email: values.email,
                    address: values.address,
                    phone: values.phone
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
    
            const result = await response.json();
            console.log(result);
        }catch(err){
            console.log(err);
        }
    }

    return (
        <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto">
            <h1 className="text-gray-600 font-bold text-xl uppercase text-center">Complete the next fields</h1>

            <Formik 
                initialValues={{
                    medic_name: '',
                    last_name: '',
                    gender: '',
                    age: 0,
                    email: '',
                    address: '',
                    phone: ''
                }}

                onSubmit={async (values, {resetForm}) => {
                    await handleSubmit(values);
                    resetForm();
                    navigate('/');
                }}
            >
                {() => (
                <Form className="mt-10">
                    <div className="mb-4">
                        <label
                            className="text-gray-800"
                            htmlFor="name"
                        >Name:</label>
                        <Field
                            id="name"
                            type="text"
                            className="mt-2 block w-full p-3 bg-gray-50"
                            placeholder="Your name"
                            name="medic_name"
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            className="text-gray-800"
                            htmlFor="last_name"
                        >Last name:</label>
                        <Field
                            id="last_name"
                            type="text"
                            className="mt-2 block w-full p-3 bg-gray-50"
                            placeholder="Your last name"
                            name="last_name"
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            className="text-gray-800"
                            htmlFor="gender"
                        >Gender:</label>
                        <Field
                            id="gender"
                            type="text"
                            className="mt-2 block w-full p-3 bg-gray-50"
                            placeholder="M/F"
                            name="gender"
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            className="text-gray-800"
                            htmlFor="age"
                        >Age:</label>
                        <Field
                            id="age"
                            type="number"
                            className="mt-2 block w-full p-3 bg-gray-50"
                            placeholder="Your age"
                            name="age"
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            className="text-gray-800"
                            htmlFor="email"
                        >Email:</label>
                        <Field
                            id="email"
                            type="text"
                            className="mt-2 block w-full p-3 bg-gray-50"
                            placeholder="name@email.com"
                            name="email"
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            className="text-gray-800"
                            htmlFor="address"
                        >Address:</label>
                        <Field
                            id="address"
                            type="text"
                            className="mt-2 block w-full p-3 bg-gray-50"
                            placeholder="Muholland Drive #123"
                            name="address"
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            className="text-gray-800"
                            htmlFor="phone"
                        >Phone:</label>
                        <Field
                            id="phone"
                            type="tel"
                            className="mt-2 block w-full p-3 bg-gray-50"
                            placeholder="449 2358611"
                            name="phone"
                        />
                    </div>

                    <input
                        type="submit"
                        value="Add"
                        className=" cursor-pointer mt-5  w-full bg-blue-800 p-3 text-white uppercase font-bold text-lg"
                    />
                </Form>
                )}
            </Formik>
        </div>
    )
}

export default CreateMedicForm
