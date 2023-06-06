import axios from 'axios'
import React, { useEffect, useState } from 'react'

const PutRequest = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {

        axios.get(`https://mdrn-dev.herokuapp.com/api/v1/report/${1}/complete`).then((r) => {
            let user = r.data;
            console.log(user)

            // axios.put(`https://mdrn-dev.herokuapp.com/api/v1/report/${1}/complete`, {
            //     hostname: user.hostname,
            //     password: user.password,
            //     command: "stop",
            // });
        });
    }, [])


    return (
        <div>PutRequest</div>
    )
}

export default PutRequest