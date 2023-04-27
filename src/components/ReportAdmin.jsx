import React from 'react'

const ReportAdmin = () => {
    return (
        <div className='h-screen'>
            <div className='flex justify-between pt-16'>
                <div className='flex flex-col items-center flex-1 h-96'>
                    <div className='flex gap-20'>
                        <span>4</span>
                        <p className='text-gray-800'>Gore/Harm</p>
                    </div>

                    <div className='flex items-center justify-center text-gray-100 mt-11 w-44 h-44 bg-slate-500'>
                        media content
                    </div>
                    <div className='flex flex-col mt-14'>
                        <p>Post</p>
                        <a href='https://mdrn' className='text-blue-400'>https://mdrn.vercel.app/post</a>
                    </div>
                </div>
                <div className='flex-1 h-96'>
                    <div className='flex flex-col'>
                        <p>18:00</p>
                        <p className='mt-10'>item caption</p>
                    </div>
                </div>
                <div className='flex-1 h-96'>
                    <div className='flex flex-col justify-between h-72'>
                        <div>
                            <button className='px-3 py-2 text-gray-100 rounded-md hover:bg-slate-800 bg-slate-500'>handle report</button>
                            <p className='mt-4 font-medium'>status: Recevied</p>
                        </div>
                        <div className='mt-52'>
                            <p>posted by: user_id</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReportAdmin