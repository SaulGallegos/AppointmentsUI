import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'

const DetailMedic = () => {

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
    }, [])

    return (
        <div className="bg-white py-4 px-3 shadow rounded-lg">
            <h1 className="font-black text-4xl text-blue-900 pb-2">Detail</h1>

            <p className="text-2xl text-gray-600 mt-4">
                <span className="text-gray-800 uppercase font-bold">No. Medic: </span>
                {medic.no_medic}
            </p>
            <p className="text-2xl text-gray-600 mt-4">
                <span className="text-gray-800 uppercase font-bold">Name: </span>
                {medic.medic_name} 
            </p>
            <p className="text-2xl text-gray-600 mt-4">
                <span className="text-gray-800 uppercase font-bold">Name: </span>
                {medic.medic_name} 
            </p>
            <p className="text-2xl text-gray-600 mt-4">
                <span className="text-gray-800 uppercase font-bold">Last name: </span>
                {medic.last_name}
            </p>
            <p className="text-2xl text-gray-600 mt-4">
                <span className="text-gray-800 uppercase font-bold">Email: </span>
                {medic.email}
            </p>
            <p className="text-2xl text-gray-600 mt-4">
                <span className="text-gray-800 uppercase font-bold">Gender: </span>
                {medic.gender}
            </p>
            <p className="text-2xl text-gray-600 mt-4">
                <span className="text-gray-800 uppercase font-bold">Age: </span>
                {medic.age}
            </p>
            <p className="text-2xl text-gray-600 mt-4">
                <span className="text-gray-800 uppercase font-bold">Address: </span>
                {medic.address}
            </p>
            <p className="text-2xl text-gray-600 mt-4">
                <span className="text-gray-800 uppercase font-bold">Phone: </span>
                {medic.phone}
            </p>
        </div>
    )
}

export default DetailMedic
