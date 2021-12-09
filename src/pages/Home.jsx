import {useEffect, useState} from 'react'
import TableItem from '../components/TableMedicItem';
import TablePatientItem from '../components/TablePatientItem';

const Home = () => {

    const [patients, setPatients] = useState([]);
    const [totalMedics, setTotalMedics] = useState(0);
    const [totalApps, setTotalApps] = useState(0);
    const [totalPatients, setTotalPatients] = useState(0);

    useEffect(() => {
        // Get Total Medics
        const getMedics = async () => {
            const url = 'http://localhost:5000/medics/all';

            const response = await fetch(url);
            const result = await response.json();
            setTotalMedics(result.total)
        }
        getMedics();

        // Get Total Patients
        const getPatients = async () => {
            const url = 'http://localhost:5000/patients/all';

            const response = await fetch(url);
            const result = await response.json();
            setPatients(result.patients);
            setTotalPatients(result.total);
        }
        getPatients()
        
        
        // Get Total Appointments
        const getAppointments = async () => {
            const url = 'http://localhost:5000/appointments/all';

            const response = await fetch(url);
            const result = await response.json();
            setTotalApps(result.total);
        }
        getAppointments();
    }, []); 

    const handleDelete = async (id_patient) => {
        const confirmDelete = confirm('U sure?');

        if(confirmDelete){
            const url = `http://localhost:5000/patients/${id_patient}`;

            const response = await fetch(url, {
                method: 'DELETE'
            });
            await response.json();

            const newPatients = patients.filter(patient => patient.id_patient !== id_patient);
            setPatients(newPatients);
            setTotalPatients(totalPatients-1);
        }
    }    

    return (
        <>
            <div className="flex space-x-4">
                <div className="flex items-center justify-around p-6 bg-white w-64 rounded-xl space-x-2 mt-10 shadow-lg">
                    <div>
                        <span className="text-xl font-semibold text-gray-700">Medics</span>
                        <h1 className="text-2xl font-bold">{totalMedics}</h1>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                        </svg>
                    </div>
                </div>

                <div className="flex items-center justify-around p-6 bg-white w-64 rounded-xl space-x-2 mt-10 shadow-lg">
                    <div>
                        <span className="text-xl font-semibold text-gray-700">Appointments</span>
                        <h1 className="text-2xl font-bold">{totalApps}</h1>
                    </div>
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                    </svg>
                    </div>
                </div>   

                <div className="flex items-center justify-around p-6 bg-white w-64 rounded-xl space-x-2 mt-10 shadow-lg">
                    <div>
                        <span className="text-xl font-semibold text-gray-700">Patients</span>
                        <h1 className="text-2xl font-bold">{totalPatients}</h1>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                        </svg>
                    </div>
                </div>  
            </div>

            <h1 className="font-black text-4xl text-blue-900 p-5">Latest Patients</h1>

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
                    {patients.map(patient => (
                        <TablePatientItem
                            key={patient.id_patient}
                            patient={patient}
                            handleDelete={handleDelete}
                        />
                    ))}
                </tbody>

            </table>
        </>
    );
}

export default Home;
