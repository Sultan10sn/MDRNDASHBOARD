import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Report({ title, apidata }) {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="inline-flex w-full px-2 py-1 justify-center gap-x-1.5 rounded-md bg-red-500 md:px-11 md:py-2 text-sm font-semibold text-gray-100 shadow-sm ring-1 ring-inset ring-red-300 hover:bg-red-700">
                    {title}
                    <span className='px-1 text-gray-900 border-none rounded-full bg-gray-50 '>{apidata.length}</span>
                    <ChevronDownIcon className="w-5 h-5 -mr-1 text-gray-100" aria-hidden="true" />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 z-10 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {
                        apidata.map(data => {

                            return <div className="py-1" key={data.content_id}>
                                <Menu.Item>
                                    {({ active }) => (
                                        <Link
                                            to={`/list/${data.content_id}`}
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            )}
                                            state={{ data: "hi" }}
                                        >
                                            {data.type}
                                        </Link>
                                    )}
                                </Menu.Item>
                            </div>
                        })
                    }
                </Menu.Items>
            </Transition>
        </Menu>
    )
}
