import React from "react"
import { useHistory } from "react-router"
import { BASE_URL } from "../../constants/constants/urls"
import useProtectedPage from "../../hooks/useProtectedPage"
import useRequestData from "../../hooks/useRequestData"
import { goToRestDetail } from "../../routes/coordinator"
import { AllItens, ContainerBox, ContainerCard, ContainerImg, ContainerTaxa, ImageContainer, TextRestaurante, TimeContainer } from "./styledRestaurantCard"

<<<<<<< HEAD

export const RestaurantCard = () =>{
=======
const RestaurantCard = () =>{
>>>>>>> 26c833448c012a8754de8512d4e49ff33cf4756b
useProtectedPage()
const history = useHistory()


const onClickCard = (history,restaurantId) => {
    goToRestDetail(history, restaurantId)

}

const restaurant = useRequestData([],`${BASE_URL}/fourFoodC/restaurants`)


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
                            <ContainerTaxa>Frete R${cards.shipping},00</ContainerTaxa>
                        </AllItens>
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

export default RestaurantCard;