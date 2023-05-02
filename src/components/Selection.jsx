import React from 'react'

const Selection = () => {
    return (
        <>
            <div>
                <label htmlFor="App Version" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">APP VERSION</label>
                <select id="App Version" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected>12.2</option>
                    <option value="US">11.4</option>
                    <option value="CA">22.1</option>

                </select>
            </div>
            <div>
                <label htmlFor="TIME" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">TIME</label>
                <select id="TIME" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected>weekly</option>
                    <option value="US">Monthly</option>
                    <option value="CA">daily</option>
                </select>
            </div>
        </>

    )
}

export default Selection