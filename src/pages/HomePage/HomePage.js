import React from "react"
<<<<<<< HEAD
import { AllItens, BoxText, ContainerBox, ContainerCard, ContainerFeed, ContainerFiltro, ContainerFooter, ContainerImg, ContainerTaxa, IconeCart, IconeHome, IconeUser, ImageContainer, ItemFooterCart, ItemFooterHome, ItemFooterUser, TextFour, TextOne, TextRestaurante, TextThree, TextTwo, TimeContainer } from "./styledHomePage"
import InProgressCard from "../../components/InProgressComponent/InProgressCard"
import ProductQuantity from "../../components/ProductCard/ProductQuantity/ProductQuantity"





export const HomePage = () => {
=======
import useProtectedPage from "../../hooks/useProtectedPage"
import RestaurantCard from "../../components/RestaurantCard/RestaurantCard"

export const HomePage = () => {
    useProtectedPage()

>>>>>>> a3b56e5e84472c2aba2dbb5b69eea51cff759dff
    return (
        
        <RestaurantCard></RestaurantCard>

           
    )
}

export default HomePage


