import React from 'react'
import { useNavigate } from 'react-router-dom'

const Row = ({ reported, content_type, link, created_at, id }) => {


    const navigate = useNavigate()

    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-600">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {content_type}
            </th>
            <td className="px-6 py-4 text-red-500">
                {reported}
            </td>
            <td className="px-6 py-4">
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">{link}</a>
            </td>
            <td className="px-6 py-4">
                {created_at}
            </td>
            <td className="px-6 py-4 text-right">
                <button onClick={() => navigate(`/handlereport/${id}`)} className='p-3 text-gray-100 bg-red-500 rounded-lg hover:bg-red-600'>Manage</button>
            </td>
        </tr>
    )
}

export default Row