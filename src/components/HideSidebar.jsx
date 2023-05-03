import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const HideSidebar = ({ children }) => {

    const [showSidebar, setShowSidebar] = useState(false)
    const { pathname } = useLocation()

    useEffect(() => {

        if (pathname === '/login') {
            setShowSidebar(false)
        } else {
            setShowSidebar(true)
        }

    }, [pathname])

    return (
        <div>{showSidebar && children}</div>
    )
}

export default HideSidebar