import React from "react"
import useProtectedPage from "../../hooks/useProtectedPage"
import RestaurantCard from "../../components/RestaurantCard/RestaurantCard"
import SearchRestaurantPage from "../SearchRestaurantPage/SearchRestaurantPage"


export const HomePage = () => {
    useProtectedPage()


    return (
        <div>
        <SearchRestaurantPage/>
        <RestaurantCard/>
        </div>
    )
}
export default HomePage


