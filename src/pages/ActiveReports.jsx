import React, { useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch'
import { Row, Spinner } from '../components'

const ActiveReports = () => {
    const [selectedSeverity, setSeletedSeverity] = useState(1)
    const [selectedType, setSelectedType] = useState('')
    const { data: activeReports, loading, error } = useFetch(
        selectedType ? `https://mdrn-dev.herokuapp.com/api/v1/get_reports?type=${selectedType}`
            : `https://mdrn-dev.herokuapp.com/api/v1/get_severity?severity=${selectedSeverity}`
    )
    //  const [filteredActiveReports, setFilteredActiveReports] = useState([])

    const severities = [1, 2, 3, 4]
    const types = [
        'Gore/Harm',
        'HateSpeech',
        'Inappropriate',
        'Bullying',
        'Violence',
        'Spam',
        'Fraud/Scam',
        'FalseInfor',
        'IP',
        'Impersonating',
        'Other'
    ]

    // useEffect(() => {
    //     // Apply filters when either selectedType or selectedSeverity changes
    //     filterActiveReports();
    // }, [selectedType, selectedSeverity]);

    // const filterActiveReports = () => {

    //     let filterdActiveReports = activeReports;

    //     // Apply type filter

    //     if (selectedType) {
    //         filterdActiveReports = filterdActiveReports.filter(report => report.type === selectedType);
    //     } else {

    //         // Apply severity filter
    //         filterdActiveReports = filterdActiveReports.filter(report => report.severity === selectedSeverity);
    //     }

    //     setFilteredActiveReports(filterdActiveReports);

    // };

    // console.log(filteredActiveReports)
    //  console.log(activeReports)
    const handleType = (e) => {
        setSelectedType(e.target.value)
        setSeletedSeverity(1)
    }
    const handleSeverity = (e) => {
        setSeletedSeverity(e.target.value)
        setSelectedType('')
    }


    if (loading) return <Spinner />
    if (error) return <Error />

    return (
        <div className='container max-w-4xl px-6 py-2 mx-auto mt-6 md:max-w-7xl md:h-screen lg:py-0'>
            <div className='w-full h-auto bg-white rounded-lg shadow dark:border xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
                <div className='flex items-start justify-center w-full h-full p-11'>
                    <div className='container max-w-4xl'>
                        <div className='flex justify-end gap-10 mb-3'>
                            <div className='flex items-center gap-4'>
                                <label htmlFor="type" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Type</label>
                                <select id="type" value={selectedType} onChange={handleType} className="bg-gray-50 border w-32 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option defaultValue=''>-- Choose --</option>
                                    {
                                        types.map(type => {
                                            return <option key={type} value={type}>{type}</option>
                                        })
                                    }
                                </select>
                            </div>
                            <div className='flex items-center gap-4 '>
                                <label htmlFor="SEVERITY" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Severity</label>
                                <select id="SEVERITY" value={selectedSeverity} onChange={handleSeverity} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option disabled defaultValue={''}>-- Choose --</option>
                                    {
                                        severities.map(severity => {
                                            return <option key={severity} value={severity}>{severity}</option>
                                        })
                                    }
                                </select>
                            </div>

                            {/* <div>
                                <label htmlFor="TIME" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">TIME</label>
                                <select id="TIME" onChange={(e) => (filteredByDate(e.target.value))} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option disabled defaultValue={''}>All</option>
                                    {
                                        date.map(time => {
                                            return <option key={time} value={time}>{time}</option>
                                        })
                                    }
                                </select>
                            </div> */}
                        </div>
                        {/* <div className='mb-4'>
                            <h1 className='font-bold text-gray-900'>{reportList.length > 0 && reportList[0].type}</h1>
                            <p className='font-normal text-gray-900'>ACTIVE REPORTS ({reportList.length})</p>
                        </div> */}
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

                                        // selectedType && oldReport.map(data => (
                                        //     <Row key={data.id} data={data} />
                                        // )) || oldSeverity && oldSeverity.map(data => (
                                        //     <Row key={data.id} data={data} />
                                        // ))

                                        activeReports.map(data => (
                                            <Row key={data.id} data={data} />
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
export default ActiveReports