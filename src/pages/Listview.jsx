import React from 'react'
import { Row, Selection } from '../components'

const Listview = () => {


    const fakeData = [
        {
            reporter: null,
            reported: 4,
            content_id: 372,
            type: "Gore/Harm",
            created_at: "2023-04-25T17:13:40.689352",
            completed: false,
            link: "https://mdrn.com/post/372/",
            response: "",
            content_type: "post",
            status: "received",
            content: "Violence is the best",

        },
        {
            reporter: null,
            reported: 7,
            content_id: 427,
            type: "Gore/Harm",
            created_at: "2023-04-25T12:43:40.689352",
            completed: false,
            link: "https://mdrn.com/post/427/",
            response: "",
            content_type: "post",
            status: "received",
            content: "I hate everyone die die die",

        },
        {
            reporter: null,
            reported: 14,
            content_id: 83,
            type: "Gore/Harm",
            created_at: "2023-04-25T17:32:40.689352",
            completed: false,
            link: "https://mdrn.com/post/83/",
            response: "",
            content_type: "post",
            status: "received",
            content: "I wantto kill myself",

        },
        {
            reporter: null,
            reported: 54,
            content_id: 751,
            type: "Gore/Harm",
            created_at: "2023-04-25T09:28:40.689352",
            completed: false,
            link: "https://mdrn.com/post/751/",
            response: "",
            content_type: "post",
            status: "received",
            content: "kill yourself",

        }]


    return (
        <div className='h-auto'>
            <div className='flex items-start justify-center w-full h-full p-11'>
                <div className='container max-w-4xl'>
                    <div className='flex justify-end gap-10 mb-3'>
                        <Selection />
                    </div>
                    <div className='mb-4'>
                        <h1 className='font-bold text-gray-900'>GORE/HARMT</h1>
                        <p className='font-normal text-gray-900'>ACTIVE REPORTS (20)</p>
                    </div>
                    <div className="relative w-full overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        TYPE
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        SEVERITY LEVEL
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        USER
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        TIME REPORTED
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        <span className="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    fakeData.map(data => (
                                        <Row id={data.content_id} {...data} />
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Listview