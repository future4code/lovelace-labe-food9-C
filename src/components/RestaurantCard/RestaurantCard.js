import React from "react"
import { useHistory } from "react-router"
import { BASE_URL } from "../../constants/constants/urls"
import useProtectedPage from "../../hooks/useProtectedPage"
import useRequestData from "../../hooks/useRequestData"
import { AllItens, ContainerBox, ContainerCard, ContainerFeed, ContainerFiltro, ContainerFooter, ContainerImg, ContainerTaxa, IconeCart, IconeHome, IconeUser, ImageContainer, ItemFooterCart, ItemFooterHome, ItemFooterUser, MasterContainer,TextOne, TextRestaurante,TimeContainer } from "./RestauranteCardStyle"

export const RestaurantCard = () =>{
useProtectedPage()
const history = useHistory()


const restaurant = useRequestData([],`${BASE_URL}/fourFoodC/restaurants`)
console.log(restaurant)


const cardsOfRestaurant = restaurant && restaurant.map((cards)=>{
    return( 
    <ContainerFeed key = {cards.id}>
        <MasterContainer>
            <ContainerFiltro title= {cards.category}>
                <TextOne><span>{cards.category}</span></TextOne>
            </ContainerFiltro>
            <ContainerCard key={cards.id}>
                <ContainerBox>
                    <ContainerImg>
                        <ImageContainer src={cards.logoUrl} alt='foto do sanduba' />
                    </ContainerImg>
                        <TextRestaurante>{cards.name}</TextRestaurante>
                   <AllItens> 
                       <TimeContainer>{cards.deliveryTime} min</TimeContainer>
                    <ContainerTaxa>Frete R${cards.shipping},00</ContainerTaxa></AllItens>
                </ContainerBox>
            </ContainerCard>

            <ContainerFooter>
                <AllItens>
                    <ItemFooterHome>
                        <IconeHome src='https://cdn.zeplin.io/5dd5ab8e5fb2a0060f81698f/assets/E718CCC7-08DF-4BEA-B3D1-8DCB3E8A3BA5.svg' />
                    </ItemFooterHome>
                    <ItemFooterCart>
                        <IconeCart src='https://cdn.zeplin.io/5dd5ab8e5fb2a0060f81698f/assets/31E0BDE3-26B3-421A-AEC5-883D098413D6.svg' />
                    </ItemFooterCart>

                    <ItemFooterUser><IconeUser src='https://cdn.zeplin.io/5dd5ab8e5fb2a0060f81698f/assets/3725C74F-82A8-4E32-9948-8CBFC09C877F.svg' />
                    </ItemFooterUser>
                </AllItens>
            </ContainerFooter>
            </MasterContainer>
        </ContainerFeed>
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