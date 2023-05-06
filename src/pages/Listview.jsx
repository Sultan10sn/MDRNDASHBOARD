import React, { useState } from 'react'
import { Row, Selection } from '../components'
import { fakeData } from '../database'

const Listview = () => {

    const [versionVal, setVersionVal] = useState("")
    const [timeVal, setTimeVal] = useState('')

    const versions = [
        '11.2',
        '12.3',
        '13.5'
    ]

    const times = [
        'monthly',
        'weekly',
        'dayly'
    ]

    const handleVersion = (e) => {
        setVersionVal(e.target.value)
    }

    const handleTime = (e) => {
        setTimeVal(e.target.value)
    }


    return (
        <div className='container px-6 py-2 mx-auto mt-6 max-w-7xl md:h-screen lg:py-0'>
            <div className='w-full h-auto bg-white rounded-lg shadow dark:border xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
                <div className='flex items-start justify-center w-full h-full p-11'>
                    <div className='container max-w-4xl'>
                        <div className='flex justify-end gap-10 mb-3'>
                            <Selection
                                versions={versions}
                                versionVal={versionVal}
                                handleVersion={handleVersion}
                                times={times}
                                timeVal={timeVal}
                                handleTime={handleTime} />
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

export default Listview