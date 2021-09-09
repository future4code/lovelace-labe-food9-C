import React from "react"

import { AllItens, BoxText, ContainerBox, ContainerCard, ContainerFeed, ContainerFiltro, ContainerFooter, ContainerImg, ContainerTaxa, IconeCart, IconeHome, IconeUser, ImageContainer, ItemFooterCart, ItemFooterHome, ItemFooterUser, TextFour, TextOne, TextRestaurante, TextThree, TextTwo, TimeContainer } from "./styledHomePage"
import InProgressCard from "../../components/InProgressComponent/InProgressCard"
import ProductQuantity from "../../components/ProductCard/ProductQuantity/ProductQuantity"
import useProtectedPage from "../../hooks/useProtectedPage"
import RestaurantCard from "../../components/RestaurantCard/RestaurantCard"




export const HomePage = () => {



export const HomePage = () => {
    useProtectedPage()


    return (
        
        <RestaurantCard/>

           
    )
}

export default HomePage


