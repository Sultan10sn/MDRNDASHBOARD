import React from 'react'
import { Chartbar, Piechart, Report } from '../components'
import { fakeData, data, PiechartData } from '../database'


const Charts = () => {
  return (
    <div className='container max-w-6xl px-6 py-2 mx-auto mt-6 md:h-screen lg:py-0'>
      <div className='w-full h-auto bg-white rounded-lg shadow dark:border xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
        <div className='flex items-start justify-center w-full p-11'>
          <div className='container max-w-6xl'>
            <div className='flex justify-end gap-10 mb-3'>
              <div>
                <label htmlFor="App Version" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">APP VERSION</label>
                <select id="App Version" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option defaultValue='12.1'>12.2</option>
                  <option value="11.4">11.4</option>
                  <option value="22.1">22.1</option>
                </select>
              </div>
              <div>
                <label htmlFor="TIME" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">TIME</label>
                <select id="TIME" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option value='weekly' selected>weekly</option>
                  <option value="mouthly">Monthly</option>
                  <option value="mouthly">daily</option>
                </select>
              </div>
            </div>
            <div className='mb-4'>
              <div className='w-full h-auto p-4 bg-white rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700'>
                <div className='flex items-center justify-between'>
                  <p className="block text-sm font-bold text-gray-900 dark:text-white">Weekly Summary</p>
                  <div className='flex items-center gap-3'>
                    <label htmlFor="type" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Type</label>
                    <select id="type" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option selected value="Gore//Harm">Gore//Harm</option>
                      <option value="Heart Speech">Heart Speech</option>
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
              <h1 className='font-bold text-gray-900'>GORE/HARMT</h1>
              <p className='font-normal text-gray-900'>ACTIVE REPORTS (20)</p>
            </div>
            <div className='flex items-center gap-7'>
              <Report title='Active Reports' data={fakeData} />
              <Report title='Pass Reports' data={fakeData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Charts