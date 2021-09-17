import axios from "axios"
import { BASE_URL } from "../constants/constants/urls"
import { goToHome, goToOrderHistoryPage, goToRegister } from "../routes/coordinator"

export const users = (url, body, clear, history, setIsLoading) => {
  setIsLoading(true)
    axios.post(url, body)
    .then((res) => {
      localStorage.setItem('token', res.data.token)
      clear()
      setIsLoading(false)
      goToHome(history)

      setIsLoading(false)

    })
    .catch((error) => {
      console.log(error.response)
      setIsLoading(false)
    })
}

export const usersSignUp = (url, body, clear, history, setIsLoading) => {
  setIsLoading(true)
  axios.post(url, body)

  .then((res) => {
    localStorage.setItem('token', res.data.token)
    clear()
    setIsLoading(false)
    goToRegister(history)
  })
  .catch((error) => {
    console.log(error.response)
    setIsLoading(false)
  })
} 


export const registerUser = (url, body, history, setIsLoading) => {
  setIsLoading(true)
  axios.put(url, body, {
    headers: {
      Auth: localStorage.getItem("token")
    }

})
.then((res) => {
  setIsLoading(false)
  localStorage.setItem('token', res.data.token)
  alert('Informações salvas com sucesso')
  goToHome(history)
})
.catch((error) => {
  console.log(error.response)
  setIsLoading(false)
})

}

export const addAdress = (body,history) => {
  axios
  .put(`${BASE_URL}/fourFoodC/address`, body, {
      headers: {
          auth: localStorage.getItem("token")
      }
  })
  .then((response) => {
      localStorage.setItem("token", response.data.token)
      goToOrderHistoryPage(history)
  })
  .catch((error) => {
      console.log(error.message)
  })
}

export const editProfile = (body,history) => {
  axios
  .put(`${BASE_URL}/fourFoodC/profile`, body, {
      headers: {
          auth: localStorage.getItem("token")
      }
  })
  .then((res) => { 
    console.log(res.data.user)
      goToOrderHistoryPage(history)
  })
  .catch((error) => {
      console.log(error.message)
  })
}