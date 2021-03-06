import {useNavigate} from 'react-router-dom'

const TableMedicItem = ({medic, handleDelete}) => {
    const navigate = useNavigate();
    const {medic_name, last_name, email, phone} = medic;
    return (
        <tr className="border-b hover:bg-gray-100">
            <td className="p-3">{medic_name}</td>
            <td className="p-3">{last_name}</td>
            <td className="p-3">
                <p><span className="text-gray-800 uppercase font-bold">Email: </span>{email}</p>
                <p><span className="text-gray-800 uppercase font-bold">Phone: </span>{phone}</p>
            </td>
            <td className="p-3">
                <button
                    type="button"
                    className="bg-yellow-500 hover:bg-yellow-600 block w-full text-white p-2 uppercase font-bold text-xs"
                    onClick={() => navigate(`/medics/${medic.id_medic}`)}
                >Detail</button>

                <button
                    type="button"
                    className="bg-blue-600 hover:bg-blue-700 block w-full text-white p-2 uppercase font-bold text-xs mt-3"
                    onClick={() => navigate(`/medics/edit/${medic.id_medic}`)}
                >Edit</button>

                <button
                    type="button"
                    className="bg-red-600 hover:bg-red-700 block w-full text-white p-2 uppercase font-bold text-xs mt-2"
                    onClick={() => handleDelete(medic.id_medic)}
                >Delete</button>
            </td>
        </tr>
    )
}

export default TableMedicItem
