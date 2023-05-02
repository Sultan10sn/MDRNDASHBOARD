import React from 'react'
import { Chartbar, Piechart, Selection } from '../components'
import { Link } from 'react-router-dom'
import { DownArrow } from '../utiles'
import DropDownbtn from '../components/DropDownbtn'


const Charts = () => {
  return (
    <div className='container max-w-6xl px-6 py-2 mx-auto mt-6 md:h-screen lg:py-0'>
      <div className='w-full h-auto bg-white rounded-lg shadow dark:border xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
        <div className='flex items-start justify-center w-full p-11'>
          <div className='container max-w-6xl'>
            <div className='flex justify-end gap-10 mb-3'>
              <Selection />
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
                    <Chartbar />
                  </div>
                  <div className='col-span-1 md:col-span-1 h-96'>
                    <Piechart />
                  </div>
                </div>
              </div>
              <h1 className='font-bold text-gray-900'>GORE/HARMT</h1>
              <p className='font-normal text-gray-900'>ACTIVE REPORTS (20)</p>
            </div>
            <div className='flex items-center gap-7'>
              <DropDownbtn />
              <DropDownbtn />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Charts