import { Category, CategoryOutlined } from "@material-ui/icons"
import React, { useState } from "react"
import { useHistory } from "react-router"
import { BASE_URL } from "../../constants/constants/urls"
import useProtectedPage from "../../hooks/useProtectedPage"
import useRequestData from "../../hooks/useRequestData"
import { AllItens, ContainerBox, ContainerCard, ContainerFeed, ContainerFiltro, ContainerFooter, ContainerImg, ContainerTaxa, IconeCart, IconeHome, IconeUser, ImageContainer, ItemFooterCart, ItemFooterHome, ItemFooterUser, MasterContainer,TextOne, TextRestaurante,TimeContainer } from "./RestauranteCardStyle"

export const RestaurantCard = () =>{
useProtectedPage()
const history = useHistory()
const category= []
console.log(category)


const restaurant = useRequestData([],`${BASE_URL}/fourFoodC/restaurants`)
console.log(restaurant)


const cardsOfRestaurant = restaurant && restaurant.map((cards)=>{
    return( 
    <div key = {cards.id}>
        <li>{cards.category}</li>
            <ContainerCard>
                <ContainerBox>
                    <ContainerImg>
                        <ImageContainer  src={cards.logoUrl} alt='Logo'/>
                    </ContainerImg>
                        <TextRestaurante>{cards.name}</TextRestaurante>
                   <AllItens> 
                       <TimeContainer>{cards.deliveryTime} min</TimeContainer>
                    <ContainerTaxa>Frete R${cards.shipping},00</ContainerTaxa></AllItens>
                </ContainerBox>
            </ContainerCard>
    </div>
    )
 })

 return (
   <div>
       <h1>Feed</h1>
       {cardsOfRestaurant}
       </div>
    )
}

export default RestaurantCard