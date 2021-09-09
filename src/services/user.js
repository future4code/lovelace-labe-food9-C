import axios from "axios"
import { goToHome, goToRegister } from "../routes/coordinator"



export const users = (url, body, clear, history, setIsLoading) => {
<<<<<<< HEAD
  // setIsLoading(true)
=======
  setIsLoading(true)
>>>>>>> 66327a77643150b5c88ae84e8e67dd9619979496
    axios.post(url, body)
    .then((res) => {
      localStorage.setItem('token', res.data.token)
      clear()
<<<<<<< HEAD
      goToHome(history)
      // setIsLoading(false)
    })
    .catch((error) => {
      console.log(error.response)
      // setIsLoading(false)
=======
      setIsLoading(false)
      goToHome(history)

      setIsLoading(false)
=======
      

    })
    .catch((error) => {
      console.log(error.response)
      setIsLoading(false)
>>>>>>> 66327a77643150b5c88ae84e8e67dd9619979496
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

