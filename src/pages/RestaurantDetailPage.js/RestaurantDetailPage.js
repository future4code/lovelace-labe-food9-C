import React from "react"
import { useParams } from "react-router-dom"
import { BASE_URL } from "../../constants/constants/urls"
import useProtectedPage from "../../hooks/useProtectedPage"
import useRequestData from "../../hooks/useRequestData"

export const RestaurantDetailPage = () => {
useProtectedPage()
  const params = useParams()
  console.log(params.id)
  const detailsRestaurant = useRequestData({},`${BASE_URL}/fourFoodC/restaurants/${params.id}`)
   console.log(detailsRestaurant)


    return (
        
        <div>Restaurante</div>

           
    )
}

export default RestaurantDetailPage


