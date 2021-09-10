import { HeaderContainer } from "../OrderHistoryPage/styledOrderHistory"
import React, { useState } from "react"
import back from "../../assets/back.svg"
import { BASE_URL } from "../../constants/constants/urls"
import { TextField } from "@material-ui/core"
import useForm from "../../hooks/useForm"
import { useHistory } from "react-router"


export const SearchRestaurantPage = () => {
    const history = useHistory()
    const [form, onChange, clear] = useForm({id:"", description:"",shipping:"",address:"",name:"",logoUrl:"",
    deliveryTime:"",category:""})
    const getRestaurant= (event) => {
        event.preventDefault()
        getRestaurant(`${BASE_URL}/restaurants`, form, clear)
        console.log("res.data")
    }
    return (
        <div>
            <HeaderContainer>
              <p>Restaurantes</p>
              <img src={back} alt={"Ícone de voltar"} />
                </HeaderContainer>
                <TextField
            name="Restaurants"
            type="text"
            label="Restaurantes"
            placeholder="Buscar Restaurantes"
            variant="outlined"
            value={form.Restaurants}
            onChange={onChange}
            required
            />
            <recipeRestaurants />
            </div>
    )
}
export default SearchRestaurantPage
