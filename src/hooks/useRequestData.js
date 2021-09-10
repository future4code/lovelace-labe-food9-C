import { useEffect, useState } from "react"
import axios from "axios"

const useRequestData = (initialState, url) => {
    const [data, setData] = useState(initialState)

    useEffect(() => {
        axios.get(url, {
            headers: {
                 auth: localStorage.getItem("token")
            }
        })
        .then((res) => {
            setData(res.data.restaurants)
        })
<<<<<<< HEAD
    
        .catch((err) => {
=======
        .catch((err) => {
            console.log(err)
>>>>>>> master
            alert("Ocorreu um erro, tente novamente!")
            console.log(err.response.data)
        })
    }, [url])

    return (data)
}

export default useRequestData