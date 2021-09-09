import React from "react"
import { useParams } from "react-router"
import { BASE_URL } from "../../constants/constants/urls"
import useProtectedPage from "../../hooks/useProtectedPage"
import useRequestData from "../../hooks/useRequestData"

export const RestaurantDetailPage = () => {
    useProtectedPage()
  const params = useParams()
  const restaurantes = useRequestData([], `${BASE_URL}/restaurants/${params.id}`)
console.log(restaurantes)

























    return (
        
        <div>Restaurante</div>

           
    )
}

export default RestaurantDetailPage


