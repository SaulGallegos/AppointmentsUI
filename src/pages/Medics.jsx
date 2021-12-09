import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import TableMedicItem from '../components/TableMedicItem';

const Medics = () => {

    const [medics, setMedics] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const getMedics = async () => {
            const url = 'http://localhost:5000/medics/all';

            const response = await fetch(url);
            const result = await response.json();
            setMedics(result.medics);
            setTotal(result.total)
        }

        getMedics();
    }, []); 

    const handleDelete = async (id_medic) => {
        const confirmDelete = confirm('U sure?');

        if(confirmDelete){
            const url = `http://localhost:5000/medics/${id_medic}`;

            const response = await fetch(url, {
                method: 'DELETE'
            });
            await response.json();

            const newMedics = medics.filter(medic => medic.id_medic !== id_medic);
            setMedics(newMedics);
            setTotal(total-1);
        }
    }

    return (
        <>
            <h1 className="font-black text-4xl text-blue-900">Medics</h1>
            <div className="flex justify-between">
                <h2 className="font-black text-2xl text-gray-600">Total Medics: {total}</h2>
                
                <Link
                    to="/medics/create"
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-10 py-3 uppercase font-bold text-xs"
                >Create New Medic</Link>
            </div>

            <table className="w-full mt-5 table-auto shadow bg-white">
                <thead className="bg-blue-800 text-white">
                    <tr>
                        <th className="p-2">Name</th>
                        <th className="p-2">Last name</th>
                        <th className="p-2">Contact</th>
                        <th className="p-2"></th>
                    </tr>
                </thead>

                <tbody>
                    {medics.map(medic => (
                        <TableMedicItem
                            key={medic.id_medic}
                            medic={medic}
                            handleDelete={handleDelete}
                        />
                    ))}
                </tbody>

            </table>
        </>
    )
}

export default Medics
