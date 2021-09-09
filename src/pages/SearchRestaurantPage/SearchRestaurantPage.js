import React, { useState } from "react"
import {HeaderContainer} from "../OrderHistoryPage/styledOrderHistory"
import back from "../../assets/back.svg"
import axios from "axios"
import useRequestData from "../../hooks/useRequestData"
import { BASE_URL } from "../../constants/constants/urls"



export const SearchRestaurantPage = () => {

    const Restaurant = useRequestData([],`${BASE_URL}/restaurants`)
  

    const recipeRestaurants = Restaurant.map((restaurant)=>{

   
    })
    return (

        <div>
          

            <HeaderContainer>
              <p>Restaurante</p>
              <img src={back} alt={"Ícone de voltar"} />
                </HeaderContainer>                 
            <input
                type="text"
                value=""
                onChange=""
            
            >Buscar</input>
            <recipeRestaurants
            id={""}
            
            />

            

            </div>
    )
}


export default SearchRestaurantPage