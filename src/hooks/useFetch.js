import axios from "axios"
import { useEffect, useState } from "react"

const useFetch = (url) => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {

        axios.get(url)
            .then(data => {
                setData(data.data)
                setLoading(false)
                setError(null)
            }).catch(err => {
                setError(true)
                setLoading(false)
                console.log(err)
            })

    }, [url])

    return { data, loading, error }

}

export default useFetch;