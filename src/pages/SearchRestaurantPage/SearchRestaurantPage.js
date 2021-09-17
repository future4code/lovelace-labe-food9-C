import { TextField } from "@material-ui/core"
import React from "react"
import { HeaderAll } from "../../constants/constants/Header"
import { BASE_URL } from "../../constants/constants/urls"
import useForm from "../../hooks/useForm"


export const SearchRestaurantPage = () => {
    const [form, onChange, clear] = useForm({id:"", description:"",shipping:"",address:"",name:"",logoUrl:"",
    deliveryTime:"",category:""})


    const getRestaurant= (event) => {
        event.preventDefault()
        getRestaurant(`${BASE_URL}/fourFoodC/restaurants`, form, clear,)
        console.log("res.data")


    }

    return (
           <div>
            <HeaderAll > 
                <p>Restaurantes</p>
            </HeaderAll>
            <TextField
                name="Restaurants"
                type="text"
                label="Restaurantes"
                placeholder="Buscar Restaurantes"
                variant="outlined"
                value={form.getRestaurant}
                onChange={onChange}
                required
            />
        </div>
    )
}

export default SearchRestaurantPage

