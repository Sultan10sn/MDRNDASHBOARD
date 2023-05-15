import React, { useState } from 'react'
import { Chartbar, Piechart, Report, Selection } from '../components'
import { fakeData, data, PiechartData } from '../database'


const Dashboard = () => {

  const [timeVal, setTimeVal] = useState("")
  const [apidata, setApiData] = useState(fakeData)

  console.log(apidata)

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



  const handleTime = (e) => {
    setTimeVal(e.target.value)
  }

  const filteredByType = (type) => {
    setApiData(
      fakeData.filter(data => {
        return data.type === type
      })
    )
  }

  const type = Array.from(
    new Set(fakeData.map(data => data.type))
  )


  return (
    <div className='container max-w-6xl px-6 py-2 mx-auto mt-6 md:h-screen lg:py-0'>
      <div className='w-full h-auto'>
        <div className='flex items-start justify-center w-full'>
          <div className='container max-w-6xl'>
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
              <div className='w-full h-auto p-4 bg-white rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700'>
                <div className='flex items-center justify-between'>
                  <p className="block text-sm font-bold text-gray-900 dark:text-white">Weekly Summary</p>
                  <div className='flex items-center gap-3'>
                    <label htmlFor="type" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Type</label>
                    <select id="type" onChange={(e) => (filteredByType(e.target.value))} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option disabled defaultValue=''>All</option>
                      {
                        type.map(type => {
                          return <option key={type} value={type}>{type}</option>
                        })
                      }
                    </select>
                  </div>
                </div>
                <div className='container grid h-auto grid-cols-3 gap-2 m-auto'>
                  <div className='col-span-3 h-96 md:col-span-2'>
                    <Chartbar data={data} />
                  </div>
                  <div className='col-span-1 md:col-span-1 h-96'>
                    <Piechart data={PiechartData} />
                  </div>
                </div>
              </div>
              <h1 className='font-bold text-gray-900'>{apidata[0].type}</h1>
              <p className='font-normal text-gray-900'>ACTIVE REPORTS({apidata.length})</p>
            </div>
            <div className='flex items-center gap-7'>
              <Report title='Active Reports' apidata={apidata} />
              <Report title='Pass Reports' apidata={apidata} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard