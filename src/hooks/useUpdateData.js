import { useEffect, useState } from "react"
import axios from "axios"

const useUpdateData = (initialState, url, body) => {
    const [data, setData] = useState(initialState)

    useEffect(() => {
        axios.put(url, body, {
            headers: {
                 auth: localStorage.getItem("token")
            }
        })

        .then((res) => {
            console.log(res.data)
            setData(res.data)
        })
    
        .catch((err) => {
            alert("Ocorreu um erro, tente novamente!")
            console.log(err.response.data)
        })
    }, [body, url])

    return data
}

export default useUpdateData