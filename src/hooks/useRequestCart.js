import axios from 'axios';
import React, { useEffect, useState } from 'react';


export const useRequestCart = (url, initialState) => {
    const [historic, setHistoric] = useState(initialState)

    useEffect(() => {
    axios.get(url, {
        headers: {
             Auth: localStorage.getItem("token")
        }
    })
    .then((res) => {
        setHistoric(res.data)
    })
    .catch((error) => {
        console.log(error.response)
    })
}, [url])

    return historic
}