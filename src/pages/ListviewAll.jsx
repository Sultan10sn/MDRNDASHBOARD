import React, { useState } from 'react'
import { fakeData } from '../database'
import { Row } from '../components'

const ListviewAll = () => {

    const [timeVal, setTimeVal] = useState('')

    const times = [
        'monthly',
        'weekly',
        'dayly'
    ]


    const handleTime = (e) => {
        setTimeVal(e.target.value)
    }


    return (
        <div className='container px-6 py-2 mx-auto mt-6 max-w-7xl md:h-screen lg:py-0'>
            <div className='w-full h-auto bg-white rounded-lg shadow dark:border xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
                <div className='flex items-start justify-center w-full h-full p-11'>
                    <div className='container max-w-4xl'>
                        <div className='flex justify-end gap-10 mb-3'>
                            <div>
                                <label htmlFor="TIME" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">TIME</label>
                                <select id="TIME" value={timeVal} onChange={handleTime} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    {
                                        times.map(time => {
                                            return <option key={time} value={time}>{time}</option>
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                        <div className='mb-4'>
                            <h1 className='font-bold text-gray-900'>{fakeData[0].type}</h1>
                            <p className='font-normal text-gray-900'>ACTIVE REPORTS({fakeData.length})</p>
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
                                            <Row key={data.content_id} {...data} />
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListviewAll