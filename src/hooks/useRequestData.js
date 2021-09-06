import { useEffect, useState } from "react"
import axios from "axios"

const useRequestData = (initialState, url) => {
    const [data, setData] = useState(initialState)

    useEffect(() => {
        axios.get(url, {
            headers: {
                 Authorization: localStorage.getItem("token")
            }
        })

        .then((res) => {
            setData(res.data)
        })
    
        .catch(() => {
            alert("Ocorreu um erro, tente novamente!")
        })
    }, [url])

    return (data)
}

export default useRequestData