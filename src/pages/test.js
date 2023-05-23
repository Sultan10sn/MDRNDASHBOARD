// const [type, setType] = useState('')
// const [severityVal, setSeverityVal] = useState(1)

// const { data: reportList, loading, error } = useFetch(
//     type ? `https://mdrn-dev.herokuapp.com/api/v1/get_reports?type=${type}`
//         : 'https://mdrn-dev.herokuapp.com/api/v1/savereport/'
// )

// const { data: severity } = useFetch(`https://mdrn-dev.herokuapp.com/api/v1/get_severity?severity=${severityVal}`)

const [oldReports, setOldReports] = useState([]);
const [oldseverity, setOldSeverity] = useState([]);
const [filteredReports, setFilteredReports] = useState([]);
const [selectedType, setSelectedType] = useState('');
const [selectedSeverity, setSelectedSeverity] = useState(1);

useEffect(() => {
    // Fetch old reports from API or server
    // const fetchOldReports = async () => {
    //     try {
    //         const response = await fetch(`https://mdrn-dev.herokuapp.com/api/v1/get_reports?type=${selectedType}`);
    //         const data = await response.json();
    //         setOldReports(data);
    //         console.log(data)
    //     } catch (error) {
    //         console.error('Error fetching reports:', error);
    //     }
    // };

    // fetchOldReports();
    axios.get(`https://mdrn-dev.herokuapp.com/api/v1/get_reports?type=${selectedType}`)
        .then(data => {
            setOldReports(data.data)

        }).catch(err => {

            console.log(err)
        })

}, []);

useEffect(() => {
    // Fetch old reports from API or server
    // const fetchOldReports = async () => {
    //     try {
    //         const response = await fetch(`https://mdrn-dev.herokuapp.com/api/v1/get_severity?severity=${selectedSeverity}`);
    //         const data = await response.json();
    //         setOldSeverity(data);
    //         setFilteredReports(data);
    //     } catch (error) {
    //         console.error('Error fetching reports:', error);
    //     }
    // };

    // fetchOldReports();

    axios.get(`https://mdrn-dev.herokuapp.com/api/v1/get_severity?severity=${selectedSeverity}`)
        .then(data => {
            setOldSeverity(data.data)

        }).catch(err => {

            console.log(err)
        })

}, []);

useEffect(() => {
    // Apply filters when either selectedType or selectedSeverity changes
    filterReports();
}, [selectedType, selectedSeverity]);

const filterReports = () => {





    // let filterdOldReports = oldReports;

    // // Apply type filter

    // if (selectedType !== '') {
    //     filterdOldReports = filterdOldReports.filter(report => report.type === selectedType);
    // }

    // // Apply severity filter
    // // if (selectedSeverity !== '') {
    // //     filterdOldReports = filterdOldReports.filter(report => report.severity === selectedSeverity);
    // // }

    // setFilteredReports(filterdOldReports);
    // setFilteredReports(filtered);
};

console.log(oldReports)
console.log(oldseverity)
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


console.log(oldReports)



// if (loading) return <Spinner />
// if (error) return <Error />

return (
    <div className='container max-w-4xl px-6 py-2 mx-auto mt-6 md:max-w-7xl md:h-screen lg:py-0'>
        <div className='w-full h-auto bg-white rounded-lg shadow dark:border xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
            <div className='flex items-start justify-center w-full h-full p-11'>
                <div className='container max-w-4xl'>
                    <div className='flex justify-end gap-10 mb-3'>
                        <div>
                            <label htmlFor="type" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Type</label>
                            <select id="type" value={selectedType} onChange={(e) => (setSelectedType(e.target.value))} className="bg-gray-50 border w-32 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option disabled defaultValue=''>All</option>
                                {
                                    types.map(type => {
                                        return <option key={type} value={type}>{type}</option>
                                    })
                                }
                            </select>
                        </div>
                        <div>
                            <label htmlFor="SEVERITY" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Severity</label>
                            <select id="SEVERITY" value={selectedSeverity} onChange={(e) => setSelectedSeverity(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option disabled defaultValue={''}>All</option>
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
                    <div className='mb-4'>
                        {/* <h1 className='font-bold text-gray-900'>{reportList.length > 0 && reportList[0].type}</h1>
                            <p className='font-normal text-gray-900'>ACTIVE REPORTS ({reportList.length})</p> */}
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
                                {/* {
                                        reportList.map(data => (
                                            <Row key={data.id} data={data} />
                                        ))
                                    } */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
)