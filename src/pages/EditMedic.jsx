import {useState, useEffect} from 'react';
import {Formik, Form, Field} from 'formik';
import {useParams, useNavigate} from 'react-router-dom'

const EditMedic = ({}) => {

    const navigate = useNavigate();

    const {id} = useParams();
    const [medic, setMedic] = useState({})

    useEffect(() => {
        const getClient = async () => {
            const url = `http://localhost:5000/medics/${id}`;
            const response = await fetch(url);
            const result = await response.json();
            setMedic(result.medic[0]);
        }

        getClient();
    }, []);

    const handleSubmit = async (values) => {

        const url = `http://localhost:5000/medics/${id}`;
    
        const response = await fetch(url, {
            method: 'PUT',
            body: JSON.stringify({
                medic_name: values.medic_name,
                last_name: values.last_name,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const result = await response.json();
        console.log(result);
    }

    return (
        <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto">
            <h1 className="font-black text-4xl text-blue-900">Edit Medic</h1>

            <Formik
                initialValues={{
                    medic_name: medic.medic_name,
                    last_name: medic.last_name,
                }}

                enableReinitialize={true}

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

                    <input
                        type="submit"
                        value="Edit"
                        className=" cursor-pointer mt-5  w-full bg-blue-800 p-3 text-white uppercase font-bold text-lg"
                    />
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default EditMedic
