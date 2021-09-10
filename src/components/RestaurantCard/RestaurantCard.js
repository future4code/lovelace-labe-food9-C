import React from "react"
import { useHistory } from "react-router"
import { BASE_URL } from "../../constants/constants/urls"
import useProtectedPage from "../../hooks/useProtectedPage"
import useRequestData from "../../hooks/useRequestData"
import { goToRestDetail } from "../../routes/coordinator"
import { AllItens, ContainerBox, ContainerCard,ContainerImg, ContainerTaxa, ImageContainer,TextRestaurante,TimeContainer } from "./styledRestaurantCard"



export const RestaurantCard = () =>{
useProtectedPage()
const history = useHistory()

const onClickCard = (history,id) => {
    console.log(id)
    goToRestDetail(history, id)
}

const restaurant = useRequestData([],`${BASE_URL}/fourFoodC/restaurants`)
console.log(restaurant)


const cardsOfRestaurant = restaurant && restaurant.map((cards)=>{
    return( 
    <div key = {cards.id}>
        <li>{cards.category}</li>
            <ContainerCard >
                <ContainerBox>
                    <ContainerImg onClick={()=>onClickCard(history,cards.id)}>
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