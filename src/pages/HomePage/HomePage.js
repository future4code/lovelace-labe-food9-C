import React from "react"
import RestaurantCard from "../../components/RestaurantCard/RestaurantCard"
import useProtectedPage from "../../hooks/useProtectedPage"


export const HomePage = () => {
    useProtectedPage()

    return (
        <div>
        <RestaurantCard/>
         </div>
           
    )
}

export default HomePage


