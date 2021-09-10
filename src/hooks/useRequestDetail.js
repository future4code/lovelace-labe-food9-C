import { useEffect, useState } from "react"
import axios from "axios"

const useRequestDetail = (initialState, url) => {
    const [data, setData] = useState(initialState)
     
    useEffect(() => {
        axios.get(url, {
            headers: {
                 auth: localStorage.getItem("token")
            }
        })
        .then((res) => {
            setData(res.data.restaurant)
        })
        .catch((err) => {
            console.log(err.response)
        })
    }, [url])

    return (data)
}

export default useRequestDetail