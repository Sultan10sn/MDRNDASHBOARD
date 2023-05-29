import React from 'react'
import { useNavigate } from 'react-router-dom'

completed: true

content: "I Hate all the French"

content_type: "project"

created_at: "2023-05-18T10:28:31.248200"

id: 7

link: "https://mdrn-dev-site-sepia.vercel.app/project/6/"

moderator: 94

post_id: 6

reported: 39

reporter: null

response: ""

severity: 4

status: "concluded"

type: "HateSpeech"

const Row = ({ data, children }) => {


    const isOldReportPage = children

    const navigate = useNavigate()

    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-600">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {data.type}
            </th>
            <td className="px-6 py-4 text-red-500">
                {data.severity}
            </td>
            <td className="px-6 py-4">
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">{data.link}</a>
            </td>
            <td className="px-6 py-4">
                {data.created_at.toString()}
            </td>
            <td className="px-6 py-4 text-right">
                {isOldReportPage === 'oldreports'
                    ? <button onClick={() => navigate(`/oldreports/${data.id}`)} className='p-3 text-gray-100 bg-red-500 rounded-lg hover:bg-red-600'>Reopen</button>
                    : <button onClick={() => navigate(`/handlereport/${data.id}`)} className='p-3 text-gray-100 bg-red-500 rounded-lg hover:bg-red-600'>Manage</button>
                }

            </td>
        </tr>
    )
}

export default Row