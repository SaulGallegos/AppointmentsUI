
const TablePatientItem = ({patient, handleDelete}) => {
    const {patient_name, last_name, email, phone} = patient;
    return (
        <tr className="border-b hover:bg-gray-100">
            <td className="p-3">{patient_name}</td>
            <td className="p-3">{last_name}</td>
            <td className="p-3">
                <p><span className="text-gray-800 uppercase font-bold">Email: </span>{email}</p>
                <p><span className="text-gray-800 uppercase font-bold">Phone: </span>{phone}</p>
            </td>
            <td className="p-3">
                <button
                    type="button"
                    className="bg-red-600 hover:bg-red-700 block w-full text-white p-2 uppercase font-bold text-xs mt-2"
                    onClick={() => handleDelete(patient.id_patient)}
                >Delete</button>
            </td>
        </tr>
    )
}

export default TablePatientItem
