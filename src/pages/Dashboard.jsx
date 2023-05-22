import React, { useState } from 'react'
import { Chartbar, Error, Piechart, Report, Spinner } from '../components'
import { PiechartData, data } from '../database'
import useFetch from '../hooks/useFetch'



const Dashboard = () => {

  const [type, setType] = useState('')
  const { data, loading, error } = useFetch(
    type ? `https://mdrn-dev.herokuapp.com/api/v1/get_reports?type=${type}`
      : 'https://mdrn-dev.herokuapp.com/api/v1/savereport/'
  )

  const { data: activeReport } = useFetch('https://mdrn-dev.herokuapp.com/api/v1/activereports')
  const { data: oldrepors } = useFetch('https://mdrn-dev.herokuapp.com/api/v1/activereports')


  console.log(activeReport)
  console.log(oldrepors)
  console.log(data)

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

  const handleTypes = (e) => {
    setType(e.target.value)
  }




  console.log(type)

  if (loading) return <Spinner />
  if (error) return <Error />


  return (
    <div className='container px-6 py-2 mx-auto mt-6 md:max-w-6xl md:h-screen lg:py-0'>
      <div className='w-full h-auto'>
        <div className='flex items-start justify-center w-full'>
          <div className='container max-w-6xl'>
            <div className='flex justify-end gap-10 mb-3'>
              <div>
                {/* <label htmlFor="TIME" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">TIME</label>
                <select id="TIME" value={timeVal} onChange={handleTime} className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

                  {
                    times.map(time => {
                      return <option key={time} value={time}>{time}</option>
                    })
                  }
                </select> */}
              </div>
            </div>
            <div className='mb-4'>
              <div className='w-full h-auto p-4 bg-white rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700'>
                <div className='flex items-center justify-between'>
                  <p className="block text-sm font-bold text-gray-900 dark:text-white">Weekly Summary</p>
                  <div className='flex items-center gap-3'>
                    <label htmlFor="type" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Type</label>
                    <select id="type" value={type} onChange={handleTypes} className="bg-gray-50 border w-32 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option disabled defaultValue=''>All</option>
                      {
                        types.map(type => {
                          return <option key={type} value={type}>{type}</option>
                        })
                      }
                    </select>
                  </div>
                </div>
                <div className='container grid h-auto grid-cols-5 m-auto'>
                  <div className='col-span-5 h-72 md:h-80 md:col-span-3'>
                    <Chartbar data={data} />
                  </div>
                  <div className='col-span-5 h-72 md:h-80 md:col-span-2'>
                    <Piechart data={PiechartData} />
                  </div>
                </div>
              </div>
              <h1 className='font-bold text-gray-900'></h1>
              <p className='font-normal text-gray-900'>ACTIVE REPORTS ({data.length})</p>
            </div>
            <div className='flex items-center gap-7'>
              {/* the activereports data will be passd as props to this component */}
              <Report title='Active Reports' data={data} />
              {/* the oldrepots data will be passd as props to this component */}
              <Report title='Pass Reports' data={data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard