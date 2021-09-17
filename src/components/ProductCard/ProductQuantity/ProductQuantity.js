import React, { useState } from 'react';
import Popup from '../../../services/QuantityPopUp/PopUpAction';
import { ButtonToAddIntoCart, ElemntsOFtheInput, QuantityContainer, SelectInputOfPrductQuantity, TitleOfTheContainer } from './ProdQuantStyled';
import axios from 'axios';
import { useParams } from 'react-router';
import BASE_URL from '../../../constants/constants/urls'


const ProductQuantity = () => {

    const params = useParams()
    
    const actioToAddOrderToTheCart =()=>{
        const body = {
           products: [{}],
           paymentMethod:""
        }
        axios.post (`${BASE_URL}/restaurants/${params.restaurantId}/order`,body,{
            headers:{
                auth:localStorage.getItem("token")

            }
        }).then((response)=>{
            console.log(response.data)
        }).catch((error)=>{
            console.log(error.response.data)
        })
    }



    const [appear, setAppear] = useState(false)

    const alternateTheAppearing = () => {
        setAppear(!appear)
    }



    return (
        <div>
            <button onClick={alternateTheAppearing}>Card de produto</button>
            {appear && <Popup content={<QuantityContainer>
                <TitleOfTheContainer>Selecione a quantidade desejada</TitleOfTheContainer>
                <SelectInputOfPrductQuantity name="cars" id="cars">
                    <ElemntsOFtheInput value="0">0</ElemntsOFtheInput>
                    <ElemntsOFtheInput value="1">1</ElemntsOFtheInput>
                    <ElemntsOFtheInput value="2">2</ElemntsOFtheInput>
                    <ElemntsOFtheInput value="3">3</ElemntsOFtheInput>
                </SelectInputOfPrductQuantity>
                <ButtonToAddIntoCart  onClick={actioToAddOrderToTheCart}>ADCIONAR AO CARRINHO</ButtonToAddIntoCart>
            </QuantityContainer>}
                closeTheQuantityBox={alternateTheAppearing} />}
        </div>
    );
};
export default ProductQuantity;