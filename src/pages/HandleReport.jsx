import React, { useEffect } from 'react'
import imgage from '../assets/P9.jpg'
import { Link, useParams } from 'react-router-dom'
const HandleReport = () => {

    const params = useParams()

    useEffect(() => {
        console.log(params.id)
    })

    return (
        <>

            <div className='container w-full px-6 py-4 mx-auto mt-8 max-w-9xl md:h-screen lg:py-0'>
                <Link to='/' className='text-lg font-bold leading-normal text-gray-800'>back</Link>
                <div className='w-full h-auto bg-white rounded-lg shadow dark:border xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
                    <div className='flex justify-between pt-6'>
                        <div className='flex flex-col flex-1 pl-11'>
                            <p className='font-bold leading-normal text-gray-800'>STATUS: PROCESSING</p>
                            <div className='flex flex-1 mt-3'>
                                <img className='w-56 h-56' src={imgage} />
                                <div className='pl-11'>
                                    <p className='mt-10 font-bold leading-normal text-gray-800'>Item Caption</p>
                                    <textarea className=" mt-4 l h-20 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                </div>
                            </div>
                            <div className='flex flex-col mt-3'>
                                <p> <span className='font-bold leading-normal'>POSTED BY:</span> shua</p>
                                <p> <span className='font-bold leading-normal'> POSTED LINK:</span>  <a href='https://mdrn' className='text-blue-400'>https://mdrn.vercel.app/post</a></p>
                                <p> <span className='font-bold leading-normal'>TIME:</span> 10:11am</p>
                            </div>
                            <div className='container w-full max-w-3xl my-4'>
                                <p>Please write reasons for takeing action against this post</p>
                                <textarea maxLength={100} className=" mt-4 w-full h-24 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                <div className='flex items-center justify-start gap-4 mt-3'>
                                    <button className='flex py-2 text-gray-100 bg-red-500 border-none rounded-md px-7 hover:bg-red-700'>Flag <span>User</span> </button>
                                    <button className='flex gap-2 py-2 text-gray-100 bg-red-500 border-none rounded-md px-7 hover:bg-red-700'>Delete <span>Content</span></button>
                                    <button className='flex gap-2 py-2 text-gray-100 bg-red-500 border-none rounded-md px-7 hover:bg-red-700'>Request <span>Ban</span> </button>
                                    <button className='flex gap-2 py-2 text-gray-100 bg-red-500 border-none rounded-md px-7 hover:bg-red-700'>No <span>Action</span></button>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-start flex-1'>
                            <div className='flex flex-col justify-between'>
                                <div>
                                    <button className='px-3 py-2 text-gray-100 bg-red-500 border-none rounded-md hover:bg-red-600'>Handle Report</button>
                                    <div className='flex items-center gap-8 border-b-2 mt-11'>
                                        <p className='font-bold leading-normal'>SEVERITY LEVEL:<span className='font-normal text-red-500'> 4</span> </p>
                                        <p><span className='font-bold leading-normal'> DATE:</span> 20/2/2023</p>
                                        <p><span className='font-bold leading-normal'> TIME:</span> 10:00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HandleReport