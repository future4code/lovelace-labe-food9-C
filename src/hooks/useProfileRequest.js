import { useEffect, useState } from "react"
import axios from "axios"

const useProfileRequest = (initialState, url) => {
    const [data, setData] = useState(initialState)
     
    useEffect(() => {
        axios.get(url, {
            headers: {
     auth: localStorage.getItem("token")
            }
        })
        .then((res) => {
            setData(res.data.user)
        })

    
        .catch(() => {
            alert("Ocorreu um erro, tente novamente!")
        })
    }, [url])

    return (data)
}

export default useProfileRequest