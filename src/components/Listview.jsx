import React from 'react'

const Listview = () => {
    return (
        <div className='h-screen p-20'>
            <div className='container flex flex-col items-center justify-center w-full max-w-3xl mx-auto mt-10 h-96'>
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
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-600">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Post
                                </th>
                                <td className="px-6 py-4 text-red-500">
                                    4
                                </td>
                                <td className="px-6 py-4">
                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Link to User</a>
                                </td>
                                <td className="px-6 py-4">
                                    16/10/2023 at 14:25pm
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button className='p-3 text-gray-100 bg-red-500 rounded-lg hover:bg-red-600'>Manage</button>
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-600">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Comment
                                </th>
                                <td className="px-6 py-4 text-red-500">
                                    4
                                </td>
                                <td className="px-6 py-4">
                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Link to User</a>
                                </td>
                                <td className="px-6 py-4">
                                    16/10/2023 at 14:25pm
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button className='p-3 text-gray-100 bg-red-500 rounded-lg hover:bg-red-600'>Manage</button>
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-600">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Comment
                                </th>
                                <td className="px-6 py-4 text-red-500">
                                    4
                                </td>
                                <td className="px-6 py-4">
                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Link to User</a>
                                </td>
                                <td className="px-6 py-4">
                                    16/10/2023 at 14:25pm
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button className='p-3 text-gray-100 bg-red-500 rounded-lg hover:bg-red-600'>Manage</button>
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-600">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Post
                                </th>
                                <td className="px-6 py-4 text-red-500">
                                    4
                                </td>
                                <td className="px-6 py-4">
                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Link to User</a>
                                </td>
                                <td className="px-6 py-4">
                                    16/10/2023 at 14:25pm
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button className='p-3 text-gray-100 bg-red-500 rounded-lg hover:bg-red-600'>Manage</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Listview