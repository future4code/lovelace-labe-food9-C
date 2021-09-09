import React from "react"
import useProtectedPage from "../../hooks/useProtectedPage"
import RestaurantCard from "../../components/RestaurantCard/RestaurantCard"


export const HomePage = () => {
    useProtectedPage()


    return (
        
        <RestaurantCard/>

    )
}
export default HomePage


