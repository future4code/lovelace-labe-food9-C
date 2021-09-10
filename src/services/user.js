import axios from "axios"
import { goToHome, goToRegister } from "../routes/coordinator"



export const users = (url, body, clear, history, setIsLoading) => {
  setIsLoading(true)
    axios.post(url, body)
    .then((res) => {
      localStorage.setItem('token', res.data.token)
      clear()
      setIsLoading(false)
      goToHome(history)
    })
    .catch((error) => {
      console.log(error.response)
      setIsLoading(false)
    })
}

export const usersSignUp = (url, body, clear, history, setIsLoading) => {
  // setIsLoading(true)
  axios.post(url, body)
    .then((res) => {
      localStorage.setItem('token', res.data.token)
      clear()
      // setIsLoading(false)
      goToRegister(history)
    })
    .catch((error) => {
      console.log(error.response)
      // setIsLoading(false)
    })
}

export const registerUser = (url, body, setIsLoading) => {
  // setIsLoading(true)
  axios.put(url, body, {
    headers: {
      Auth: localStorage.getItem("token")
    }
  })
    .then((res) => {
      // setIsLoading(false)
      alert('Informações salvas com sucesso')
    })
    .catch((error) => {
      console.log(error.response)
      // setIsLoading(false)
    })
}

// export const useGetFullAdress = (url, body, history, initialState) => {
//    const [data, setData] = useState(initialState)
    
//    useEffect(() => {
//     axios.post(url, body)
//     .then((res) => {
//       console.log(res.data)
//       localStorage.setItem('token', res.data.token)
//       setData(res.data)
//     })
//     .catch((error) => {
//       console.log(error.response.data)
//     })
//    }, [url])

//    return (data)
// }
